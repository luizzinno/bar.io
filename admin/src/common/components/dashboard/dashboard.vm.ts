export interface DashboardItemProps {
  title: string;
  linkTo: string;
  icon?: React.ComponentType<{ className: string }>;
  image?: string;
  subtitle?: string;
}

export interface ClassNameProps {
  root?: string;
  items?: string;
  item?: ClassesProps;
}
