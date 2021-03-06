import { LuigiAuth } from '../../core-api';
import * as GenericHelpers from './generic-helpers';

export const getStoredAuthData = () =>
  JSON.parse(localStorage.getItem('luigi.auth'));

export const isLoggedIn = () => {
  const storedAuthData = JSON.parse(localStorage.getItem('luigi.auth'));
  const isAuthValid = () =>
    storedAuthData.accessTokenExpirationDate > Number(new Date());
  return storedAuthData && isAuthValid();
};

/**
 * Checks if there is a error parameter in the url
 * and returns error and error description
 */
export const parseUrlAuthErrors = () => {
  const error = GenericHelpers.getUrlParameter('error');
  const errorDescription = GenericHelpers.getUrlParameter('errorDescription');
  if (error) {
    return { error, errorDescription };
  }
  return;
};
/**
 * Triggers onAuthError event with the found error
 * and error parameters.
 * @param {object} providerInstanceSettings
 * @param {string} error
 * @param {string} errorDescription
 */
export const handleUrlAuthErrors = async (
  providerInstanceSettings,
  error,
  errorDescription
) => {
  if (error) {
    return await LuigiAuth.handleAuthEvent(
      'onAuthError',
      providerInstanceSettings,
      { error, errorDescription },
      providerInstanceSettings.logoutUrl +
        '?markus=test&post_logout_redirect_uri=' +
        providerInstanceSettings.post_logout_redirect_uri +
        '&error=' +
        error +
        '&errorDescription=' +
        errorDescription
    );
  }
  return true;
};
