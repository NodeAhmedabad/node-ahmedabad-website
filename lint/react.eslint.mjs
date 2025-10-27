import { configs, plugins, rules } from 'eslint-config-airbnb-extended';

const customReactESLintConfig = [
  // React Plugin
  plugins.react,
  // React Hooks Plugin
  plugins.reactHooks,
  // React JSX A11y Plugin
  plugins.reactA11y,
  // Next Plugin
  plugins.next,
  // Airbnb Next Recommended Config
  ...configs.next.recommended,
  // Airbnb React Strict Rules
  rules.react.strict,
  // JSX A11y Config Rules
  {
    name: 'x/jsx-a11y/rules',
    rules: {
      'jsx-a11y/label-has-associated-control': 'off',
    },
  },
];

export default customReactESLintConfig;
