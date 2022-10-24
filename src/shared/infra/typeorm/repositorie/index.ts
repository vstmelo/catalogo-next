import { AppDataSource } from "@shared/connection";
import { Filmes } from "../model/Filmes";

export const filmeRepository = AppDataSource.getRepository(Filmes);