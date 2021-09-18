import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useState } from "react";

const Login = () => {
  const [name, setName] = useState("");
  let nameHandler = (e) => {
    setName(e.target.value);
  };

  const formHandler = (e) => {
    e.preventDefault();
    console.log(name);
  };

  return (
    <div>
      {!name && (
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
              onSubmit={formHandler}
            >
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                onChange={nameHandler}
              />
              <Button variant="text">Submit</Button>
            </Box>
          </CardContent>
        </Card>
      )}
      {name && <h1>WellCome {name}</h1>}
    </div>
  );
};

export default Login;
