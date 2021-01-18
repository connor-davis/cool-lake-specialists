import axios from "axios";

export let sendEmail = async ({ subject, from, user_name, message }) => {
    let response = await axios.post("https://powerful-dawn-57349.herokuapp.com/mail", { subject, from, to: "19422@kloofhigh.co.za", user_name, message }, {});
    
    return response.status;
}