import axios from "axios";

export let sendEmail = async ({ subject, from, user_name, message }) => {
  let response = await axios.post("https://powerful-dawn-57349.herokuapp.com/mail", { subject, from, to: "connor.dvs03@gmail.com", user_name, message}, {});
  // let response = await axios.post("http://localhost:8080/mail", { subject, from, to: "connor.dvs03@gmail.com", user_name, message}, {});

  return response.status;
};