import { getAllData, getAllElixirNames, getEffectElixirById, getElixirsByDifficulty, getElixirsIngredientsById } from "./model/elixirModel";



const main = async () => {
    const request = process.argv[2].toLowerCase();
    const data = process.argv[3];
    // console.log(request)
    try {

        switch (request) {
            case "data":
                const allData = await getAllData();
                console.log(allData);
                break
            case "names":
                const elixirNames = await getAllElixirNames();
                console.log(elixirNames)
                break
            case "effect":
                const elixirEffect = await getEffectElixirById(data);
                console.log(elixirEffect);
                break;
            case "difficulty":
                const elixirByDifficulty = await getElixirsByDifficulty(data) 
                console.log(elixirByDifficulty);
                break
            case "ingredients":
                const elixirIngredients = await getElixirsIngredientsById(data) 
                console.log(elixirIngredients);
                break      
            default: console.log("parametros incorrectos")
        }


    } catch (error: any) {
        return error
    }

    
    
}

main();