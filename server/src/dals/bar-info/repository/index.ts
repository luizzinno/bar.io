import { envConstants } from 'core';
import * as mockRepository from './bar-info.mock';
import * as repository from './bar-info.repository';
import { BarInfoRepositoryContract } from './bar-info.contract';

export const barInfoRepository: BarInfoRepositoryContract = envConstants.isMockRepository
  ? mockRepository
  : repository;