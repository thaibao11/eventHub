export type RootStackNavigator = {
  Home: undefined;
  Event: undefined;
  Map: undefined;
  Profile: undefined;
};

export type AuthStackNavigator = {
  Login: undefined;
  OnBoarding: undefined;
  SignIn: undefined;
  Home: undefined;
  ResetPassword: undefined;
  Verify: VerifyNavigate | undefined;
};

type VerifyNavigate = {
  email: string;
};
