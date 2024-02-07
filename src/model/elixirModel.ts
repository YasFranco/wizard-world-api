import dotenv from "dotenv"
dotenv.config();

const apiUrl = process.env.URL_API!;
const api = new URL(apiUrl);

const getAllData = async () => {
    try {
        const response = await fetch(api);

        if (response.status === 404) {
            throw new Error("requested API was not found");
        }

        const data = await response.json();
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

getAllData();