import { AppBar, Toolbar, Typography } from "@material-ui/core/";
import * as React from "react";

export const Header: React.StatelessComponent<{}> = () => {
  return (
    <div>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="display1" color="inherit" align="center">
            Weather App
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
