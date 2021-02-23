import { envConstants } from 'core';
import * as mockRepository from './product-portion.mock';
import * as repository from './product-portion.repository';
import { ProductPortionTypeRepositoryContract } from './product-portion.contract';

export const productPortionTypeRepository: ProductPortionTypeRepositoryContract = envConstants.isMockRepository
  ? mockRepository
  : repository;