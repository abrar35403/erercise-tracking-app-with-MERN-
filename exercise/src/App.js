import logo from "./logo.svg";
import "./App.css";
import MUI from "./Components/MUI";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import AllActivities from "./Components/AllActivities";
import AddActivity from "./Components/AddActivity";
import MiniDrawer from "./Components/SideDrawer";
import { useEffect, useState } from "react";

const emptyInput = {
  u_name: "",
  activity: "",
  s_time: "",
  e_time: "",
};

function App() {
  const [btn, setBtn] = useState(true);
  const [editVal, setEditVal] = useState();
  
  const [data, setData] = useState([]);
  const [user, setUser] = useState({
    u_name: "",
    activity: "",
    s_time: "",
    e_time: "",
  });
  
  const onValueChange = (e) => {
    //setValue(e.target.value )
    setUser({ ...user, [e.target.name]: e.target.value });
    //console.log("name = " + e.target.name + " value = " + user);
    console.log(user);
  };

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };

  const sendData = async () => {
    await fetch("http://localhost:4000/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    console.log("user data", user);
    setUser(emptyInput);
  };


  const fetchData = async () => {
    const result = await fetch("http://localhost:4000/get");

    const data_new = await result.json();
    setData(data_new);
  };


  const delData = async (id) => {
    await fetch(`http://localhost:4000/delete/${id}`, {
      method: "DELETE",
    });
    fetchData();
  };




  useEffect(() => {
    fetchData();
  }, []);

  const edit = async (id) => {
     console.log("id", id);
     const res = await fetch(`http://localhost:4000/edit/${id}`);
     const result = await res.json();
     console.log("result.....", result);
    setUser(result);
     setEditVal(id);
    setBtn(false);
  };

  const edit2 = async () => {
     let edit_id = editVal;
    await fetch(`http://localhost:4000/update/${edit_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
     });
    console.log("data", user);
     fetchData();
    setBtn(true);
     setUser(emptyInput);
  };

  return (
    <>
      <Router>
        <NavBar />
        {/* <MiniDrawer/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/allactivities"
            element={<AllActivities  fetchData1={fetchData} data1={data} delData1={delData}
            edit1={edit}
            edit21={edit2}


            />}
            
          />
          <Route
            path="/addactivity"
            element={<AddActivity onValueChange1={ onValueChange}
            user1={user} 
            sendData1={sendData }
            edit1={edit}
            edit21={edit2}
            btn1={btn}
             />}
            
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
