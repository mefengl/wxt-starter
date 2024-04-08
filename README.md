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
