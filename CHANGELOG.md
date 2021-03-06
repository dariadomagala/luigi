# Changelog

> Note: All the versions not mentioned in the changelog file do not contain changes. 

<!-- 
Generate the changelog using the lerna-changelog tool. 
Run the following command to generate changelog content for pull requests that have been merged since the time when the last git tag was created:

./node_modules/lerna-changelog/bin/cli.js --ignoreCommiters

You can also generate changelog content corresponding to pull requests that were merged in between particular git tags:

./node_modules/lerna-changelog/bin/cli.js --ignoreCommiters --from core-0.3.0 --to core-0.3.1

The lerna-changelog tool detects changes based on PR labels and maps them to sections as per the configuration in the package.json file.
  "changelog": {
    "labels": {
      "breaking": ":boom: Breaking Change",
      "enhancement": ":rocket: Added",
      "bug": ":bug: Fixed",
      "documentation": ":memo: Documentation"
    }
    ...
  }
-->
## [v0.4.11] (2019-04-12)

#### :rocket: Added
* [#468](https://github.com/SAP/luigi/pull/468) Check origin of postMessages ([@dariadomagala](https://github.com/dariadomagala))
* [#460](https://github.com/SAP/luigi/pull/460) Modal mfs e2e tests ([@parostatkiem](https://github.com/parostatkiem))
* [#451](https://github.com/SAP/luigi/pull/451) Prevent unlogged rendering ([@parostatkiem](https://github.com/parostatkiem))
* [#463](https://github.com/SAP/luigi/pull/463) Add simple collapsible navigation option ([@hardl](https://github.com/hardl))
* [#459](https://github.com/SAP/luigi/pull/459) Display labels in mobile top header menu, vertical alignment for labels ([@marynaKhromova](https://github.com/marynaKhromova))
* [#446](https://github.com/SAP/luigi/pull/446) Modal mfs ([@JohannesDoberer](https://github.com/JohannesDoberer))
* [#438](https://github.com/SAP/luigi/pull/438) Improve login error behavior ([@maxmarkus](https://github.com/maxmarkus))
* [#437](https://github.com/SAP/luigi/pull/437) Optimize luigi.css size ([@marynaKhromova](https://github.com/marynaKhromova))
* [#424](https://github.com/SAP/luigi/pull/424) Product switcher on mobile ([@parostatkiem](https://github.com/parostatkiem))
* [#435](https://github.com/SAP/luigi/pull/435) Fix alert message hidden under content window ([@y-kkamil](https://github.com/y-kkamil))
* [#425](https://github.com/SAP/luigi/pull/425) Add ts declaration file ([@y-kkamil](https://github.com/y-kkamil))
* [#423](https://github.com/SAP/luigi/pull/423) Duplicated logos and app switcher markup ([@JohannesDoberer](https://github.com/JohannesDoberer))

#### :bug: Fixed
* [#461](https://github.com/SAP/luigi/pull/461) Prevent unescaped characters in the Alert component ([@y-kkamil](https://github.com/y-kkamil))
* [#466](https://github.com/SAP/luigi/pull/466) Deactivate Typescript Declaration file for Luigi Client ([@jesusreal](https://github.com/jesusreal))
* [#448](https://github.com/SAP/luigi/pull/448) Escape some html characters for alert component ([@y-kkamil](https://github.com/y-kkamil))
* [#429](https://github.com/SAP/luigi/pull/429) Luigi client package should not contain src folder ([@jesusreal](https://github.com/jesusreal))
* [#427](https://github.com/SAP/luigi/pull/427) Fix transparent background in alerts ([@dariadomagala](https://github.com/dariadomagala))

#### :memo: Documentation
* [#454](https://github.com/SAP/luigi/pull/454) Documentation for modal microfrontends ([@JohannesDoberer](https://github.com/JohannesDoberer))
* [#442](https://github.com/SAP/luigi/pull/442) Remove Creative Commons license from the docs folder ([@klaudiagrz](https://github.com/klaudiagrz))
* [#419](https://github.com/SAP/luigi/pull/419) Change the codeowners file ([@mmitoraj](https://github.com/mmitoraj))


## [v0.4.10] (2019-03-08)

#### :bug: Fixed
* [#417](https://github.com/SAP/luigi/pull/417) Fix node refresh ([@hardl](https://github.com/hardl))

## [v0.4.9] (2019-03-07)

#### :bug: Fixed
* [#412](https://github.com/SAP/luigi/pull/412) Focus improvements ([@hardl](https://github.com/hardl))
* [#409](https://github.com/SAP/luigi/pull/409) Fix double-click selection issue ([@hardl](https://github.com/hardl))
* [#411](https://github.com/SAP/luigi/pull/411) Wrap alert in an invisible overlay ([@parostatkiem](https://github.com/parostatkiem))

## v0.4.8 (2019-02-20)

#### :bug: Fixed
* [#403](https://github.com/SAP/luigi/pull/403) fix generic alert bug ([@JohannesDoberer](https://github.com/JohannesDoberer))
* [#333](https://github.com/SAP/luigi/pull/333) Fix errors when building luigi angular sample application ([@kwiatekus](https://github.com/kwiatekus))

## v0.4.7 (2019-02-08)

#### :rocket: Added
* [#395](https://github.com/SAP/luigi/pull/395) Add generic alert ([@jesusreal](https://github.com/jesusreal))

#### :bug: Fixed
* [#394](https://github.com/SAP/luigi/pull/394) fix application setup issues ([@JohannesDoberer](https://github.com/JohannesDoberer))

## v0.4.6 (2019-02-07)

#### :rocket: Added
* [#390](https://github.com/SAP/luigi/pull/390) Implement test coverage feature ([@parostatkiem](https://github.com/parostatkiem))
* [#389](https://github.com/SAP/luigi/pull/389) Add generic confirmation modal ([@jesusreal](https://github.com/jesusreal))
* [#385](https://github.com/SAP/luigi/pull/385) Reload microfrontend when clicking on selected node ([@maxmarkus](https://github.com/maxmarkus))
* [#371](https://github.com/SAP/luigi/pull/371) add product switcher to navigation ([@JohannesDoberer](https://github.com/JohannesDoberer))

#### :bug: Fixed
* [#392](https://github.com/SAP/luigi/pull/392) Reload same node fails if no iframe exists ([@maxmarkus](https://github.com/maxmarkus))
* [#380](https://github.com/SAP/luigi/pull/380) Fix default child and 404 error mechanism bug ([@dariadomagala](https://github.com/dariadomagala))
## [v0.4.5] (2019-01-23)

#### :rocket: Added
* [#313](https://github.com/SAP/luigi/pull/313) Luigi config meets es6 ([@parostatkiem](https://github.com/parostatkiem))
* [#325](https://github.com/SAP/luigi/pull/325) Webpack for LuigiClient ([@parostatkiem](https://github.com/parostatkiem))
* [#321](https://github.com/SAP/luigi/pull/321) Dynamic nodes prevent navigation tree mutation ([@maxmarkus](https://github.com/maxmarkus))
* [#310](https://github.com/SAP/luigi/pull/310) Improve 404 handling ([@parostatkiem](https://github.com/parostatkiem))
* [#315](https://github.com/SAP/luigi/pull/315) Add isolate all views setting ([@dariadomagala](https://github.com/dariadomagala))
* [#339](https://github.com/SAP/luigi/pull/339) Increase oidc client loading timeout ([@kwiatekus](https://github.com/kwiatekus))

#### :bug: Fixed
* [#377](https://github.com/SAP/luigi/pull/377) Fix iframe top position ([@jesusreal](https://github.com/jesusreal))
* [#378](https://github.com/SAP/luigi/pull/378) Fix frame reload on 404 ([@dariadomagala](https://github.com/dariadomagala))
* [#368](https://github.com/SAP/luigi/pull/368) Dynamic path params not passed to children providers - fix ([@pekura](https://github.com/pekura))
* [#362](https://github.com/SAP/luigi/pull/362) Relative navigation from client does not work with dynamic nodes ([@pekura](https://github.com/pekura))
* [#349](https://github.com/SAP/luigi/pull/349) Fix preserve views node params ([@dariadomagala](https://github.com/dariadomagala))
* [#361](https://github.com/SAP/luigi/pull/361) Empty navigation category should not be shown ([@pekura](https://github.com/pekura))
* [#352](https://github.com/SAP/luigi/pull/352) Fix babel polyfill error ([@parostatkiem](https://github.com/parostatkiem))
* [#342](https://github.com/SAP/luigi/pull/342) Ignore path params in context switcher label ([@parostatkiem](https://github.com/parostatkiem))

#### :memo: Documentation
* [#365](https://github.com/SAP/luigi/pull/365) Split documentation for navigation config ([@bszwarc](https://github.com/bszwarc))
* [#343](https://github.com/SAP/luigi/pull/343) Add docs and examples for anonymous content ([@dariadomagala](https://github.com/dariadomagala))
* [#313](https://github.com/SAP/luigi/pull/313) Luigi config meets es6 ([@parostatkiem](https://github.com/parostatkiem))
* [#325](https://github.com/SAP/luigi/pull/325) Webpack for LuigiClient ([@parostatkiem](https://github.com/parostatkiem))
* [#310](https://github.com/SAP/luigi/pull/310) Improve 404 handling ([@parostatkiem](https://github.com/parostatkiem))
* [#315](https://github.com/SAP/luigi/pull/315) Add isolate all views setting ([@dariadomagala](https://github.com/dariadomagala))
* [#344](https://github.com/SAP/luigi/pull/344) Fix formatting issues and add missing info ([@bszwarc](https://github.com/bszwarc))

## [v0.4.4] (2019-01-10)

#### :rocket: Added
* [#319](https://github.com/SAP/luigi/pull/319) Implement anonymous content feature ([@hardl](https://github.com/hardl))
* [#306](https://github.com/SAP/luigi/pull/306) Icons in navigation nodes ([@parostatkiem](https://github.com/parostatkiem))

#### :bug: Fixed
* [#331](https://github.com/SAP/luigi/pull/331) Fix defaultChildNode mechanism for root path ([@jesusreal](https://github.com/jesusreal))
* [#317](https://github.com/SAP/luigi/pull/317) Improve defaultChildNode ([@parostatkiem](https://github.com/parostatkiem))

#### :memo: Documentation
* [#306](https://github.com/SAP/luigi/pull/306) Icons in navigation nodes ([@parostatkiem](https://github.com/parostatkiem))

## [v0.4.3] - 2019-01-07

#### :bug: Fixed
* [#318](https://github.com/SAP/luigi/pull/318) Increase timeout and improve error handling for loading oidc client library ([@kwiatekus](https://github.com/kwiatekus))
* [#312](https://github.com/SAP/luigi/pull/312) Fix node params for path routing ([@dariadomagala](https://github.com/dariadomagala))

## [v0.4.1] - 2018-12-27

#### :rocket: Added
* [#252](https://github.com/SAP/luigi/pull/252) Unsaved changes modal ([@parostatkiem](https://github.com/parostatkiem))
* [#288](https://github.com/SAP/luigi/pull/288) Add possibility to use pathRouting with angular-cli ([@maxmarkus](https://github.com/maxmarkus))

#### :bug: Fixed
* [#307](https://github.com/SAP/luigi/pull/307) Fix error with parsed data ([@dariadomagala](https://github.com/dariadomagala))
* [#301](https://github.com/SAP/luigi/pull/301) Fix dropdowns behavior on click events ([@dariadomagala](https://github.com/dariadomagala))
* [#305](https://github.com/SAP/luigi/pull/305) When adding a listener via Luigi client API, call only the listener being added ([@jesusreal](https://github.com/jesusreal))
* [#299](https://github.com/SAP/luigi/pull/299) It is not possible to have a root node with empty path segment and a view ([@pekura](https://github.com/pekura))
* [#283](https://github.com/SAP/luigi/pull/283) Default child node mechanism breaks if path ends with a slash ([@pekura](https://github.com/pekura))

#### :memo: Documentation
* [#277](https://github.com/SAP/luigi/pull/277) Improve Luigi readme files ([@bszwarc](https://github.com/bszwarc))
* [#282](https://github.com/SAP/luigi/pull/282) Add short README.md file about Luigi Core ([@bszwarc](https://github.com/bszwarc))

## [v0.4.0] - 2018-12-06

#### :rocket: Added
* [#259](https://github.com/SAP/luigi/pull/259) Nav collapsed feature ([@parostatkiem](https://github.com/parostatkiem))
* [#247](https://github.com/SAP/luigi/pull/247) Luigi view components design upgrade ([@antiheld](https://github.com/antiheld))

#### :bug: Fixed
* [#226](https://github.com/SAP/luigi/pull/226) Add check if modules are same domain ([@dariadomagala](https://github.com/dariadomagala))
* [#266](https://github.com/SAP/luigi/pull/266) Fixes for browser incompatibilities ([@pekura](https://github.com/pekura))
* [#253](https://github.com/SAP/luigi/pull/253) Allow async defaultChildNode ([@maxmarkus](https://github.com/maxmarkus))
* [#261](https://github.com/SAP/luigi/pull/261) Fix the relative path bug ([@dariadomagala](https://github.com/dariadomagala))
* [#250](https://github.com/SAP/luigi/pull/250) preserveView should allow viewUrls with query params ([@maxmarkus](https://github.com/maxmarkus))
* [#246](https://github.com/SAP/luigi/pull/246) Luigi client creates extra entry in browser navigation history ([@pekura](https://github.com/pekura))
* [#238](https://github.com/SAP/luigi/pull/238) viewUrl should not be mandatory in dynamic node ([@maxmarkus](https://github.com/maxmarkus))

#### :memo: Documentation
* [#262](https://github.com/SAP/luigi/pull/262) Add improvements to Luigi Client API comments and annotations ([@bszwarc](https://github.com/bszwarc))
* [#251](https://github.com/SAP/luigi/pull/251) Improvements for dex auth ([@maxmarkus](https://github.com/maxmarkus))
* [#241](https://github.com/SAP/luigi/pull/241) Include v0.3.8 in changelog ([@kwiatekus](https://github.com/kwiatekus))
* [#240](https://github.com/SAP/luigi/pull/240) Improve luigi client docu and generate new ([@jesusreal](https://github.com/jesusreal))


## [v0.3.8] - 2018-11-23

#### :rocket: Added
* [#190](https://github.com/SAP/luigi/pull/190) Context Switcher in top navigation ([@maxmarkus](https://github.com/maxmarkus))
* [#209](https://github.com/SAP/luigi/pull/209) Support navigation nodes that just link to other nodes ([@jesusreal](https://github.com/jesusreal))
* [#162](https://github.com/SAP/luigi/pull/162) 404 support for non existing paths ([@parostatkiem](https://github.com/parostatkiem))
* [#187](https://github.com/SAP/luigi/pull/187) Luigi core config refactorings ([@jesusreal](https://github.com/jesusreal))
* [#200](https://github.com/SAP/luigi/pull/200) Align luigi header title with fundamental style ([@parostatkiem](https://github.com/parostatkiem))
* [#180](https://github.com/SAP/luigi/pull/180) Token refresh ([@y-kkamil](https://github.com/y-kkamil))
* [#160](https://github.com/SAP/luigi/pull/160) Configurable logo and title ([@maxmarkus](https://github.com/maxmarkus))

#### :bug: Fixed
* [#235](https://github.com/SAP/luigi/pull/235) Issues with path routing ([@jesusreal](https://github.com/jesusreal))
* [#234](https://github.com/SAP/luigi/pull/234) Add logout.html to webpack config ([@kwiatekus](https://github.com/kwiatekus))
* [#232](https://github.com/SAP/luigi/pull/232) Fix no context switcher error ([@pekura](https://github.com/pekura))
* [#224](https://github.com/SAP/luigi/pull/224) Bugfix/preserve view content area ([@maxmarkus](https://github.com/maxmarkus))
* [#222](https://github.com/SAP/luigi/pull/222) Login fix ([@hardl](https://github.com/hardl))
* [#202](https://github.com/SAP/luigi/pull/202) Fix go-back-button bug ([@parostatkiem](https://github.com/parostatkiem))
* [#215](https://github.com/SAP/luigi/pull/215) mock auth logout page fix ([@y-kkamil](https://github.com/y-kkamil))
* [#211](https://github.com/SAP/luigi/pull/211) Multiple path parameters do not get replaced in view url ([@pekura](https://github.com/pekura))
* [#212](https://github.com/SAP/luigi/pull/212) Fix failing unit tests ([@dariadomagala](https://github.com/dariadomagala))
* [#206](https://github.com/SAP/luigi/pull/206) Center the logo ([@dariadomagala](https://github.com/dariadomagala))
* [#196](https://github.com/SAP/luigi/pull/196) Fix for goBack when not using micro-frontend without routing ([@maxmarkus](https://github.com/maxmarkus))
* [#177](https://github.com/SAP/luigi/pull/177) Allow multiple init and update listeners ([@maxmarkus](https://github.com/maxmarkus))

#### :memo: Documentation
* [#197](https://github.com/SAP/luigi/pull/197) Improve luigi-client js docs ([@kwiatekus](https://github.com/kwiatekus))
* [#155](https://github.com/SAP/luigi/pull/155) Describe get path params and get node params better ([@pekura](https://github.com/pekura))
* [#199](https://github.com/SAP/luigi/pull/199) Add missing line and improve wording ([@bszwarc](https://github.com/bszwarc))


## [v0.3.7] - 2018-10-31


#### :rocket: Added
* [#169](https://github.com/SAP/luigi/pull/169) Enable Luigi Client (microfrontend) to check whether a path exists in the main app ([@jesusreal](https://github.com/jesusreal))

#### :bug: Fixed
* [#168](https://github.com/SAP/luigi/pull/168) Fix bug for closest parent navigation on Luigi Client ([@jesusreal](https://github.com/jesusreal))

#### :memo: Documentation
* [#138](https://github.com/SAP/luigi/pull/138) Add details about navigation nodes and reading node parameters ([@bszwarc](https://github.com/bszwarc))
* [#176](https://github.com/SAP/luigi/pull/176) Update and improve the content of the installation guide ([@bszwarc](https://github.com/bszwarc))
* [#161](https://github.com/SAP/luigi/pull/161) Fix small docu bugs ([@jesusreal](https://github.com/jesusreal))

## [v0.3.6] - 2018-10-23

#### :rocket: Added
* [#131](https://github.com/SAP/luigi/pull/131) Make automatic login configurable ([@dariadomagala](https://github.com/dariadomagala))
* [#121](https://github.com/SAP/luigi/pull/121) Navigation node as a link to an external page ([@parostatkiem](https://github.com/parostatkiem))
* [#118](https://github.com/SAP/luigi/pull/118) Keep left-side navigation on a node hierarchy level ([@maxmarkus](https://github.com/maxmarkus))
* [#129](https://github.com/SAP/luigi/pull/129) Add automatic loading indicator to show processing ([@maxmarkus](https://github.com/maxmarkus))
* [#105](https://github.com/SAP/luigi/pull/105) Enable e2e tests ([@dariadomagala](https://github.com/dariadomagala))
* [#142](https://github.com/SAP/luigi/pull/142) View preservation is now allowed also cross-domain ([@maxmarkus](https://github.com/maxmarkus))

#### :bug: Fixed
* [#140](https://github.com/SAP/luigi/pull/140) Fix css issues in core and angular example ([@jesusreal](https://github.com/jesusreal))
* [#116](https://github.com/SAP/luigi/pull/116) Change per-component backdrop to global one ([@parostatkiem](https://github.com/parostatkiem))
* [#120](https://github.com/SAP/luigi/pull/120) Fix fonts bundling in luigi core ([@parostatkiem](https://github.com/parostatkiem))
* [#115](https://github.com/SAP/luigi/pull/115) Re-login not redirecting to luigi app ([@jesusreal](https://github.com/jesusreal))

#### :memo: Documentation
* [#148](https://github.com/SAP/luigi/pull/148) Copy template for security issues ([@franpog859](https://github.com/franpog859))
* [#135](https://github.com/SAP/luigi/pull/135) Improve getting started  documentation ([@maxmarkus](https://github.com/maxmarkus))
* [#137](https://github.com/SAP/luigi/pull/137) Add autogenerated luigi client api docs ([@jesusreal](https://github.com/jesusreal))


## [v0.3.5] - 2018-09-26

#### :rocket: Added
* [#104](https://github.com/SAP/luigi/pull/104) Dynamic pathSegments in navigation nodes ([@maxmarkus](https://github.com/maxmarkus))

#### :bug: Fixed
* [#84](https://github.com/SAP/luigi/pull/84) Remove unnecessary files from public folder ([@dariadomagala](https://github.com/dariadomagala))
* [#103](https://github.com/SAP/luigi/pull/103) Fix behavior of the logout dropdown ([@dariadomagala](https://github.com/dariadomagala))
* [#102](https://github.com/SAP/luigi/pull/102) Fix 'preserve view' feature for sibiling nodes ([@maxmarkus](https://github.com/maxmarkus))
* [#89](https://github.com/SAP/luigi/pull/89) Fix unnecessary 'authSuccessfull' handler execution on each page refresh ([@dariadomagala](https://github.com/dariadomagala))
* [#79](https://github.com/SAP/luigi/pull/79) Fix fundamental-ui issues in applications setup docu ([@jesusreal](https://github.com/jesusreal))

#### :memo: Documentation
* [#107](https://github.com/SAP/luigi/pull/107) Commands path info in angular example readme ([@parostatkiem](https://github.com/parostatkiem))


## [core-0.3.3] - 2018-09-14

#### :rocket: Added
* [#67](https://github.com/SAP/luigi/pull/67) Navigation node visibility with custom nodeAccessibilityResolver ([@maxmarkus](https://github.com/maxmarkus))

#### :bug: Fixed
* [#82](https://github.com/SAP/luigi/pull/82) Fixed changedetector bug ([@dariadomagala](https://github.com/dariadomagala))
* [#71](https://github.com/SAP/luigi/pull/71) Fixed top navigation popover behavior ([@maxmarkus](https://github.com/maxmarkus))
* [#76](https://github.com/SAP/luigi/pull/76) Fixed broken routing after successful OIDC authentication ([@maxmarkus](https://github.com/maxmarkus))
* [#57](https://github.com/SAP/luigi/pull/57) Fixed preserve view and back example ([@dariadomagala](https://github.com/dariadomagala))
* [#75](https://github.com/SAP/luigi/pull/75) Fixed import of LuigiClient on angular app ([@jesusreal](https://github.com/jesusreal))

#### :memo: Documentation
* [#80](https://github.com/SAP/luigi/pull/80) Luigi documentation refinements ([@dpolitesap](https://github.com/dpolitesap))
* [#34](https://github.com/SAP/luigi/pull/34) Introduce changelog file ([@jesusreal](https://github.com/jesusreal))


## [client-0.3.2] - 2018-09-10

#### :rocket: Added
* [#33](https://github.com/SAP/luigi/pull/33) Ensure es5 compliance for luigi client ([@y-kkamil](https://github.com/y-kkamil))


## [core-0.3.1] - 2018-09-07

#### :bug: Fixed
* [#31](https://github.com/SAP/luigi/pull/31) Redirect from root node to first child ([@y-kkamil](https://github.com/y-kkamil))
* [#50](https://github.com/SAP/luigi/pull/50) #49 [fix] OAuth2 implicit grant flow should use GET as default reques… ([@aartek](https://github.com/aartek))


## [core-0.3.0] - 2018-09-05

#### :rocket: Added
- Preserve view and go back feature.
- Default child nodes feature.
- Support for url parameters.
- Add vue.js example app by [@DamianLion](https://github.com/DamianLion)
- On angular example app, update angular version from version 5 to 6.
- On angular example app, introduce fundamental-ui css framework.
- Backdrop functionality can now be disabled via Luigi Config object.
- Add error message for missing Luigi Config.
- Improvements on authorization, remove login button, trigger auth flow on page load.
- Add documentation.

#### Changed
- 'hideNav' flag to disable top and left navigations is called now "hideNavigation" and is under "settings".
- 'isHashRoute' flag to activate hash routing is moved to Luigi Config object under 'settings' and is called now 'useHashRouting'.
- Luigi Config is now under "window.Luigi.config" instead of "window.LuigiConfig" and "setConfig" and "getConfig" helper methods are available.

#### :bug: Fixed
- On angular example app, fix path routing issues by simplifying app chunks split.
- On backdrop functionality, fix some small visual errors.

## [client-0.3.0] - 2018-09-05

#### :rocket: Added
- Support for url parameters.
- Add documentation.

#### :bug: Fixed
- Prevent reloading of whole browser window when navigating with hash routing and only hash changes.

## 0.2.1 - 2018-07-24
#### :rocket: Added
- Core: Angular example application.
- Core: Hash-based and path-based routing.
- Core: Navigation setup.
- Core: Support authorization via Open ID Connect (OIDC) or OAuth2 Implicit Grant.
- Core: Navigation on top and left (can be disabled via Luigi Config object).
- Core: Backdrop functionality.
- Core: Authorization.
- Client: Lifecycle functions.
- Client: Link manager for navigation.
- Client: UX manager for backdrop.


[core-0.3.0]: https://github.com/SAP/luigi/compare/v0.2.1...core-0.3.0
[core-0.3.1]: https://github.com/SAP/luigi/compare/core-0.3.0...core-0.3.1
[core-0.3.3]: https://github.com/SAP/luigi/compare/core-0.3.2...core-0.3.3
[client-0.3.2]: https://github.com/SAP/luigi/compare/client-0.3.1...client-0.3.2
[client-0.3.0]: https://github.com/SAP/luigi/compare/v0.2.1...client-0.3.0
[v0.3.5]: https://github.com/SAP/luigi/compare/core-0.3.3...v0.3.5
[v0.3.6]: https://github.com/SAP/luigi/compare/v0.3.5...v0.3.6
[v0.3.7]: https://github.com/SAP/luigi/compare/v0.3.6...v0.3.7
[v0.3.8]: https://github.com/SAP/luigi/compare/v0.3.7...v0.3.8
[v0.4.0]: https://github.com/SAP/luigi/compare/v0.3.8...v0.4.0
[v0.4.1]: https://github.com/SAP/luigi/compare/v0.4.0...v0.4.1
[v0.4.3]: https://github.com/SAP/luigi/compare/v0.4.2...v0.4.3
[v0.4.4]: https://github.com/SAP/luigi/compare/v0.4.3...v0.4.4
[v0.4.5]: https://github.com/SAP/luigi/compare/v0.4.4...v0.4.5
[v0.4.9]: https://github.com/SAP/luigi/compare/v0.4.8...v0.4.9
[v0.4.10]: https://github.com/SAP/luigi/compare/v0.4.9...v0.4.10
[v0.4.11]: https://github.com/SAP/luigi/compare/v0.4.10...v0.4.11
