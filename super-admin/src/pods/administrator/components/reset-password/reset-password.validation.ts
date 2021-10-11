import { ValidationSchema, Validators } from '@lemoncode/fonk';
import { createFormikValidation } from '@lemoncode/fonk-formik';
import { matchField } from '@lemoncode/fonk-match-field-validator';

const validationSchema: ValidationSchema = {
  field: {
    newPassword: [Validators.required],
    repeatPassword: [
      Validators.required,
      {
        validator: matchField.validator,
        customArgs: { field: 'newPassword' },
        message: "The field must match with 'Nueva Clave'",
      },
    ],
  },
};

export const formValidation = createFormikValidation(validationSchema);
