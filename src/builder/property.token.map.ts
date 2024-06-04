import type { ThemeProviderStateKey } from '../providers/ThemeProvider/types';

const colors: ThemeProviderStateKey = 'colors';
const borderWidths: ThemeProviderStateKey = 'borderWidths';
const opacity: ThemeProviderStateKey = 'opacity';
const fontSizes: ThemeProviderStateKey = 'fontSizes';
const fontWeights: ThemeProviderStateKey = 'fontWeights';
const letterSpacings: ThemeProviderStateKey = 'letterSpacings';
const lineHeights: ThemeProviderStateKey = 'lineHeights';
const borderRadius: ThemeProviderStateKey = 'borderRadius';
const sizes: ThemeProviderStateKey = 'sizes';
const spaces: ThemeProviderStateKey = 'spaces';

export const propertyTokensMap: Map<string, ThemeProviderStateKey> = new Map<
  string,
  ThemeProviderStateKey
>();

propertyTokensMap.set('margin', spaces);
propertyTokensMap.set('marginTop', spaces);
propertyTokensMap.set('marginRight', spaces);
propertyTokensMap.set('marginBottom', spaces);
propertyTokensMap.set('marginLeft', spaces);
propertyTokensMap.set('marginHorizontal', spaces);
propertyTokensMap.set('marginVertical', spaces);
propertyTokensMap.set('marginStart', spaces);
propertyTokensMap.set('marginEnd', spaces);
propertyTokensMap.set('padding', spaces);
propertyTokensMap.set('paddingTop', spaces);
propertyTokensMap.set('paddingRight', spaces);
propertyTokensMap.set('paddingBottom', spaces);
propertyTokensMap.set('paddingLeft', spaces);
propertyTokensMap.set('paddingHorizontal', spaces);
propertyTokensMap.set('paddingVertical', spaces);
propertyTokensMap.set('paddingStart', spaces);
propertyTokensMap.set('paddingEnd', spaces);
propertyTokensMap.set('width', sizes);
propertyTokensMap.set('minWidth', sizes);
propertyTokensMap.set('maxWidth', sizes);
propertyTokensMap.set('height', sizes);
propertyTokensMap.set('minHeight', sizes);
propertyTokensMap.set('maxHeight', sizes);
propertyTokensMap.set('lineHeight', lineHeights);
propertyTokensMap.set('letterSpacing', letterSpacings);
propertyTokensMap.set('fontWeight', fontWeights);
propertyTokensMap.set('fontSize', fontSizes);
propertyTokensMap.set('gap', spaces);
propertyTokensMap.set('columnGap', spaces);
propertyTokensMap.set('rowGap', spaces);
propertyTokensMap.set('borderColor', colors);
propertyTokensMap.set('borderTopColor', colors);
propertyTokensMap.set('borderRightColor', colors);
propertyTokensMap.set('borderBottomColor', colors);
propertyTokensMap.set('borderLeftColor', colors);
propertyTokensMap.set('borderBlockColor', colors);
propertyTokensMap.set('borderBlockEndColor', colors);
propertyTokensMap.set('borderBlockStartColor', colors);
propertyTokensMap.set('borderStartColor', colors);
propertyTokensMap.set('borderEndColor', colors);
propertyTokensMap.set('elevation', borderWidths);
propertyTokensMap.set('borderWidth', borderWidths);
propertyTokensMap.set('borderTopWidth', borderWidths);
propertyTokensMap.set('borderRightWidth', borderWidths);
propertyTokensMap.set('borderBottomWidth', borderWidths);
propertyTokensMap.set('borderLeftWidth', borderWidths);
propertyTokensMap.set('borderStartWidth', borderWidths);
propertyTokensMap.set('borderEndWidth', borderWidths);
propertyTokensMap.set('borderRadius', borderRadius);
propertyTokensMap.set('borderTopRightRadius', borderRadius);
propertyTokensMap.set('borderTopLeftRadius', borderRadius);
propertyTokensMap.set('borderTopStartRadius', borderRadius);
propertyTokensMap.set('borderTopEndRadius', borderRadius);
propertyTokensMap.set('borderBottomRightRadius', borderRadius);
propertyTokensMap.set('borderBottomLeftRadius', borderRadius);
propertyTokensMap.set('borderBottomEndRadius', borderRadius);
propertyTokensMap.set('borderBottomStartRadius', borderWidths);
propertyTokensMap.set('borderStartEndRadius', borderRadius);
propertyTokensMap.set('borderStartStartRadius', borderRadius);
propertyTokensMap.set('borderEndEndRadius', borderRadius);
propertyTokensMap.set('borderEndStartRadius', borderRadius);
propertyTokensMap.set('shadowRadius', borderRadius);
propertyTokensMap.set('color', colors);
propertyTokensMap.set('backgroundColor', colors);
propertyTokensMap.set('shadowColor', colors);
propertyTokensMap.set('opacity', opacity);
propertyTokensMap.set('shadowOpacity', opacity);

export const specificStyleTokensMap: Map<string, string> = new Map<
  string,
  string
>();

specificStyleTokensMap.set('flex', 'flex');
specificStyleTokensMap.set('flexDirection', 'flexDirection');
specificStyleTokensMap.set('direction', 'direction');
specificStyleTokensMap.set('justifyContent', 'justifyContent');
specificStyleTokensMap.set('alignItems', 'alignItems');
specificStyleTokensMap.set('alignSelf', 'alignSelf');
specificStyleTokensMap.set('alignContent', 'alignContent');
specificStyleTokensMap.set('flexWrap', 'flexWrap');
specificStyleTokensMap.set('flexBasis', 'flexBasis');
specificStyleTokensMap.set('flexGrow', 'flexGrow');
specificStyleTokensMap.set('flexShrink', 'flexShrink');
specificStyleTokensMap.set('rowGap', 'rowGap');
specificStyleTokensMap.set('columnGap', 'columnGap');
specificStyleTokensMap.set('gap', 'gap');
specificStyleTokensMap.set('position', 'position');
specificStyleTokensMap.set('color', 'color');
