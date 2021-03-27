import React from 'react';
import { LoginContainer } from 'pods/login';
import { LoginLayout } from 'layouts';

export const LoginScene: React.FC = () => {
  return (
    <>
      <LoginLayout>
        <LoginContainer />
      </LoginLayout>
    </>
  );
};
