import antfu from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()

export default antfu({}, ...compat.config({
  extends: [
    'plugin:tailwindcss/recommended',
    'plugin:react-hooks/recommended',
  ],
  rules: {
    'tailwindcss/no-custom-classname': 'off',
    'tailwindcss/migration-from-tailwind-2': 'off',
  },
  ignorePatterns: [
    'src/components/ui/*',
    'src/lib/utils.ts',
  ],
}))
