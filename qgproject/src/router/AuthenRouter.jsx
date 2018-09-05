import React from 'react';
import { Route, Redirect } from 'dva/router';

export const AuthenRouter = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            sessionStorage.getItem('admin') ? (
                <Component {...props} />
            ) : (
                    <Redirect
                        to={{
                            pathname: '/logIn',
                            state: { from: props.location }
                        }}
                    />
                )
        }
    />
);