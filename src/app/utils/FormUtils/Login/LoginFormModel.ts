import { LoginFormFields } from '@models/LoginForm';
import { FormModel } from '@models/FormModel';

const LoginFormModel: FormModel<LoginFormFields> = {
  formId: 'LoginForm',
  formField: {
    [LoginFormFields.Email]: {
      name: LoginFormFields.Email,
    },
  },
  [LoginFormFields.Password]: {
    name: LoginFormFields.Password,
  },
};

export default LoginFormModel;
