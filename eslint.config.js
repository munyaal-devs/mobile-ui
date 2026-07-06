const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');
const globals = require('globals');

module.exports = defineConfig([
  expoConfig,
  eslintPluginPrettierRecommended,
  {
    ignores: ['dist/*'],
  },
  // Archivos de configuración corren en contexto CommonJS de Node donde existen
  // `__dirname`, `require`, `module`, `process`, etc. El flat config de
  // `eslint-config-expo` otorga globals de Node sólo a `metro.config.js`; lo
  // extendemos a `babel.config.{js,cjs,mjs}` para evitar `no-undef` falsos.
  {
    files: ['**/{babel,metro,webpack}.config.{js,cjs,mjs}'],
    languageOptions: {
      globals: globals.node,
    },
  },
  {
    files: ['src/**/*.tsx'],
    rules: {
      // `react-hooks/refs` marca como error el idiom de React Native
      // `useRef(new Animated.Value(...)).current` leído en render. Es un
      // patrón documentado y necesario para el driver nativo de Animated;
      // se trata de un falso positivo conocido de la regla.
      'react-hooks/refs': 'off',
      // El factory de componentes envuelve componentes anónimos con
      // `memo`/`forwardRef`; el nombre efectivo proviene del consumidor.
      'react/display-name': 'off',
    },
  },
]);
