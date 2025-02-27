# trpc

- [trpc-chrome](https://github.com/jlalmes/trpc-chrome): See [trpc](#trpc)

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
