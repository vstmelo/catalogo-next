import { url } from '@shared/infra/mongoose/connection';
import { MongoClient } from 'mongodb';

function getCollection(colectionName: string) {

  return new MongoClient(url).db('payment').collection('filmes');

}

export default getCollection;