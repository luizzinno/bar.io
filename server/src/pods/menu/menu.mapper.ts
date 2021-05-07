import * as apiModel from 'dals/menu/menu.model';
import * as model from './menu.model'

export const mapFromMenuApiModelToModel = (menu: apiModel.Menu): model.Menu => ({
    restaurantInfo: mapFromRestaurantInfoApiModelToModel(menu.restaurantInfo),
    categories: mapFromCategoryApiModelListToModelList(menu.categories),
});

const mapFromRestaurantInfoApiModelToModel = (restaurantInfo: apiModel.RestaurantInfo): model.RestaurantInfo => ({ ...restaurantInfo })

const mapFromCategoryApiModelListToModelList = (categories: apiModel.Category[]): model.Category[] =>
    categories.map(c => mapFromCategoryApiModelToModel(c));

const mapFromCategoryApiModelToModel = (category: apiModel.Category): model.Category => ({
    name: category.name,
    products: mapFromProductApiModelListToModelList(category.products),
});

const mapFromProductApiModelListToModelList = (products: apiModel.Product[]): model.MenuProduct[] =>
    products.map(p => ({
        name: p.name,
        description: p.description,
        portions: mapFromPortionApiModelListToModelList(p.portions),
    }));

const mapFromPortionApiModelListToModelList = (portions: apiModel.Portion[]): model.ProductPortion[] =>
    portions.map(p => mapFromPortionApiModelToModel(p));

const mapFromPortionApiModelToModel = (portion: apiModel.Portion): model.ProductPortion => ({
    name: portion.name,
    price: portion.price,
});