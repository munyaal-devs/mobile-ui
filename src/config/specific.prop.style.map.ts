import type { SpecificStylesKey } from '../types';

/**
 * Define todas las propiedades de estilos que pasan directos como props del componente
 * */
export const specificPropStyleMap = new Map<string, SpecificStylesKey>();

specificPropStyleMap.set('placeholderTextColor', 'color');
