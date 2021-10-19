import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';

const SignUpContainer = () => {
  return (
    <>
      <form className="oms-form" noValidate autoComplete="off">
        <Card className="form-container">
          <CardHeader title="SignUp" />
          <CardContent>
            <div>
              <TextField
                fullWidth
                id="Enrollment No."
                type="number"
                label="Enrollment No."
                placeholder="Enrollment No"
                margin="normal"
              />
              <TextField
                fullWidth
                id="Name"
                type="text"
                label="Name"
                placeholder="Name"
                margin="normal"
              />
              {/* <TextField
            fullWidth
            id="Last Name"
            type="text"
            label="Last Name"
            placeholder="Last Name"
            margin="normal"

          /> */}
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
                id="Phone number"
                type="number"
                label="Phone number"
                placeholder="Phone number"
                margin="normal"
              />
              <TextField
                fullWidth
                id="Department"
                type="text"
                label=".Department"
                placeholder="Department"
                margin="normal"
              />
              <TextField
                fullWidth
                id="Hostel Block"
                type="text"
                label="Hostel Block"
                placeholder="Hostel Block"
                margin="normal"
              />
              <TextField
                fullWidth
                id="Guardian Name"
                type="text"
                label="Guardian Name"
                placeholder="Guardian Name"
                margin="normal"
              />
              {/* <TextField
              fullWidth
              id="Mother's Name"
              type="text"
              label="Mother's Name"
              placeholder="Mother's Name"
              margin="normal"

            />   */}
            </div>
          </CardContent>
          <CardActions>
            <Button variant="contained" size="large" color="secondary">
              Signup
            </Button>
          </CardActions>
        </Card>
      </form>
    </>
  );
};

export default SignUpContainer;
