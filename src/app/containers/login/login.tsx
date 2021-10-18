import { Formik, Form } from 'formik';
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
          <CardHeader title="Login Page" />
          <CardContent>
            <div>
              <TextField
                fullWidth
                id="username"
                type="email"
                label="Username"
                placeholder="Username"
                margin="normal"
              />
              <TextField
                fullWidth
                id="password"
                type="password"
                label="Password"
                placeholder="Password"
                margin="normal"
              />
            </div>
          </CardContent>
          <CardActions>
            <Button variant="contained" size="large" color="secondary">
              Login
            </Button>
          </CardActions>
        </Card>
      </form>
    </>
  );
};

export default LoginContainer;
