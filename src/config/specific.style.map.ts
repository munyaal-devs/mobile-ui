import type { SpecificStylesKey } from '../types';

/**
 * Define todas las propiedades de estilos que pasan directos como props del componente
 * */
export const specificStyleMap = new Map<string, SpecificStylesKey>();

specificStyleMap.set('flex', 'flex');
specificStyleMap.set('flexDirection', 'flexDirection');
specificStyleMap.set('direction', 'direction');
specificStyleMap.set('justifyContent', 'justifyContent');
specificStyleMap.set('alignItems', 'alignItems');
specificStyleMap.set('alignSelf', 'alignSelf');
specificStyleMap.set('alignContent', 'alignContent');
specificStyleMap.set('flexWrap', 'flexWrap');
specificStyleMap.set('flexBasis', 'flexBasis');
specificStyleMap.set('flexGrow', 'flexGrow');
specificStyleMap.set('flexShrink', 'flexShrink');
specificStyleMap.set('rowGap', 'rowGap');
specificStyleMap.set('columnGap', 'columnGap');
specificStyleMap.set('gap', 'gap');
specificStyleMap.set('position', 'position');
specificStyleMap.set('color', 'color');
specificStyleMap.set('textAlign', 'textAlign');
specificStyleMap.set('opacity', 'opacity');
