import React from 'react';
import Container from '@containers/user/Container';
import { useAuth } from '@hooks/useAuth';

const User = () => {
    const { authPassed } = useAuth();
    return authPassed ? <Container /> : <></>;
};

export default User;
