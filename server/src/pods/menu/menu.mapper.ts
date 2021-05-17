import { BarInfo, MenuCategory, ProductPortionType, Product, Portion } from "dals";
import { Category, Menu, RestaurantInfo, MenuProduct, ProductPortion } from "./menu.model";

export const mapMenuFromModelToApiModel = (barInfo: BarInfo, menuCategories: MenuCategory[], portionTypes: ProductPortionType[]): Menu => ({
    restaurantInfo: mapRestaurantInfoFromModelToApiModel(barInfo),
    categories: mapMenuCategoriesFromModelToApiModel(menuCategories, portionTypes)
});

const mapRestaurantInfoFromModelToApiModel = (barInfo: BarInfo): RestaurantInfo => ({
    infoA: barInfo?.infoA ?? '',
    infoB: barInfo?.infoB ?? '',
    infoC: barInfo?.infoC ?? '',
});

const mapMenuCategoriesFromModelToApiModel = (menuCategories: MenuCategory[], portionTypes: ProductPortionType[]): Category[] => menuCategories ? menuCategories.map(mc => mapMenuCategoryFromModelToApiModel(mc, portionTypes)) : []

const mapMenuCategoryFromModelToApiModel = (menuCategory: MenuCategory, portionTypes: ProductPortionType[]): Category => ({
    name: menuCategory?.name ?? '',
    products: menuCategory?.products ? mapProductsFromModelToApiModel(menuCategory.products, portionTypes) : [],
});

const mapProductsFromModelToApiModel = (products: Product[], portionTypes: ProductPortionType[]): MenuProduct[] =>
    products ? products.filter(pr => pr.visible).map(p => mapProductFromModelToApiModel(p, portionTypes)) : [];

const mapProductFromModelToApiModel = (product: Product, portionTypes: ProductPortionType[]): MenuProduct => ({
    name: product?.name ?? '',
    description: product?.description ?? '',
    portions: product?.portions ? mapPortionsFromModelToApiModel(product.portions, portionTypes.find(t => t._id === product.portionTypeId)) : []
});

const mapPortionsFromModelToApiModel = (portions: Portion[], portionType: ProductPortionType): ProductPortion[] =>
    portions ? portions.map(p => ({
        name: portionType?.portions ? portionType.portions.find(tp => tp._id === p._id)?.name ?? '' : '',
        price: p?.price ?? 0,
    })) : []
