import { Dashboard, Login } from '@scenes/';

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
    path: '',
    pathName: 'dashboard',
    component: Dashboard,
    authentication: true,
    guardedRoute: true,
    exact: true,
  },
];
