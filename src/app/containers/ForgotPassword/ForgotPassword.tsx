import React from 'react';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';

const LoginContainer = () => {
  return (
    <>
      <form className="oms-form" noValidate autoComplete="off">
        <Card className="form-container">
          <CardHeader title="Forgot Password?" />
          <CardContent>
            <div>
              <TextField
                fullWidth
                id="user email"
                type="email"
                label="User email"
                placeholder="User email"
                margin="normal"
              />
            </div>
          </CardContent>
          <CardActions>
            <Button variant="contained" size="large" color="secondary">
              Continue
            </Button>
          </CardActions>
        </Card>
      </form>
    </>
  );
};

export default LoginContainer;
