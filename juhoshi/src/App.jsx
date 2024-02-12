import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Axios from "axios";
import "./App.css";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import { auth } from "./auth/firebase";
function App() {
  // let result = [[]];
  const host = "https://juhoshi.onrender.com/";
  // function groupObjectsById(objects) {
  //   const groupedArrays = {};

  //   objects.forEach((obj) => {
  //     const id = obj.uid;
  //     if (!groupedArrays[id]) {
  //       groupedArrays[id] = [obj];
  //     } else {
  //       groupedArrays[id].push(obj);
  //     }
  //   });

  //   return Object.values(groupedArrays);
  // }
  // function calculateTotals(arrayOfArrays) {
  //   const resultArray = [];

  //   arrayOfArrays.forEach((innerArray) => {
  //     let totalWeight = 0;
  //     let totalCount = 0;
  //     let totalQuantity = 0;

  //     innerArray.forEach((obj) => {
  //       totalWeight += obj.weight;
  //       totalCount += obj.count;
  //       totalQuantity += obj.quantity;
  //     });

  //     resultArray.push([totalWeight, totalCount, totalQuantity]);
  //   });

  //   return resultArray;
  // }

  const [res, setRes] = useState(false);
  const [userName, setUserName] = useState({});
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user);
      } else {
        setUserName("");
      }
    });
    // const fetchdata = async () => {
    //   await Axios.get(`${host}/api/form/getall`)
    //     .then((res) => {
    //       const data = res.data;
    //       console.log(data);

    //       const groupedArrays = groupObjectsById(data);
    //       console.log(groupedArrays);
    //       // console.log(groupedArrays[1][0]);
    //       result = calculateTotals(groupedArrays);
    //       console.log(result);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // };
    // fetchdata();
  }, []);
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              userName ? (
                <Home user={userName} />
              ) : (
                <Login setRes={setRes} res={res} />
              )
            }
          />
          <Route path="/login" element={<Login setRes={setRes} res={res} />} />
          <Route path="/signup" element={<SignUp />} />

          <Route
            path="/admin"
            element={
              userName && res ? <Admin /> : <Login setRes={setRes} res={res} />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
