import React from "react";

function Contact() {
  const [formData, setFormData] = useState({
    fname: "",
    email: "",
  });
  const [errData, setErrData] = useState({});

  const handleChange = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = () => {
    const newErr = {};

    if (formData.fname == "") {
      newErr.fname = "name require";
    } else if (formData.email == "") {
      newErr.email = "valid email required";
    }
    setErrData(newErr);
    console.log(formData);
  };
  return (
    <div className="">
      <form
        action=""
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
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
        <input type="text" name="message" placeholder="message"/>

        <input type="submit" value={"Submit"} />
      </form>
    </div>
  );
}

export default Contact;
