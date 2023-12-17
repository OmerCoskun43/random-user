import React, { useState } from "react";
import mailSvg from "./assets/mail.svg";
import womanSvg from "./assets/woman.svg";
import womanAgeSvg from "./assets/growing-up-woman.svg";
import mapSvg from "./assets/map.svg";
import phoneSvg from "./assets/phone.svg";
import padlockSvg from "./assets/padlock.svg";
import Footer from "./components/footer/Footer";
import axios from "axios";

const url = "https://randomuser.me/api/";
const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";

function App() {
  const initialValue = {
    email: false,
    name: false,
    age: false,
    address: false,
    phone: false,
    password: false,
  };
  const [toggle, setToggle] = useState(initialValue);
  const [user, setUser] = useState();
  const [text, setText] = useState("");
  const [arr, setArr] = useState([]);

  const getUser = async () => {
    const res = await axios.get(url);

    setUser({
      name:
        res.data.results[0].name.title +
        " " +
        res.data.results[0].name.first +
        " " +
        res.data.results[0].name.last,
      email: res.data.results[0].email,
      age: res.data.results[0].dob.age,
      address:
        res.data.results[0].location.street.name +
        ", " +
        res.data.results[0].location.city +
        ", " +
        res.data.results[0].location.country,
      phone: res.data.results[0].phone,
      password: res.data.results[0].login.password,
      image: res.data.results[0].picture.large,
    });
  };

  const handleClick = () => {
    setToggle(initialValue);
    getUser();
  };

  function addClick() {
    if (user) {
      setArr([...arr, user]);
    }
    console.log(arr);
    setToggle(initialValue);
  }

  return (
    <main>
      <div className="block bcg-orange"></div>
      <div className="block">
        <div className="container">
          <img
            src={user?.image || defaultImage}
            alt="random user"
            className="user-img"
            style={{ cursor: "pointer" }}
          />

          {toggle?.[text] && (
            <>
              <p className="user-title"> My {text} is </p>
              <p className="user-value"> {user?.[text]} </p>
            </>
          )}

          <p className="user-value"></p>
          <div className="values-list">
            <button className="icon" data-label="name">
              <img
                onClick={() => {
                  setToggle({ ...toggle, name: !toggle.name });
                  setText("name");
                }}
                src={womanSvg}
                alt="user"
                id="iconImg"
              />
            </button>
            <button className="icon" data-label="email">
              <img
                onClick={() => {
                  setToggle({ ...toggle, email: !toggle.email });
                  setText("email");
                }}
                src={mailSvg}
                alt="mail"
                id="iconImg"
              />
            </button>
            <button className="icon" data-label="age">
              <img
                onClick={() => {
                  setToggle({ ...toggle, age: !toggle.age });
                  setText("age");
                }}
                src={womanAgeSvg}
                alt="age"
                id="iconImg"
              />
            </button>
            <button className="icon" data-label="street">
              <img
                onClick={() => {
                  setToggle({ ...toggle, address: !toggle.address });
                  setText("address");
                }}
                src={mapSvg}
                alt="map"
                id="iconImg"
              />
            </button>
            <button className="icon" data-label="phone">
              <img
                onClick={() => {
                  setToggle({ ...toggle, phone: !toggle.phone });
                  setText("phone");
                }}
                src={phoneSvg}
                alt="phone"
                id="iconImg"
              />
            </button>
            <button className="icon" data-label="password">
              <img
                onClick={() => {
                  setToggle({ ...toggle, password: !toggle.password });
                  setText("password");
                }}
                src={padlockSvg}
                alt="lock"
                id="iconImg"
              />
            </button>
          </div>
          <div className="btn-group">
            <button onClick={handleClick} className="btn" type="button">
              new user
            </button>
            <button onClick={addClick} className="btn" type="button">
              add user
            </button>
          </div>

          <table className="table">
            <thead>
              <tr className="head-tr">
                <th className="th">Image</th>
                <th className="th">Firstname</th>
                <th className="th">Email</th>
                <th className="th">Phone</th>
                <th className="th">Age</th>
              </tr>
            </thead>
            <tbody>
              {arr?.map((user, index) => {
                return (
                  <tr key={index} className="body-tr">
                    <th className="th th-b" style={{}}>
                      <img
                        style={{
                          width: "60px",
                          height: "60px",
                          borderRadius: "50%",
                          display: "flex",
                          marginLeft: "70px",
                          marginTop: "30px",
                        }}
                        src={user?.image}
                        alt=""
                      />{" "}
                    </th>
                    <th className="th th-b">{user?.name.slice(0, 12)}</th>
                    <th className="th th-b">{user?.email}</th>
                    <th className="th th-b">{user?.phone}</th>
                    <th className="th th-b">{user?.age} </th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Footer />
      </div>
    </main>
  );
}

export default App;
