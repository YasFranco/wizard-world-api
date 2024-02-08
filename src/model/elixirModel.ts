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
        return data
    } catch (error) {
        return error
    }
}

const getAllElixirNames = async () => {

    try {
        const data = await getAllData();

        if (data instanceof Error) {
            throw data
        }

        const elixirNames = data.map((elixir: any) => { return { name: elixir.name } })
        return elixirNames
    } catch (error) {
        return error
    }
}

const getEffectElixirById = async (id: string) => {
    try {
        const data = await getAllData()

        const foundElixir = data.find((elixir: any) => elixir.id === id)

        if (!foundElixir) {
            throw new Error ("ID not found");
        }else{
            return `The effect of the elixir is: ${foundElixir.effect}`;
        }
    } catch (error) {
        return error 
    }

}



const main = async () => {
    const allData = await getAllData();
    const elixirNames = await getAllElixirNames();
    const elixirEffect = await getEffectElixirById("0106fb32-b00d-4d70-9841-4b7c2d2cca71")

    console.log(elixirEffect)
}

main();