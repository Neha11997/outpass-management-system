import React from "react";

export interface RouteUtilProps {
  component: React.ElementType;
  path: string;
  extraProps?: Record<string, any>;
  authenticationRequired: boolean;
};
