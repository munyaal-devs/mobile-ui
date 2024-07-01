import { factory } from '../factory';
import { FlatList as NativeFlatList } from 'react-native';
import type { FlatListProps } from './types';

export type { FlatListFactoryConfiguration, FlatListProps } from './types';

function createFlatList<ItemT>() {
  return factory<FlatListProps<ItemT>>(NativeFlatList, 'flatList');
}

export const FlatList = createFlatList();
