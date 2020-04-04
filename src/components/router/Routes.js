import React from "react";
import { Switch } from "react-router-dom";

import Dashboard from "../dashboard/Dashboard";
import Tasks from "../tasks/Tasks";
import Route from "./Route";

export default () => {
  return (
    <Switch>
      <Route path="/tasks" component={Tasks} />
      <Route path="/" component={Dashboard} />
    </Switch>
  );
};