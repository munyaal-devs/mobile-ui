import { factory } from '../factory';
import { SectionList as NativeSectionList } from 'react-native';
import type { SectionListProps } from './types';

export type {
  SectionListFactoryConfiguration,
  SectionListProps,
} from './types';

function createSectionList<ItemT, SectionT>() {
  return factory<SectionListProps<ItemT, SectionT>>(
    NativeSectionList,
    'sectionList'
  );
}

export const SectionList = createSectionList();
