# @munyaal/mobile-ui

Librería de interfaz de usuario para React Native con un sistema de diseño tematizable basado en tokens, aliases de estilo y configuraciones por componente. Está construida con TypeScript estricto y publicada como un monorepo con un proyecto de ejemplo en Expo.

## Características principales

- **Componentes factory** con configuración declarativa por componente: estilos base, variantes y estado.
- **Sistema de tokens** centralizado (`$primary500`, `'$4'`, `'$md'`, `'$full'`, …) que se resuelven en tiempo de render contra el tema activo.
- **Aliases de estilo** estilo utility-first (`bg`, `p`, `m`, `rounded`, `gap`, …) que se traducen a propiedades nativas de React Native.
- **Soporte de light/dark** mediante `ThemeProvider` y un objeto `colors` por modo.
- **Formularios accesibles** vía `FormControl` con propagación de estado (`isInvalid`, `isDisabled`, `isRequired`, `isReadOnly`, `isFocused`) a sus hijos.
- **Toasts** listos para usar a través del hook `useToast`, con cuatro estilos predefinidos (`success`, `error`, `warning`, `info`).
- **Iconografía SVG** con `react-native-svg` y presets de tamaño y color por token.
- **TypeScript estricto** con tipos públicos para todas las configuraciones (`ComponentConfiguration`, `ThemeConfig`, `Colors`, etc.).

## Instalación

Esta librería requiere React y React Native como peer dependencies. También necesita `react-native-svg` para renderizar los iconos.

```sh
# npm
npm install @munyaal/mobile-ui react-native-svg

# yarn
yarn add @munyaal/mobile-ui react-native-svg

# pnpm
pnpm add @munyaal/mobile-ui react-native-svg
```

**Peer dependencies:**

- `react`
- `react-native`
- `react-native-svg`

> Si tu proyecto usa Expo, `react-native-svg` puede instalarse con `npx expo install react-native-svg` para asegurar la versión compatible con tu SDK.

## Configuración básica

`@munyaal/mobile-ui` necesita un `ThemeProvider` en la raíz de la aplicación. El provider recibe dos props obligatorias:

- `theme`: el modo activo (`'light' | 'dark'`).
- `config`: un `ThemeConfig` con todos los tokens, colores y configuraciones por componente.

```tsx
import * as React from 'react';
import { useColorScheme } from 'react-native';
import { ThemeProvider, useThemeProvider } from '@munyaal/mobile-ui';
import { themeConfig } from './theme';

export default function App() {
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? 'dark' : 'light';

  return (
    <ThemeProvider config={themeConfig} theme={theme}>
      <Root />
    </ThemeProvider>
  );
}

function Root() {
  const { colors, theme } = useThemeProvider();
  return null;
}
```

`ThemeConfig` combina los tokens por defecto exportados por la librería con un objeto `colors` que define una paleta para `'light'` y otra para `'dark'`, y un objeto `components` con la configuración de cada componente. Una versión completa y lista para usar vive en [`example/src/theme`](./example/src/theme).

### Estructura resumida de `ThemeConfig`

```ts
import {
  borderRadius,
  borderWidths,
  fontFamilies,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  opacity,
  sizes,
  spaces,
  type ThemeConfig,
} from '@munyaal/mobile-ui';
import { colors } from './colors';
import { components } from './components';

export const themeConfig: ThemeConfig = {
  fontSizes,
  fontWeights,
  fontFamilies,
  letterSpacings,
  borderWidths,
  borderRadius,
  lineHeights,
  opacity,
  spaces,
  sizes,
  colors,     // { light: Colors, dark: Colors }
  components, // ComponentConfigurations
};
```

## Uso rápido

Los componentes aceptan props con tokens (`'$token'`) o valores directos, además de los aliases y props nativas de React Native.

```tsx
import { Button, ButtonIcon, ButtonText, Text, View } from '@munyaal/mobile-ui';
import { mdiContentSave } from '@mdi/js';

export function Example() {
  return (
    <View flex={1} p={'$4'} bg={'$background50'}>
      <Text size={'lg'} weight={'semibold'} color={'$text900'}>
        Hola mundo
      </Text>

      <Button size={'md'} variant={'solid'} mt={'$4'}>
        <ButtonIcon path={mdiContentSave} />
        <ButtonText>Guardar</ButtonText>
      </Button>
    </View>
  );
}
```

## Theming y tokens

Todos los tokens exportados por la librería están disponibles en `src/config/tokens.ts` y se reexportan desde el punto de entrada principal. Puedes consultarlos para extender el tema o crear presets.

| Token         | Ejemplo de claves                                    |
|---------------|------------------------------------------------------|
| `colors`      | `'$primary500'`, `'$text800'`, `'$error700'`         |
| `spaces`      | `'$0'`, `'$1'`, `'$2'`, `'$4'`, `'$8'`, `'$16'`      |
| `sizes`       | `'$0'`, `'$1'`, `'$4'`, `'$full'`, `'$1/2'`, `'$1/3'`|
| `borderWidths`| `'$0'`, `'$1'`, `'$2'`, `'$4'`, `'$8'`               |
| `borderRadius`| `'$none'`, `'$xs'`, `'$sm'`, `'$md'`, `'$lg'`, `'$xl'`|
| `fontSizes`   | `'$xs'`, `'$sm'`, `'$md'`, `'$lg'`, `'$2xl'`, …     |
| `fontWeights` | `'$light'`, `'$normal'`, `'$medium'`, `'$bold'`      |
| `lineHeights` | `'$xs'`, `'$sm'`, `'$md'`, `'$lg'`, `'$xl'`, …      |
| `opacity`     | `'$0'`, `'$25'`, `'$50'`, `'$75'`, `'$100'`          |
| `fontFamilies`| `'$sans'`, `'$serif'`, `'$mono'`                     |

### Sintaxis `$token`

Cuando una prop acepta un valor con token, basta con anteponer `$` al nombre de la clave. La librería resuelve el valor contra el `ThemeProvider` activo.

```tsx
<View bg={'$primary500'} p={'$4'} rounded={'$md'}>
  <Text color={'$text50'} size={'lg'}>A</Text>
</View>
```

Si el valor no comienza con `$`, se interpreta como un valor literal de React Native (por ejemplo `bg={'#ff0000'}` o `p={16}`).

## Aliases de estilo

Los aliases son props abreviadas que la librería traduce a propiedades nativas de `ViewStyle`/`TextStyle` y resuelve contra el tema. Internamente se definen en `aliasStyle.map.ts` y se complementan con `property.style.map.ts` para mapear las propiedades nativas completas a sus respectivos grupos de tokens.

| Alias    | Resuelve a            | Acepta                |
|----------|-----------------------|-----------------------|
| `bg`     | `backgroundColor`     | color o `'$color'`    |
| `h`      | `height`              | número o `'$size'`    |
| `w`      | `width`               | número o `'$size'`    |
| `p`      | `padding`             | número o `'$space'`   |
| `px`     | `paddingHorizontal`   | número o `'$space'`   |
| `py`     | `paddingVertical`     | número o `'$space'`   |
| `pt`     | `paddingTop`          | número o `'$space'`   |
| `pb`     | `paddingBottom`       | número o `'$space'`   |
| `pr`     | `paddingRight`        | número o `'$space'`   |
| `pl`     | `paddingLeft`         | número o `'$space'`   |
| `m`      | `margin`              | número o `'$space'`   |
| `mx`     | `marginHorizontal`    | número o `'$space'`   |
| `my`     | `marginVertical`      | número o `'$space'`   |
| `mt`     | `marginTop`           | número o `'$space'`   |
| `mb`     | `marginBottom`        | número o `'$space'`   |
| `mr`     | `marginRight`         | número o `'$space'`   |
| `ml`     | `marginLeft`          | número o `'$space'`   |
| `rounded`| `borderRadius`        | número o `'$radius'`  |

Además de los aliases, las propiedades nativas como `margin`, `padding`, `width`, `height`, `borderRadius`, `fontSize`, `color`, `gap`, `rowGap`, `columnGap`, `borderColor`, `borderWidth`, `lineHeight`, `letterSpacing`, `opacity` y `shadowOpacity` también aceptan tokens directamente.

## Componentes disponibles

Todos los componentes viven en `src/components/` y se reexportan desde el entrypoint principal.

### Primitivos

- `View` — contenedor base con soporte para `shadow` (variante `xs | sm | md | lg | xl`).
- `Text` — texto con variantes `size` y `weight`.
- `Heading` — encabezado con variantes `size` y `weight`.
- `Image` — wrapper sobre `Image` de React Native.
- `Icon` — icono SVG (`react-native-svg`) con `path`, `fill` y variante `size`.
- `Divider` — separador con variante `orientation` (`horizontal | vertical`).
- `Center` — `View` con `justifyContent` y `alignItems` centrados.

### Layout

- `HStack` — fila con variantes `space` y `reversed`.
- `VStack` — columna con variantes `space` y `reversed`.
- `ScrollView` — wrapper sobre `ScrollView` de React Native.
- `KeyboardAvoidingView` — wrapper sobre `KeyboardAvoidingView` de React Native.
- `FlatList` — wrapper sobre `FlatList` de React Native.
- `SectionList` — wrapper sobre `SectionList` de React Native.

### Botones

- `Button` — contenedor con efecto ripple y variantes `size` (`sm | md | lg`) y `variant` (`solid | outline`).
- `ButtonText` — texto del botón con variante `size`.
- `ButtonIcon` — icono del botón con variante `size`.

### Formularios

- `FormControl` — provee el estado de un campo a sus hijos.
- `FormControlLabel` — etiqueta del campo.
- `FormControlHelperText` — texto de ayuda.
- `FormControlErrorText` — texto de error.
- `Input` — contenedor del campo de entrada.
- `InputField` — `TextInput` con `forwardRef` que se conecta al estado de `FormControl`.

### Feedback

- `Toast` — componente animado para notificaciones; suele usarse indirectamente a través de `useToast`.

## Variantes y configuración de componentes

Cada componente tiene una `FactoryConfiguration` que define sus estilos base, variantes y `defaultProps`. La forma genérica es:

```ts
type ComponentConfiguration<Style, Props, Variants, States> = {
  // Estilos base: cualquier propiedad de Style (con tokens)
  borderRadius: '$md',
  // Variantes declaradas
  variants: {
    size: { sm: {...}, md: {...}, lg: {...} },
    variant: { solid: {...}, outline: {...} },
  },
  // Props que se aplican si el consumidor no las pasa
  defaultProps: { size: 'md', variant: 'solid' },
  // Estilos sensibles al estado (ej. desde FormControl)
  ':isInvalid': { borderColor: '$error500' },
};
```

Ejemplo conceptual, basado en la configuración de `Button` incluida en el ejemplo:

```ts
import type { ButtonFactoryConfiguration } from '@munyaal/mobile-ui';

export const button: ButtonFactoryConfiguration = {
  borderRadius: '$sm',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$2',
  variants: {
    size: {
      sm: { paddingVertical: '$2', paddingHorizontal: '$2.5' },
      md: { paddingVertical: '$2.5', paddingHorizontal: '$3' },
      lg: { paddingVertical: '$3', paddingHorizontal: '$3.5' },
    },
    variant: {
      solid:  { backgroundColor: '$primary500', borderColor: '$primary500', borderWidth: '$1' },
      outline:{ borderColor: '$primary500', borderWidth: '$1' },
    },
  },
  defaultProps: { size: 'md', variant: 'solid' },
};
```

Una vez registrado en `themeConfig.components.button`, el componente se usa con sus props de variante directamente:

```tsx
<Button size={'lg'} variant={'outline'}>
  <ButtonText>Cancelar</ButtonText>
</Button>
```

## Formularios

`FormControl` agrupa los elementos de un campo y expone su estado a `InputField`, `FormControlLabel`, `FormControlHelperText` y `FormControlErrorText`.

```tsx
import {
  Button,
  ButtonText,
  FormControl,
  FormControlErrorText,
  FormControlHelperText,
  FormControlLabel,
  Input,
  InputField,
} from '@munyaal/mobile-ui';
import { useRef, useState } from 'react';
import type { TextInput } from 'react-native';

export function EmailField() {
  const [isInvalid, setIsInvalid] = useState(false);
  const ref = useRef<TextInput>(null);

  return (
    <FormControl isInvalid={isInvalid} isRequired>
      <FormControlLabel>Correo electrónico</FormControlLabel>

      <Input>
        <InputField
          ref={ref}
          placeholder={'tu@correo.com'}
          keyboardType={'email-address'}
          autoCapitalize={'none'}
        />
      </Input>

      {isInvalid
        ? <FormControlErrorText>Introduce un correo válido</FormControlErrorText>
        : <FormControlHelperText>Nunca compartiremos tu correo</FormControlHelperText>}

      <Button onPress={() => setIsInvalid(v => !v)}>
        <ButtonText>Alternar estado inválido</ButtonText>
      </Button>
    </FormControl>
  );
}
```

`InputField` se conecta automáticamente al contexto de `FormControl`, gestiona el evento de foco y aplica `readOnly` cuando el campo es `isReadOnly` o `isDisabled`. La configuración del tema puede reaccionar a esos estados con claves tipo `':isInvalid'`, `':isFocused'`, `':isDisabled'`, `':isReadOnly'` o `':isRequired'` dentro de cualquier `ComponentConfiguration`.

## Toasts

El `ThemeProvider` monta internamente un `ToastProvider`, por lo que `useToast` está disponible en cualquier componente hijo sin configuración adicional.

```tsx
import { useToast, toastStyleSuccess } from '@munyaal/mobile-ui';

function SaveButton() {
  const { showToast } = useToast();

  return (
    <Button
      onPress={() =>
        showToast({
          message: 'Tarjeta guardada con éxito',
          time: 2500,                 // opcional, por defecto 2000 ms
          style: toastStyleSuccess,   // opcional
        })
      }
    >
      <ButtonText>Guardar</ButtonText>
    </Button>
  );
}
```

`showToast` acepta:

- `message: string` — texto principal.
- `time?: number` — duración en milisegundos (por defecto `2000`).
- `icon?: string` — path SVG opcional para mostrar un icono a la izquierda.
- `style?: ToastStyle` — estilos del contenedor, mensaje e icono.

Estilos predefinidos exportados por la librería:

- `toastStyleSuccess`
- `toastStyleError`
- `toastStyleWarning`
- `toastStyleInfo`

## Proyecto de ejemplo

El paquete `example/` es una aplicación Expo 57 que importa la librería directamente desde su código fuente gracias al alias de Babel configurado en [`example/babel.config.js`](./example/babel.config.js). Sirve como documentación viva y como banco de pruebas durante el desarrollo.

Dentro del ejemplo puedes consultar:

- [`example/src/theme`](./example/src/theme) — `themeConfig` completo con tokens, colores light/dark y configuración de cada componente.
- [`example/src/App.tsx`](./example/src/App.tsx) — composición de la pantalla principal.
- [`example/src/components`](./example/src/components) — ejemplos de cada componente (`ButtonExample`, `InputExample`, `ToastExample`, etc.).

### Comandos del ejemplo

Desde la raíz del repositorio (usa `yarn workspace`):

```sh
yarn example start    # Inicia el bundler de Metro
yarn example android  # Ejecuta en Android
yarn example ios      # Ejecuta en iOS
yarn example web      # Ejecuta en web
```

También puedes entrar al workspace y usar Expo CLI directamente:

```sh
cd example
yarn start
```

## Desarrollo local

El repositorio es un monorepo gestionado con **Yarn 3.6.1 workspaces** y un único workspace adicional (`example/`). Para preparar el entorno:

```sh
yarn            # instala dependencias de todos los workspaces
```

> Al usar Yarn workspaces, no instales dependencias con `npm` para desarrollo.

Comandos útiles desde la raíz del repositorio:

| Comando              | Descripción                                                     |
|----------------------|-----------------------------------------------------------------|
| `yarn`               | Instala dependencias de todos los workspaces.                   |
| `yarn example start` | Inicia Metro para el ejemplo.                                   |
| `yarn example android` | Ejecuta el ejemplo en Android.                                |
| `yarn example ios`   | Ejecuta el ejemplo en iOS.                                      |
| `yarn example web`   | Ejecuta el ejemplo en web.                                      |
| `yarn test`          | Corre la suite de Jest.                                         |
| `yarn typecheck`     | Verifica tipos con `tsc --noEmit`.                              |
| `yarn lint`          | Ejecuta ESLint sobre `**/*.{js,ts,tsx}`.                        |
| `yarn lint --fix`    | Aplica correcciones automáticas de ESLint/Prettier.             |
| `yarn clean`         | Elimina la carpeta `lib` con artefactos de build.               |
| `yarn prepare`       | Compila la librería con `react-native-builder-bob`.             |
| `yarn release`       | Publica una nueva versión con `release-it` (changelog, tag, npm). |

El repositorio incluye hooks de pre-commit gestionados con [Lefthook](https://github.com/evilmartians/lefthook) que ejecutan ESLint, `tsc --noEmit` y validan el mensaje de commit con [commitlint](https://commitlint.js.org/) usando la convención [Conventional Commits](https://www.conventionalcommits.org/).

### Build y release

La librería se compila con [`react-native-builder-bob`](https://github.com/callstack/react-native-builder-bob) hacia los formatos `commonjs`, `module` y `typescript` (ver `react-native-builder-bob` en `package.json`). Antes de publicar:

1. Asegúrate de que `yarn typecheck`, `yarn lint` y `yarn test` pasen.
2. Ejecuta `yarn clean && yarn prepare` para regenerar `lib/`.
3. Usa `yarn release` para crear el tag, changelog y publicar en npm. El workflow de CI (`.github/workflows/ci.yml`) también puede publicar automáticamente con provenance.

## Contribución

Las contribuciones son bienvenidas. Antes de abrir un PR:

1. Lee el [código de conducta](./CODE_OF_CONDUCT.md).
2. Revisa la [guía de contribución](./CONTRIBUTING.md), que cubre el flujo de trabajo, los scripts y la convención de mensajes de commit.
3. Comprueba localmente con `yarn typecheck`, `yarn lint` y `yarn test`.
4. Mantén los cambios enfocados y documenta las nuevas APIs en este README.

## Licencia

[MIT](./LICENSE)
