export interface Menu {
    restaurantInfo: RestaurantInfo;
    categories: Category[];
}

export interface Category {
    name: string;
    products: MenuProduct[];
}

export interface MenuProduct {
    name: string;
    description: string;
    portions: ProductPortion[];
}

export interface ProductPortion {
    name: string;
    price: number;
}

export interface RestaurantInfo {
    infoA: string;
    infoB: string;
    infoC: string;
}
