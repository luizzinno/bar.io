import { GraphQLResolver } from "common/models";
import { menuRepository } from "dals";
import { Menu } from "./menu.model";


interface MenuResolver {
    Query: {
        getMenu: GraphQLResolver<Menu>;
    }
}

export const menuResolver: MenuResolver = {
    Query: {
        getMenu: async (parent, { }, context): Promise<Menu> => await menuRepository.getMenu()
    }
}