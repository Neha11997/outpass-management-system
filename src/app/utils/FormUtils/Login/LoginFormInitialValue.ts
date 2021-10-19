import { LoginFormFields } from '@models/LoginForm';

const LoginFormInitialValue: Record<LoginFormFields, string> = {
  [LoginFormFields.Email]: '',
  [LoginFormFields.Password]: '',
};

export default LoginFormInitialValue;
