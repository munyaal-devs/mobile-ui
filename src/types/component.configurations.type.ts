import type {
  ButtonFactoryConfiguration,
  ButtonIconFactoryConfiguration,
  ButtonTextFactoryConfiguration,
  CenterFactoryConfiguration,
  DividerFactoryConfiguration,
  FlatListFactoryConfiguration,
  FormControlErrorTextFactoryConfiguration,
  FormControlFactoryConfiguration,
  FormControlHelperTextFactoryConfiguration,
  FormControlLabelFactoryConfiguration,
  HeadingFactoryConfiguration,
  HStackFactoryConfiguration,
  IconFactoryConfiguration,
  ImageFactoryConfiguration,
  InputFactoryConfiguration,
  InputFieldFactoryConfiguration,
  KeyboardAvoidingViewFactoryConfiguration,
  ScrollViewFactoryConfiguration,
  SectionListFactoryConfiguration,
  TextFactoryConfiguration,
  ViewFactoryConfiguration,
  VStackFactoryConfiguration,
} from '../components';

export type ComponentConfigurations = {
  button?: ButtonFactoryConfiguration;
  buttonIcon?: ButtonIconFactoryConfiguration;
  buttonText?: ButtonTextFactoryConfiguration;
  center?: CenterFactoryConfiguration;
  divider?: DividerFactoryConfiguration;
  flatList?: FlatListFactoryConfiguration;
  formControl?: FormControlFactoryConfiguration;
  formControlErrorText?: FormControlErrorTextFactoryConfiguration;
  formControlHelperText?: FormControlHelperTextFactoryConfiguration;
  formControlLabel?: FormControlLabelFactoryConfiguration;
  heading?: HeadingFactoryConfiguration;
  hStack?: HStackFactoryConfiguration;
  icon?: IconFactoryConfiguration;
  image?: ImageFactoryConfiguration;
  input?: InputFactoryConfiguration;
  inputField?: InputFieldFactoryConfiguration;
  keyboardAvoidingView?: KeyboardAvoidingViewFactoryConfiguration;
  scrollView?: ScrollViewFactoryConfiguration;
  sectionList?: SectionListFactoryConfiguration;
  text?: TextFactoryConfiguration;
  view?: ViewFactoryConfiguration;
  vStack?: VStackFactoryConfiguration;
};

export type ComponentConfigurationsKey = keyof ComponentConfigurations;
