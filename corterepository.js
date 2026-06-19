export class corteRepository {
  constructor(database) {
    this.database = database;
  }

  async getAllcortes() {
  
  const sql = "SELECT id, modelo, valor, descricao, imagem FROM cortes ORDER BY id ASC;";
  const result = await this.database.query(sql);
  return result.rows;
}


  async insertcortes(data){
    try{
const sql = "insert into cortes(modelo, valor, descricao, imagem) values($1, $2, $3, $4)"
const result = await this.database.query(sql, [
  data.modelo,
  data.valor,
  data.descricao,
  data.imagem
])

return result.rows;

    }catch(error){
        console.log(error);
    throw error;
    }
  }
}
