import { GraphQLResolver } from "common/models";
import { barInfoRepository, menuCategoryRepository, productPortionTypeRepository } from "dals";
import { mapMenuFromModelToApi } from "./menu.mapper";
import { Menu } from "./menu.model";

interface MenuResolver {
    Query: {
        getMenu: GraphQLResolver<Menu>;
    }
}

export const menuResolver: MenuResolver = {
    Query: {
        getMenu: async (parent, { }, context): Promise<Menu> => {
            const portionTypes = await productPortionTypeRepository.getProductPortionTypes();
            const menuCategories = await menuCategoryRepository.getMenuCategories();
            const restaurantInfo = await barInfoRepository.getBarInfo();
            return mapMenuFromModelToApi(restaurantInfo, menuCategories, portionTypes);
        }
    }
}