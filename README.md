# WXT Starter

Build upon amazing [wxt](wxt.dev) framework.

## Requirements

- [pnpm](https://pnpm.io)

## Addons

- [eslint-config](https://github.com/antfu/eslint-config): See [eslint](#eslint)
- [tailwindcss](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [@wxt-dev/i18n](https://wxt.dev/guide/i18n/introduction)

optional:

- [trpc-chrome](https://github.com/jlalmes/trpc-chrome): See [trpc](#trpc)

## Predefined Entrypoints

Move the predefined entry points from the `inactive` folder to directly in the `entrypoints` folder to enable them.

Popup is enabled by default.

*: For `sidepanel`, wxt does not automatically add the `sidePanel` permission. You must manually add it to the `manifest` field in `wxt.config.js`. Related: [wxt#544](https://github.com/wxt-dev/wxt/issues/544)

*: For `onboarding`, to retrieve the URL of the onboarding page, use `browser.runtime.getURL('/onboarding.html')`.

## eslint

If you are using vscode, autofix should already be enabled. You can run `pnpm lint` to check for errors and `pnpm lint:fix` to fix most of them.

> Thanks for antfu's elegant design philosophy in eslint configuration.

## shadcn/ui

To use it, refer to the [documentation](https://ui.shadcn.com/docs/cli#add)

> tldr: To add components using `npx shadcn@latest add`, select them by pressing `space` and submit with `enter`. If adding a code file, simply type the component name for autocompletion in vscode.

## trpc

1. Replace the `background` and `popup` entrypoints with the ones in the `inactive/trpc` folder.
2. Install the needed packages:

```shell
# trpc with react-query, see https://trpc.io/docs/v10/client/react/setup
pnpm i @trpc/client @trpc/server @trpc/react-query @tanstack/react-query@4
# trpc-chrome
pnpm i trpc-chrome
# zod
pnpm i zod
# superjson, it lets you pass complex data like Date and Map through the message channel
pnpm i superjson
```
