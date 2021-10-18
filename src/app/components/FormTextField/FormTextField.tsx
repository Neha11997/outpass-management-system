import React from 'react';
import { ErrorMessage, useField } from 'formik';
import { TextField, Typography } from '@material-ui/core';

const FormErrorMessage = (props: any) => {
  const { children } = props;
  return <Typography variant="h6">{children}</Typography>;
};

const FormTextField = (props: any) => {
  const { name, label = '' } = props;
  const [field, , helpers] = useField(name);
  const { setValue } = helpers;

  return (
    <React.Fragment>
      <TextField
        {...field}
        {...props}
        onChange={(e) => {
          let { value } = e.target;
          setValue(e.target.value);
        }}
        name={name}
        label={label}
      />
      <ErrorMessage name={name} component={FormErrorMessage} />
    </React.Fragment>
  );
};

export default FormTextField;
