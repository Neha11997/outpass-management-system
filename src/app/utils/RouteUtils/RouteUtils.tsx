import { Route, RouteComponentProps } from 'react-router'

import { GuardedRoute } from '@helpers/';

import { RouteUtilProps } from './type';

const getRoute = (routes: RouteUtilProps[]) =>
  routes.map((route) => {
    const Component = route.component
    if (route.authenticationRequired) {
      return (
        <GuardedRoute
          path={route.path}
          component={route.component}
          authentication={true}
          {...route.extraProps}
        />
      )
    }
    return (
      <Route
        path={route.path}
        render={(props: RouteComponentProps): JSX.Element => <Component />}
        {...route.extraProps}
      />
    )
  })

export default {
  getRoute,
}
