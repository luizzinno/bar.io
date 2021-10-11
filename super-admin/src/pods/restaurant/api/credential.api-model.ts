export interface Credential {
    newPassword: string;
    repeatPassword: string;
  }
  
  export const createEmptyCredential = (): Credential => ({
    newPassword: "",
    repeatPassword: "",
  });
  