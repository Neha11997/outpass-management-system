import { Login } from "@scenes/";

export const RouteConfig = [
    {
        path: '/login',
        component: Login,
        authenticationRequired: false,
    }
];
