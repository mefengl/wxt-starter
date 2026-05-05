/** @type {import('taze').TazeConfig} */
export default {
  exclude: [
    // blocked: @antfu/eslint-config@8.2.0 只声明支持 @eslint-react/eslint-plugin ^3.0.0，
    // 其 React 集成按 3.x 的 plugin config shape 写死。5.x 不兼容。
    '@eslint-react/eslint-plugin',
  ],
}
