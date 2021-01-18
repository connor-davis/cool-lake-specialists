import axios from "axios";

export let sendEmail = async ({ subject, from, user_name, message }) => {
    let response = await axios.post("https://powerful-dawn-57349.herokuapp.com/mail", { subject, from, to: "contact@coollake.co.za", user_name, message, smtp: { host: "mail.coollake.co.za", port: 25 } }, {});
    return response.status;
}