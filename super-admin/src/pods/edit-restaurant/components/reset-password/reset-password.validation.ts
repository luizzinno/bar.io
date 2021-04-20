import { ValidationSchema, Validators } from '@lemoncode/fonk';
import { createFormikValidation } from '@lemoncode/fonk-formik';

const validationSchema: ValidationSchema = {
  field: {
    newPassword: [Validators.required],
    repeatPassword: [Validators.required],
  },
};

export const formValidation = createFormikValidation(validationSchema);
