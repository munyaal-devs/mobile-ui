import type {
  ButtonFactoryConfiguration,
  ButtonIconFactoryConfiguration,
  ButtonTextFactoryConfiguration,
  CenterFactoryConfiguration,
  DividerFactoryConfiguration,
  FormControlErrorTextFactoryConfiguration,
  FormControlFactoryConfiguration,
  FormControlHelperTextFactoryConfiguration,
  FormControlLabelFactoryConfiguration,
  HeadingFactoryConfiguration,
  HStackFactoryConfiguration,
  IconFactoryConfiguration,
  InputFactoryConfiguration,
  InputFieldFactoryConfiguration,
  ScrollViewFactoryConfiguration,
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
  formControl?: FormControlFactoryConfiguration;
  formControlErrorText?: FormControlErrorTextFactoryConfiguration;
  formControlHelperText?: FormControlHelperTextFactoryConfiguration;
  formControlLabel?: FormControlLabelFactoryConfiguration;
  heading?: HeadingFactoryConfiguration;
  hStack?: HStackFactoryConfiguration;
  icon?: IconFactoryConfiguration;
  input?: InputFactoryConfiguration;
  inputField?: InputFieldFactoryConfiguration;
  scrollView?: ScrollViewFactoryConfiguration;
  text?: TextFactoryConfiguration;
  view?: ViewFactoryConfiguration;
  vStack?: VStackFactoryConfiguration;
};

export type ComponentConfigurationsKey = keyof ComponentConfigurations;
