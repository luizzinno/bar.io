import { Role } from 'core/user';

//Mock api
export const isValidLogin = (email: string, password: string): Promise<Role> =>
  new Promise((resolve) => {
    setTimeout(() => {
      // mock call
      resolve(checkUser(email, password));
    }, 500);
  });

const checkUser = (email: string, password: string): Role => {
  if(email === 'super-admin@prueba.com' && password === 'test') {
    return Role.SUPERADMIN;
  } else if(email === 'admin@prueba.com' && password === 'test') {
    return Role.ADMIN;
  }

  return Role.NONE;
}