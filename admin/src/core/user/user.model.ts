export enum Role {
  NONE,
  ADMIN,
  SUPERADMIN,
}

export interface User {
  email: string;
  role: Role;
}

export const createDefaultUser = (): User => ({
  email: "",
  role: Role.NONE,
});