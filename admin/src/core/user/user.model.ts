export enum Role {
  NONE,
  ADMIN,
  SUPERADMIN,
}

export interface User {
  email: string;
  role: Role;
  barId: number;
}

export const createDefaultUser = (): User => ({
  email: "",
  role: Role.NONE,
  barId: -1,
});