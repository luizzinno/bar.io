import { execPath } from "process";
import * as restaurantApi from "./api/api.model";
import {
  mapDatefromApiToModel,
  mapFromRestaurantApiToRestaurantVm,
} from "./restaurant.mapper";
import * as restaurantVm from "./restaurant.vm";
import { emptyRestaurantInfo } from "./restaurant.vm";

describe("restaurant.mapper", () => {
  describe("mapFromRestaurantApiToRestaurantVm", () => {
    it("should return emptyRestaurantInfo when it feeds restaurant equals to undefined", () => {
      // Arrange
      const restaurant: restaurantApi.RestaurantApi = undefined;
      // Act
      const result: restaurantVm.RestaurantInfo =
        mapFromRestaurantApiToRestaurantVm(restaurant);
      // Assert
      expect(result).toEqual(emptyRestaurantInfo());
    });
    it("should return emptyRestaurantInfo when it feeds restaurant equals to null", () => {
      // Arrange
      const restaurant: restaurantApi.RestaurantApi = null;
      // Act
      const result: restaurantVm.RestaurantInfo =
        mapFromRestaurantApiToRestaurantVm(restaurant);
      // Assert
      expect(result).toEqual(emptyRestaurantInfo());
    });
    it("should return mepped restaurant when it feeds a restaurant to map", () => {
      // Arrange
      const restaurant: restaurantApi.RestaurantApi = {
        _id: "test-id",
        name: "test-name",
        urlName: "test-urlName",
        phone: "test-phone",
        address: "test-address",
        locationUrl: "test-locationUrl",
        menuDate: "2022-02-14T00:00:00.000Z",
        communitySourceUrl: "test-communitySourceUrl",
        official: false,
        description: "test-description",
        theme: "default",
        menu: [
          {
            categoryName: "test-categoryName",
            items: [
              {
                name: "test-name",
                price: 2,
              },
            ],
          },
        ],
      };
      // Act
      const result: restaurantVm.RestaurantInfo =
        mapFromRestaurantApiToRestaurantVm(restaurant);
      // Assert
      expect(result).toEqual({
        name: "test-name",
        urlName: "test-urlName",
        phone: "test-phone",
        address: "test-address",
        locationUrl: "test-locationUrl",
        menuDate: "Actualizada el 14 de febrero de 2022",
        communitySourceUrl: "test-communitySourceUrl",
        official: false,
        description: "test-description",
        theme: "default",
        menu: [
          {
            name: "test-categoryName",
            items: [
              {
                name: "test-name",
                description: undefined,
                price: 2,
                priceByRation: null,
                unit: null,
              },
            ],
          },
        ],
      });
    });
  });
  describe("mapDatefromApiToModel", () => {
    it("should return a non mapped date when it feeds a date equals to undefined", () => {
      // Arrange
      const date: string = undefined;
      // Act
      const result: string = mapDatefromApiToModel(date);
      // Assert
      expect(result).toEqual("Actualizada el NaN de Invalid Date de NaN");
    });
    it("should return a mapped date when it feeds a date equals to null", () => {
      // Arrange
      const date: string = null;
      // Act
      const result: string = mapDatefromApiToModel(date);
      // Assert
      expect(result).toEqual("Actualizada el 1 de enero de 1970");
    });
    it("should return a mapped date when it feeds a date with an item", () => {
      // Arrange
      const date: string = "2022-02-14T00:00:00.000Z";
      // Act
      const result: string = mapDatefromApiToModel(date);
      // Assert
      expect(result).toEqual("Actualizada el 14 de febrero de 2022");
    });
  });
});
