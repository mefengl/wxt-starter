# WXT Starter

Build upon amazing [wxt](wxt.dev) framework.

## Addons

- eslint: [eslint-config](https://github.com/antfu/eslint-config)
- tailwindcss
- shadcn/ui: [shadcn/ui](https://ui.shadcn.com)

## Predefined Entrypoints

Move the predefined entry points from the `inactive` folder to directly under the `entrypoints` folder to enable them.

Popup is enabled by default.

*: For `sidepanel`, wxt does not automatically add the `sidePanel` permission. You must manually add it to the `manifest` field in `wxt.config.js`. Related: [wxt#544](https://github.com/wxt-dev/wxt/issues/544)

*: For `onboarding`, to retrieve the URL of the onboarding page, use `browser.runtime.getURL('/onboarding.html')`.

## eslint

If you are using vscode, autofix should already be enabled. You can run `npm run lint` to check for errors and `npm run lint:fix` to fix most of them.

> Thanks for antfu's elegant design philosophy in eslint configuration.

## shadcn/ui

To use it, refer to the [documentation](https://ui.shadcn.com/docs/cli#add)

> tldr: To add components using `npx shadcn/ui add`, select them by pressing `space` and submit with `enter`. If adding a code file, simply type the component name for autocompletion in vscode.
