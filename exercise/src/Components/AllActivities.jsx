import React, { createContext, useContext, useEffect, useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { Button, makeStyles, TextField } from "@mui/material";
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const AllActivities = (props) => {
  // const [data, setData] = useState([]);

  // const fetchData = async () => {
  //   const result = await fetch("http://localhost:4000/get");

  //   const data_new = await result.json();
  //   setData(data_new);
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const delData = async (id) => {
  //   await fetch(`http://localhost:4000/delete/${id}`, {
  //     method: "DELETE",
  //   });
  //   props.data1.fetchData();
  // };

  return (
    <div>
      <Grid
        container
        spacing={1}
        sx={{
          // width:900,
          // height:300,
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {props.data1.map((value) => {
          return (
            <Grid item xs={12} md={4}>
              <Item
                elevation={4}
                sx={{
                  margin: "30px",
                }}
              >
                <h3 style={{ color: "blue" }}>{value.u_name}</h3>
                <h4>
                  <span>Activity =</span> <span>{value.activity}</span>
                </h4>
                <h4>
                  <span>Start Time =</span> <span>{value.s_time}</span>
                </h4>
                <h4>
                  <span>End Time =</span> <span>{value.e_time}</span>
                </h4>
             <Link to='/AddActivity'>
             <Button variant="contained" color="primary"
                onClick={() => {
                    props.edit1(value._id);  
            }}
                > 
                  <CreateIcon />
                </Button>
             </Link>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ marginLeft: "8px" }}
                  onClick={() => {
                    props.delData1(value._id);  
            }}
                >
                  <DeleteOutlineIcon />
                </Button>
              </Item>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default AllActivities;
