import { database } from "./database.js";
import { corteRepository  } from "./corterepository.js";

const modelos = new corteRepository(database);

export async function getAllcortes(request, response) {
  const result = await modelos.getAllcortes();

  response.json(result);
}


export async function insertcortes(request, response){
  const data = request.body

  const result = await modelos.insertcortes(data)

if(request == null)
  return response.status(500).json("algo errado não está certo!")

  response.status(200).json("inserção feita com sucesso")
}

