import dotenv from "dotenv"
dotenv.config();

const apiUrl = process.env.URL_API!;
const api = new URL(apiUrl);

const getAllData = async () => {
    const response = await fetch(api);
    const data = await response.json();
    console.log(data)
}

getAllData();