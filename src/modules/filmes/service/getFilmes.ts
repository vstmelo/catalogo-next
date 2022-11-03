import Filmes from "../infra/mongoose/schema/Filmes";
export class GetFilmesService {

  async getFilmesLocais(pagina: string): Promise<any> {

    const filmes = await (await Filmes.find().limit(10).skip(parseInt(pagina) * 10));
    return filmes;
  }
}