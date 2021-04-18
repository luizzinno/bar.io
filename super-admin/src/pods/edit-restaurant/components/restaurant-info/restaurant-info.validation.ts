import { ValidationSchema, Validators } from '@lemoncode/fonk';
import { createFormikValidation } from '@lemoncode/fonk-formik';

const validationSchema: ValidationSchema = {
  field: {
    name: [Validators.required],
    mail: [Validators.required, Validators.email],
  },
};

export const formValidation = createFormikValidation(validationSchema);
