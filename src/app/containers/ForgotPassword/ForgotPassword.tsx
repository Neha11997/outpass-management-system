import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';

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
