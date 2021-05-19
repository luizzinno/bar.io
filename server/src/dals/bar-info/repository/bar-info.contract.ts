import { BarInfo } from 'dals';

export interface BarInfoRepositoryContract {
    getBarInfo: () => Promise<BarInfo>,
    saveBarInfo: (info: BarInfo) => Promise<void>,
}
