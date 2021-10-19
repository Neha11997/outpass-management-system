export const FormFieldConfig = {
  variant: 'outlined',
  fullWidth: true,
  margin: 'normal',
};

export const EmailFieldConfig = {
  ...FormFieldConfig,
  id: 'email',
  type: 'email',
  label: 'Email',
  placeholder: 'Email',
};

export const PasswordFieldConfig = {
  FormFieldConfig,
  id: 'password',
  type: 'password',
  label: 'Password',
  placeholder: 'Password',
};
