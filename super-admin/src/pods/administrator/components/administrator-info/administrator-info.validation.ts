import { ValidationSchema, Validators } from '@lemoncode/fonk';
import { isNumber } from '@lemoncode/fonk-is-number-validator';
import { createFormikValidation } from '@lemoncode/fonk-formik';

const validationSchema: ValidationSchema = {
  field: {
    name: [
      {
        validator: Validators.required,
        message: 'Por favor complete este campo obligatorio',
      },
      {
        validator: Validators.minLength,
        customArgs: { length: 3 },
        message: 'El valor proporcionado no cumple con la longitud mínima',
      },
    ],
    email: [
      {
        validator: Validators.required,
        message: 'Por favor complete este campo obligatorio',
      },
      {
        validator: Validators.email,
        message: 'Email no válido',
      },
    ],
    numberPhone: [
      {
        validator: isNumber.validator,
        message: 'Proporcione un número de teléfono válido',
      },
      {
        validator: Validators.pattern,
        customArgs: { pattern: /^[6|7|8|9]{1}([\d]{2}[-]*){3}[\d]{2}$/ },
        message: 'Proporcione un número de teléfono válido',
      },
    ],
  },
};

export const formValidation = createFormikValidation(validationSchema);
