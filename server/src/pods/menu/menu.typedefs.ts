import { gql } from 'apollo-server-express';

export const menuTypeDefs = gql`
    type Menu {
        restaurantInfo: RestaurantInfo!
        categories: [Category]!
    }  

    type RestaurantInfo {
        infoA: String
        infoB: String
        infoC: String
    }

    type Category {
        name: String
        products: [MenuProduct]!
    } 

    type MenuProduct {
        name: String
        description: String
        portions: [MenuPortion]!
    }   

    type MenuPortion {
        name: String
        price: Float
    }

    extend type Query {
        getMenu: Menu
    }
`;