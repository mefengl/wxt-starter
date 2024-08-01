import antfu from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'
import perfectionistNatural from 'eslint-plugin-perfectionist/configs/recommended-natural'

const compat = new FlatCompat()

export default antfu(
  {
    perfectionistNatural,
    rules: {
      'import/order': 'off',
    },
  },

  {
    rules: {
      'tailwindcss/migration-from-tailwind-2': 'off',
      'tailwindcss/no-custom-classname': 'off',
    },
  },
  ...compat.config({
    extends: [
      'plugin:tailwindcss/recommended',
      'plugin:react-hooks/recommended',
    ],
    ignorePatterns: [
      'tsconfig.*',
    ],
  }),

  // shadcn/ui
  ...compat.config({
    ignorePatterns: [
      'src/components/ui/*',
      'src/lib/utils.ts',
      'tailwind.config.js',
    ],
  }),
)
