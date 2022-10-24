import nc from 'next-connect';
import onError from '@shared/middlewares/onError';
import { FilmesLocaisController } from 'modules/filmes/controllers/get-filmes';

const handler = nc({ onError });

const getFilmes = new FilmesLocaisController();

handler.get(getFilmes.getSearch);

export default handler; 