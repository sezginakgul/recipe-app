import Div, { Area, Button, Input, LoadingDiv } from "./Login.styled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PaperBag from "../../assets/paper-bag.gif";
import Loading from "../../assets/loading.gif";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  // console.log(formData);

  const localStorageKey = {
    username: "mail@mail.com",
    password: "123",
  };
  localStorage.setItem("LoginAuthor", JSON.stringify(localStorageKey));

  const eventHandleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const checked = () => {
    const storageData = JSON.parse(localStorage.getItem("LoginAuthor"));
    if (
      formData.username === storageData.username &&
      formData.password === storageData.password
    ) {
      setLoading(true);
      setFormData({
        username: "",
        password: "",
      });
      // console.log(formData);
      setTimeout(() => {
        setLoading(false);
        navigate("/home");
      }, 4300);
    } else {
      alert("Sorry :( Username or Password is wrong!");
    }
  };

  if (!loading) {
    return (
      <Div>
        <Area>
          <img src={PaperBag} alt="cooker" width={200} />
          <Input
            type="email"
            placeholder="example@example.com"
            name="username"
            onChange={eventHandleChange}
          />
          <Input
            type="password"
            placeholder="Password"
            name="password"
            onChange={eventHandleChange}
          />
          <Button onClick={checked}>LOGIN</Button>
        </Area>
      </Div>
    );
  }

  if (loading) {
    return (
      <LoadingDiv>
        <div>Logging in Succesfull :)</div>
        <img src={Loading} alt="bag" />
      </LoadingDiv>
    );
  }
}

export default Login;
