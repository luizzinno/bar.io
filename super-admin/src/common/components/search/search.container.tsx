import { Restaurant } from 'pods/restaurant-list/restaurant.vm';
import React from 'react';

//Api
import { getRestaurantList } from './search.api';

//Componente
import { SearchComponent } from './search.component';

interface Props {
  name: string;
  onSearch: (membersList: Restaurant[], nameFilter) => void;
}

export const SearchContainer: React.FC<Props> = (props) => {
  //Props
  const { name, onSearch } = props;

  //Cargamos nada mas instanciar el componente la lista
  React.useEffect(() => {
    handleSearch(name);
  }, []);

  //Llamada al api para devolver la lista de miembros
  const handleSearch = (nameFilter: string) => {
    getRestaurantList(nameFilter)
      .then((result) => {
        onSearch(result, nameFilter);
      })
      .catch(() => {
        onSearch([], nameFilter);
      });
  };

  return (
    <>
      <SearchComponent onSearch={handleSearch} name={name} />
    </>
  );
};
