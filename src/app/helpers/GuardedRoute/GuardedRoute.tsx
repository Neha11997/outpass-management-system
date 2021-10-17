import { Route, Redirect, RouteComponentProps } from 'react-router-dom'

const GuardedRoute = ({ component, isAuthenticated, ...rest }: any) => {
  const Component = component;
  const routeComponent = (props: RouteComponentProps) :JSX.Element =>
    isAuthenticated ? (
      <Component {...props} />
    ) : (
      <Redirect to={{ pathname: '/login' }} />
    )
  return <Route {...rest} render={routeComponent} />
}

export default GuardedRoute
