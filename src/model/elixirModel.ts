import { Elixir } from "../interfaces/interface";
import dotenv from "dotenv"
dotenv.config();

const apiUrl = process.env.URL_API!;
const api = new URL(apiUrl);

const getAllData = async (): Promise<Elixir[] | Error> => {
    try {
        const response = await fetch(api);

        if (!response.ok) {
            throw new Error("requested API was not found");
        }

        const data = await response.json();
        return data
    } catch (error: any) {
        return error
    }
}

const getAllElixirNames = async ():Promise<string[] | Error > => {

    try {
        const data = await getAllData();

        if (data instanceof Error) {
            throw new Error("requested API was not found")
        }

        const elixirNames = data.map((elixir) => elixir.name )
        return elixirNames
    } catch (error: any) {
        return error
    }
}

const getEffectElixirById = async (id: string):Promise<string | Error> => {
    try {
        const data = await getAllData();

        if(data instanceof Error){
            throw new Error("requested API was not found");
        };

        const foundElixir = data.find((elixir) => elixir.id === id);

        if (!foundElixir) {
            throw new Error ("ID not found");
        }else{
            return `The effect of the elixir is: ${foundElixir.effect}`;
        }
    } catch (error: any) {
        return error;
    }

}

const getElixirsByDifficulty = async (difficulty: string):Promise<Elixir[] | Error> => {
    try {
        const data = await getAllData();

        if(data instanceof Error){
            throw new Error("requested API was not found");
        }
        
        const difficultyLowerCase = difficulty.toLowerCase();

        const searchbydifficulty = data.filter((elixir) => elixir.difficulty.toLowerCase() === difficultyLowerCase);
        
        if(searchbydifficulty.length === 0){
            throw new Error ("the required difficulty does not exist")
        }else{
            return searchbydifficulty
            // aca va a retornar los objetos que tengan la dificultad solicitada 
        }


    } catch (error:any) {
        return(error)
    }
}

const getElixirsIngredientsById = async (id: string):Promise< string[] | Error >=> {
    try{
        const data = await getAllData();

        if(data instanceof Error){
            throw new Error("Requested API was not found")
        }

        const elixirIngredients = data.find((elixir:any) => elixir.id === id);
        //aca va a devolver un array del elixir 

        if(!elixirIngredients){
            throw new Error ("Ingredients not found, incorrect ID");
        } 
        // aca controlo el error de no encontrar el elixir con ese id 

        const arrayIngredients = elixirIngredients.ingredients;
        // console.log(arrayIngredients)
        // aca guardo en una variable el array de ingredientes

        if(arrayIngredients.length === 0){
            throw new Error("The requested elixir has no ingredients");
            // aca controlo el error en el caso de que el array este vacio 
        } else{
            const newArrayIngredients = arrayIngredients.map((ingredient:any) => ingredient.name)
            return newArrayIngredients;
        }

    }catch(error:any){
        return error
    }
}

export { getAllData, getAllElixirNames, getEffectElixirById, getElixirsByDifficulty, getElixirsIngredientsById }