import { Dashboard, ForgotPassword, Login, SignUp } from '@scenes/';

export const RouteConfig = [
  {
    path: '/login',
    pathName: 'login',
    component: Login,
    authentication: false,
    guardedRoute: true,
    exact: true,
  },
  {
    path: '/signup',
    component: SignUp,
    authenticationRequired: false,
    authentication: false,
    guardedRoute: true,
    exact: true,
  },
  {
    path: '/forgot-password',
    component: ForgotPassword,
    authenticationRequired: false,
    authentication: false,
    guardedRoute: true,
    exact: true,
  },
  {
    path: '',
    pathName: 'dashboard',
    component: Dashboard,
    authentication: true,
    guardedRoute: true,
    exact: true,
  },
];
