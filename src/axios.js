import axios from "axios";

//use for get & post request
const instance = axios.create({
    //API aka cloud function - Backened server cloud function emulator for testing.
    baseURL: 'http://localhost:5001/fir-e3a3a/us-central1/api'
})

export default instance;    