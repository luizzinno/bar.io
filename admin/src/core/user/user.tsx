import React from 'react';
import { User, createDefaultUser } from './user.model';

interface UserContext {
  user: User;
  setUser: (user: User) => void;
}

export const userContext = React.createContext<UserContext>({
  user: createDefaultUser(),
  setUser: value => {
    console.log('User Context, forgot provider on top of root?');
  },
});

export const UserProvider: React.FC = props => {
  const [user, setUser] = React.useState<User>(createDefaultUser());

  return (
    <userContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {props.children}
    </userContext.Provider>
  );
};