import React from 'react';

export interface RouteUtilProps {
  component: React.ElementType;
  path: string;
  extraProps?: Record<string, any>;
  pathName: string;
  guardedRoute: boolean;
  authentication: boolean;
  exact: boolean;
}
