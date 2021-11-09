import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Store } from '../entity/Store';


export async function save(request: Request, response: Response) {
  const storeRepository = getRepository(Store);

  const saveStore = await storeRepository.save(request.body);

  return response.status(201).json(saveStore);
}

export async function getAll(request: Request, response: Response) {
  const storeRepository = getRepository(Store);

  const allStores = await storeRepository.find();

  return response.json(allStores);
}
