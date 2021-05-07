import { menuCategoryRepository, productPortionTypeRepository, barInfoRepository, Menu } from "dals"
import { buildMenu } from "../menu.builder";


export const getMenu = async (): Promise<Menu> => {
    const portionTypes = await productPortionTypeRepository.getProductPortionTypes();
    const menuCategories = await menuCategoryRepository.getMenuCategories();
    const restaurantInfo = await barInfoRepository.getBarInfo();
    return buildMenu(restaurantInfo, menuCategories, portionTypes);
}