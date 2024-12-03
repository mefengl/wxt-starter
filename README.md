# WXT Starter

Build upon amazing [wxt](wxt.dev) framework.

## Requirements

- [bun](https://bun.sh/)

## Addons

- [eslint-config](https://github.com/antfu/eslint-config): See [eslint](#eslint)
- [tailwindcss](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [@wxt-dev/i18n](https://wxt.dev/guide/i18n/introduction)

dev:

- [bumpp](https://github.com/antfu-collective/bumpp): See [Version Bumping](#version-bumping)

optional:

- [trpc-chrome](https://github.com/jlalmes/trpc-chrome): See [trpc](#trpc)

## Predefined Entrypoints

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

## trpc

1. Replace the `background` and `popup` entrypoints with the ones in the `entrypoints.inactive/trpc` folder.
2. Install the needed packages:

```shell
# trpc with react-query, see https://trpc.io/docs/v10/client/react/setup
bun i @trpc/client @trpc/server @trpc/react-query @tanstack/react-query@4
# trpc-chrome
bun i trpc-chrome
# zod
bun i zod
# mitt, event emitter, for trpc subscription
bun i mitt
```

## Advanced Configuration

### Version Bumping

Run `bun bump` to bump version in cli.

### One-step submit

0. You need to manually upload the extension to the Chrome Web Store the first time. After that, you can get the `CHROME_EXTENSION_ID`.

1. Rename the file `.env.submit.example` to `.env.submit` and fill in the `CHROME_EXTENSION_ID`.

2. Add the following settings to your shell config file. Keep them safe. See https://github.com/fregante/chrome-webstore-upload-keys for how to get the keys.

   ```shell
   export CHROME_CLIENT_ID="<your client id>"
   export CHROME_REFRESH_TOKEN="<your refresh token>"
   export CHROME_CLIENT_SECRET="<your client secret>"
   ```

3. Now you can run `bun submit:latest` for faster submission.

 > `bun submit:latest` is an alias for `rimraf .output; wxt zip && wxt submit --chrome-zip .output/*.zip`
 >
 > `rimraf` is a cross-platform `rm -rf` command
