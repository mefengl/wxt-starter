import antfu from '@antfu/eslint-config'
import perfectionist from 'eslint-plugin-perfectionist'

export default antfu(
  { ignores: ['tsconfig.*'], react: true },
  { ignores: ['src/components/ui/**', 'src/lib/utils.ts', 'tailwind.config.js'], name: 'shadcn' },
  { files: ['**/*.tsx', '**/*.jsx'], name: 'react', rules: { 'react-refresh/only-export-components': 'off' } },
  { name: 'perfectionist', rules: { 'import/order': 'off', ...perfectionist.configs['recommended-natural'].rules } },
)
