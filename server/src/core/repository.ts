import { produce } from 'immer';

export interface IEntity {
  id: any;
}

export interface IArrayRepository<IEntity> {
  getCollection: () => IEntity[];
  saveItem: (item: IEntity) => IEntity;
  getItemById: (id: any) => IEntity;
  getItemByPropValue: (propName: string, value: any) => IEntity;
  setItems: (items: IEntity[]) => IEntity[];
  deleteItem: (id: any) => IEntity[];
}

export function createArrayRepository<T extends IEntity>(
  idGenerator: () => any,
  initialCollection?: Array<T>
): IArrayRepository<T> {
  if (!!!idGenerator) throw 'An id generator must be provided';
  let collection = !!initialCollection ? [...initialCollection] : new Array();
  const getCollection = (): T[] => [...collection];

  const getItemById = (id: any): T => {
    if (!!!id) throw 'id cannot be empty';
    const item = collection.find((i) => i.id == id);
    return !!item ? { ...item } : null;
  };

  const getItemByPropValue = (propName: string, value: any) =>
    collection.find((o) => o[propName] == value);

  const saveItem = (item: T): T => {
    if (!!!item) throw 'item cannot be null or undefined';
    if (!!item.id && !!getItemById(item.id)) {
      collection = produce(collection, (newCollection) => {
        const index = newCollection.findIndex((c) => c.id === item.id);
        newCollection.splice(index, 1, { ...item });
      });
    } else {
      collection = produce(collection, (newCollection) => {
        item.id = idGenerator();
        newCollection.push({ ...item });
      });
    }

    return getItemById(item.id);
  };

  const setItems = (items: T[]): T[] => {
    if (!!!items) items = [];
    collection = produce(
      collection,
      (newCollection) => (newCollection = [...items])
    );
    return collection;
  };

  const deleteItem = (id: any): T[] => {
    if (!!!id) throw 'id cannot be empty';
    collection = produce(collection, (newCollection) => {
      newCollection.splice(
        newCollection.indexOf((i) => i.id == id),
        1
      );
      return newCollection;
    });
    return collection;
  };

  return {
    getCollection,
    getItemById,
    getItemByPropValue,
    saveItem,
    setItems,
    deleteItem,
  };
}
