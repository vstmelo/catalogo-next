import { AppError } from "@shared/infra/errors/AppError";
import { GetFilmesService } from "modules/filmes/service/getFilmes";
import { Search } from "modules/filmes/service/search-filmes";
import { NextApiRequest, NextApiResponse } from 'next';

const service = new GetFilmesService();
const search = new Search()

export class FilmesLocaisController {

    async getFilmes(req: NextApiRequest, res: NextApiResponse){

        const {paginaAtual} = req.query;

        if (!paginaAtual) {
             throw new AppError('Pagina não informada', 400)
        }
        const filmesLocais = await service.getFilmesLocais(paginaAtual as string);
        res.json(filmesLocais);
    };

    async getSearch(req: NextApiRequest, res: NextApiResponse){
        const data = req.body;
        const getSearch = await search.search(data);
        res.json(getSearch);
    };
}