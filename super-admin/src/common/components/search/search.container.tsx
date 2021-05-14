import React from 'react';

//Componente
import { SearchComponent } from './search.component';

interface Props {
  filter: string;
  onSearch: (nameFilter: string) => void;
}

export const SearchContainer: React.FC<Props> = (props) => {
  //Props
  const { filter, onSearch } = props;

  return (
    <>
      <SearchComponent onSearch={onSearch} filter={filter} />
    </>
  );
};
