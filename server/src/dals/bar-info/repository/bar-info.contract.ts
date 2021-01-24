import { BarInfo } from 'dals';

export interface BarInfoRepositoryContract {
    getBarInfoById: (id: string) => Promise<BarInfo>,
    saveBarInfo: (info: BarInfo) => Promise<BarInfo>,
}
