const axios = require("axios");

const key = "your API key here";
const baseUrl = "https://api.yuuvis.io";
const objectId = "your Object ID here";

axios.get(
    baseUrl + "/dms-core/schema/native", {
        headers: {
            "Ocp-Apim-Subscription-Key": key
        }
    }).then(response => {
    console.log(response);
    }).catch(error => console.log(error));
