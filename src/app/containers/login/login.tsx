import React from 'react';
import { Card, Button, CardHeader, CardContent } from '@mui/material';
import { Form, Formik, FormikProps } from 'formik';

import { FormTextField } from '@components/';

import {
  LoginFormInitialValue,
  LoginFormModel,
  LoginFormValidationSchema,
} from '@utils/FormUtils/Login';
import { LoginFormFields } from '@models/LoginForm';

import { EmailFieldConfig, PasswordFieldConfig } from './login-config';

const LoginContainer = () => {
  const onFormSubmit = (formValues: any) => {
    console.log('handle form submit here', formValues);
  };
  return (
    <Formik
      initialValues={LoginFormInitialValue}
      onSubmit={onFormSubmit}
      validationSchema={LoginFormValidationSchema}
    >
      {(formikData: FormikProps<any>) => (
        <React.Fragment>
          <Form id={LoginFormModel.formId} className="oms-form">
            <Card className="form-container">
              <CardHeader title="Login" />
              <CardContent>
                <div>
                  <FormTextField
                    name={LoginFormFields.Email}
                    inputProps={EmailFieldConfig}
                  />
                  <FormTextField
                    name={LoginFormFields.Password}
                    inputProps={PasswordFieldConfig}
                  />
                </div>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  color="secondary"
                >
                  Login
                </Button>
                <div>
                  <div>
                    Don't have an account<a>Sign in</a>
                  </div>
                  <div>
                    <a>Forgot Password</a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Form>
        </React.Fragment>
      )}
    </Formik>
  );
};

export default LoginContainer;
