import * as Yup from 'yup';

import { LoginFormFields } from '@models/LoginForm';
import { FormErrorMessages } from '@constants/FormErrorMessages';

const LoginFormValidationSchema = Yup.object().shape({
  [LoginFormFields.Email]: Yup.string()
    .required(FormErrorMessages.required)
    .email(FormErrorMessages.email),
  [LoginFormFields.Password]: Yup.string()
    .required(FormErrorMessages.required)
    .min(8, FormErrorMessages.minLength(8)),
});

export default LoginFormValidationSchema;
