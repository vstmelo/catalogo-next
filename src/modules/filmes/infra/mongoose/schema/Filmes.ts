import mongoose from 'mongoose';
import { IFilmeDTO } from '../../dto/filmes-dto';

const schema = new mongoose.Schema<IFilmeDTO>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  producer: { type: String, required: true },
  id: { type: String, required: true },
  movie_banner: { type: String, required: true },
  director: { type: String, required: true },
});

const Filmes = mongoose.models.Filmes|| mongoose.model<IFilmeDTO>('Filmes', schema);


export default Filmes;