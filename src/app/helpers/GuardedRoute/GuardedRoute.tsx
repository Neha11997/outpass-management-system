import { Route, Redirect, RouteComponentProps } from 'react-router-dom';

const GuardedRoute = ({
  component,
  isAuthenticated,
  authentication,
  path,
  ...rest
}: any) => {
  const Component = component;
  const routeComponent = (props: RouteComponentProps): JSX.Element =>
    authentication === isAuthenticated ? (
      <Component {...props} />
    ) : authentication ? (
      <Redirect to={{ pathname: '/login' }} />
    ) : (
      <Redirect to={{ pathname: '/' }} />
    );
  return <Route {...rest} render={routeComponent} />;
};

export default GuardedRoute;
