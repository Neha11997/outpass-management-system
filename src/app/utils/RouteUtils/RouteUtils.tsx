import { Route, RouteComponentProps } from 'react-router';

import { GuardedRoute } from '@helpers/';

import { RouteUtilProps } from './type';

const getRoute = (routes: RouteUtilProps[]) =>
  routes.map((route) => {
    const Component = route.component;
    if (route.guardedRoute) {
      return (
        <GuardedRoute
          key={route.pathName}
          path={route.path}
          component={route.component}
          authentication={route.authentication}
          isAuthenticated={false}
          exact={route.exact}
          {...route.extraProps}
        />
      );
    }
    return (
      <Route
        key={route.pathName}
        path={route.path}
        exact={route.exact}
        render={(props: RouteComponentProps): JSX.Element => (
          <Component {...props} />
        )}
        {...route.extraProps}
      />
    );
  });

export default {
  getRoute,
};
