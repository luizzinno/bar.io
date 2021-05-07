export interface Menu {
    restaurantInfo: RestaurantInfo;
    categories: Category[];
}

export interface Category {
    name: string;
    products: Product[];
}

export interface Product {
    name: string;
    description: string;
    portions: Portion[];
}

export interface Portion {
    name: string;
    price: number;
}

export interface RestaurantInfo {
    infoA: string;
    infoB: string;
    infoC: string;
}