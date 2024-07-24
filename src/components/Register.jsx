import { useState } from "react";
import axios from "axios";
function Register() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [emailErr, setEmailErr] = useState("");
  // const [nameErr, setnameErr] = useState("");
  // const handleSubmit = () => {

  //   setEmailErr(""), setnameErr("");
  //   if (name == "") {
  //     setnameErr("Name required");
  //   }

  //   if (email == "" || !email.includes("@") || email.length < 6) {
  //     setEmailErr("valid email required");
  //   }

  //   console.log({ name, email });
  // };

  const [formData, setFormData] = useState({
    fname: "",
    email: "",
    password: "",
    confirmPassword: "",
    grnder: "",
  });
  const [errData, setErrData] = useState({});

  const handleChange = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handlevalidation = async (e) => {
    const newErr = {};

    if (formData.fname == "") {
      data.fname = "name require";
    } else if (formData.email == "") {
      data.email = "valid email required";
    }
    if (formData.password == "") {
      data.password = "name require";
    } else if (formData.confirmPassword == "") {
      data.confirmPassword = "valid email required";
    }
    setErrData(newErr);
    return Object.keys(newErr).length === 0;
  };
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (handlevalidation()) {
       try {
         const response = await axios.post("http://localhost:4000/Register", formData);
        
       } catch (error) {
         console.log(error);
       }
    }
  }

  return (
    <div className="">
      <form
        action=""
        onSubmit={ handleSubmit}
      >
        <input
          type="text"
          name="fname"
          id=""
          placeholder="Name"
          value={formData.fname}
          onChange={handleChange}
        />

        {errData.fname && <p style={{ color: "red" }}>{errData.fname}</p>}
        <input
          type="text"
          name="email"
          value={formData.email}
          placeholder="email"
          onChange={handleChange}
        />
        {errData.email && <p style={{ color: "red" }}>{errData.email}</p>}
        <input
          type="text"
          name="password"
          value={formData.password}
          placeholder="password"
          onChange={handleChange}
        />
        {errData.password && <p style={{ color: "red" }}>{errData.password}</p>}
        <input
          type="text"
          name="confirmPassword"
          value={formData.confirmPassword}
          placeholder="confirmPassword"
          onChange={handleChange}
        />
        {errData.confirmPassword && (
          <p style={{ color: "red" }}>{errData.confirmPassword}</p>
        )}

        <input type="submit" value={"Submit"} />
      </form>
    </div>
  );
}

export default Register;
