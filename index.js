import express from "express";
import { getAllcortes,  insertcortes} from "./controller.js";
import cors from "cors";

const server = express();
const PORT = 8080;
server.use(cors()); 
server.use(express.json());

server.use(express.json())
//Rotas ou Endpoints
server.get("/cortes/all", getAllcortes);
server.post("/cortes/add", insertcortes)


server.listen(PORT, () => console.log("SERVER ON!"));
