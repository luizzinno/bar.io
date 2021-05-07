import { Menu } from "dals";

export interface MenuRepositoryContract {
    getMenu(): Promise<Menu>;
}