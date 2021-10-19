import { FunctionComponent, useRef } from 'react';
import { FastField, FieldProps } from 'formik';
import TextField from '@mui/material/TextField';

import { TextInputFieldProps } from './types';

const TextInputField: FunctionComponent<TextInputFieldProps> = (
  props: TextInputFieldProps
): JSX.Element => {
  const { name, defaultValue, inputProps } = props;

  return (
    <FastField name={name}>
      {({ form, meta }: FieldProps): JSX.Element => {
        const inputValue =
          defaultValue || meta.value || meta.initialValue || '';

        const onChangeHandler = (event: any) => {
          let { value } = event.target;
          form.setFieldValue(name, value);
        };

        return (
          <div>
            <TextField
              error={!!(meta.touched && (meta.error || meta.initialError))}
              helperText={
                meta.touched && (meta.error || meta.initialError)
                  ? meta.error || meta.initialError
                  : ''
              }
              {...inputProps}
              onChange={onChangeHandler}
            />
          </div>
        );
      }}
    </FastField>
  );
};

TextInputField.defaultProps = {
  name: '',
  defaultValue: '',
};

export default TextInputField;
