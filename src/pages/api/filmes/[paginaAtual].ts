import nc from 'next-connect';
import onError from '@shared/infra/mongoose/middlewares/onError';
import { FilmesLocaisController } from 'modules/filmes/controllers/get-filmes';

const handler = nc({ onError });

const getFilmes = new FilmesLocaisController();

handler.get(getFilmes.getFilmes);

export default handler;