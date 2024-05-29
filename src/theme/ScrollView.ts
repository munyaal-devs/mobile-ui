import {
  ScrollView as NativeScrollView,
  type ScrollViewProps,
} from 'react-native';
import { factoryComponent } from '../builder';

export const ScrollView = factoryComponent<ScrollViewProps>(NativeScrollView);
