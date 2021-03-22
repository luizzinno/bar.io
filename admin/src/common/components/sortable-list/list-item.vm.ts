export interface ListItem {
  id: string;
  value: string;
  visible?: boolean;
}

export const createEmptyListItem = (): ListItem => ({
  id: '',
  value: '',
});