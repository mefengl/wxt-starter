import antfu from '@antfu/eslint-config'

export default antfu(
  { ignores: ['tsconfig.*'], react: true },
  { ignores: ['src/components/ui/**', 'src/lib/utils.ts', 'tailwind.config.js'], name: 'shadcn' },
  { files: ['**/*.tsx', '**/*.jsx'], name: 'react', rules: { 'react-refresh/only-export-components': 'off' } },
)
