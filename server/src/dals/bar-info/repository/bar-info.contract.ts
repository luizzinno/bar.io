import { BarInfo } from 'dals';

export interface BarInfoRepositoryContract {
    getBarInfo: () => Promise<BarInfo>,
    getBarInfoById: (id: string) => Promise<BarInfo>,
    getBarInfoByInfoA: (info1: string) => Promise<BarInfo>,
    getBarInfoList: () => Promise<BarInfo[]>,
    saveBarInfo: (info: BarInfo) => Promise<void>,
}
