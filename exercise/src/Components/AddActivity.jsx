import React from "react";
import { useEffect, useState } from "react";
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  styled,
  Typography,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Link } from "react-router-dom";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

const emptyInput = {
  u_name: "",
  activity: "",
  s_time: "",
  e_time: "",
};

const AddActivity = (props) => {
  const [age, setAge] = React.useState("");

  return (
    <div
    // style={{
    //     backgroundImage: 'url(/c_photo/bs_img1.avif)',
    //     backgroundSize: '100%',
    //     backgroundPosition: 'center',
    //     backgroundRepeat: 'no-repeat',
    //   }}
    >
      <Container>
        <Typography variant="h4">Add Activity</Typography>

        <FormControl>
          <InputLabel>User Name</InputLabel>
          <Input
            // value={props.user1.u_name}
            onChange={(e) => {
              props.onValueChange1(e);
            }}
            name="u_name"
          />
        </FormControl>

        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-filled-label">Activity</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            onChange={(e) => {
              props.onValueChange1(e);
            }}
            name="activity"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="swim">Swim</MenuItem>
            <MenuItem value="run">Run</MenuItem>
            <MenuItem value="cycling">Cycling</MenuItem>
          </Select>
        </FormControl>

        <FormControl>
          <InputLabel>Start Time</InputLabel>
          <Input
            value={props.user1.s_time}
            onChange={(e) => {
              props.onValueChange1(e);
            }}
            name="s_time"
          />

      {/* <TimePicker

          // label="Time"
          // value={props.user1.s_time}
            // onChange={(e) => {
            //   props.onValueChange1(e);
            // }}
            // name="s_time"
          // name={(params) => <TextField {...params} />}
          
        /> */}
        </FormControl>
        <FormControl>
          <InputLabel>End Time</InputLabel>
          <Input
            value={props.user1.e_time}
            onChange={(e) => {
              props.onValueChange1(e);
            }}
            name="e_time"
          />
        </FormControl>

        <FormControl>
          {props.btn1 ? (
            <Button
              variant="contained"
              onClick={() => {
                props.sendData1();
              }}
            
            >
              Add User
            </Button>
          ) : (

            <Link to="/AllActivities">

            <Button
              variant="contained"
              onClick={() => {
                props.edit21();
              }}
            >
              Edit User
            </Button>
            </Link>
          )}

          {/* <Button
            onClick={() => {
              //   addUserDetails();
              props.sendData1();
            }}
            variant="contained"
          >
            Add Activity
          </Button> */}
        </FormControl>
      </Container>
    </div>
  );
};

export default AddActivity;
