# WXT Starter

Build upon amazing [wxt](wxt.dev) framework.

## Requirements

- [bun](https://bun.sh/)

## Addons

- [tailwindcss](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [@wxt-dev/i18n](https://wxt.dev/guide/i18n/introduction)

dev:

- [eslint-config](https://github.com/antfu/eslint-config): See [eslint](#eslint)
- [bumpp](https://github.com/antfu-collective/bumpp): use `bun bump`

## Setup

- [ ] update `name` in `package.json`, it will be zip file name
- [ ] update `title` and `description` in `src/locales`, these will appear in the Chrome Web Store
- [ ] update `default_locale` in `wxt.config.js` if not `en`
- [ ] replace `icon.png` in `src/assets`
- [ ] run `bun bump minor`
- [ ] [mvp](https://en.wikipedia.org/wiki/Minimum_viable_product)
- [ ] run `bun bump major`
- [ ] publish

optional:

- [ ] update `README.md`
- [ ] add extension url to `README.md`
- [ ] setup [cli submit](#cli-submit)

## Predefined Entrypoints

**Find more at [wxt.dev/examples](https://wxt.dev/examples.html)**

Move the predefined entry points from the `entrypoints.inactive` folder to directly in the `entrypoints` folder to enable them.

Popup is enabled by default.

*: For `sidepanel`, wxt does not automatically add the `sidePanel` permission. You must manually add it to the `manifest` field in `wxt.config.js`. Related: [wxt#544](https://github.com/wxt-dev/wxt/issues/544)

*: For `onboarding`, to retrieve the URL of the onboarding page, use `browser.runtime.getURL('/onboarding.html')`.

## eslint

If you are using vscode, autofix should already be enabled. You can run `bun lint` to check for errors and `bun lint:fix` to fix most of them.

> Thanks for antfu's elegant design philosophy in eslint configuration.

## shadcn/ui

To use it, refer to the [documentation](https://ui.shadcn.com/docs/cli#add)

> tldr: To add components using `npx shadcn@latest add`, select them by pressing `space` and submit with `enter`. If adding a code file, simply type the component name for autocompletion in vscode.

## Advanced Configuration

### cli submit

0. You need to manually upload the extension to the Chrome Web Store the first time. After that, you can get the `CHROME_EXTENSION_ID`.

1. Rename the file `.env.submit.example` to `.env.submit` and fill in the `CHROME_EXTENSION_ID`.

2. Add the following settings to your shell config file. Keep them safe. See https://github.com/fregante/chrome-webstore-upload-keys for how to get the keys.

   ```shell
   export CHROME_CLIENT_ID="<your client id>"
   export CHROME_REFRESH_TOKEN="<your refresh token>"
   export CHROME_CLIENT_SECRET="<your client secret>"
   ```

3. Now you can run `bun submit:latest` for faster submission.

 > `bun submit:latest` is an alias for `bun exec 'rm -rf .output'; wxt zip && wxt submit --chrome-zip .output/*.zip`
