import axios from "axios";

const BASE_URL =
	"https://www.dropbox.com/s/kvpk86huvhw7d5c/chatter-api-main.zip?dl=0";

const API = axios.create({
	baseURL: BASE_URL,
});

export default API;
