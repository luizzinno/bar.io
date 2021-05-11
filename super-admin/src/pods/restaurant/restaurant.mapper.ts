import * as apiModel from './api/restaurant.api-model';
import * as viewModel from './restaurant-info.vm';

export const mapRestaurantInfoFromApiToViewModel = (
  restaurant: apiModel.RestaurantInfo,
): viewModel.RestaurantInfo =>
  !!restaurant ? { ...restaurant } : viewModel.createEmptyRestaurantInfo();

export const mapRestaurantInfoFromViewModelToApi = (
  restaurant: viewModel.RestaurantInfo,
): apiModel.RestaurantInfo =>
  ({ ...restaurant });
