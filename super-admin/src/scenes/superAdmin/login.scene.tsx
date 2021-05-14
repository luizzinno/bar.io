import React from 'react';
import { LoginLayout } from 'layouts';
import { LoginContainer } from 'pods/login';

export const LoginScene: React.FunctionComponent = () => {
  return (
    <>
      <LoginLayout>
        <LoginContainer />
      </LoginLayout>
    </>
  );
};
