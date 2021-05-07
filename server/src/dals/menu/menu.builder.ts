import { BarInfo, Menu, MenuCategory } from "dals";
import { ProductPortionType } from "dals/product-portion";

export const buildMenu = (restaurantInfo: BarInfo, menuCategories: MenuCategory[], portionTypes: ProductPortionType[]): Menu => ({
    restaurantInfo: {
        infoA: restaurantInfo.infoA,
        infoB: restaurantInfo.infoB ?? '',
        infoC: restaurantInfo.infoC ?? '',
    },
    categories: menuCategories.map(mc => ({
        name: mc.name,
        products: mc.products.filter(pr => pr.visible).map(pr => ({
            name: pr.name,
            description: pr?.description ?? '',
            portions: pr.portions.map(p => ({
                name: portionTypes.find(t => t._id.toString() === pr.portionTypeId.toString()
                )?.portions.find(po => po._id.toString() === p._id.toString())?.name,
                price: p.price,
            }))
        }))
    }))
});