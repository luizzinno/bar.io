import { ValidationSchema, Validators } from '@lemoncode/fonk';
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
        validator: Validators.required,
        message: 'Por favor complete este campo obligatorio',
      },
      {
        validator: Validators.pattern,
        customArgs: { pattern: /^[0-9]{2,3}-? ?[0-9]{6,7}$/ },
        message: 'Proporcione un número de teléfono válido',
      },
    ],
  },
};

export const formValidation = createFormikValidation(validationSchema);
