export interface Routes {
  root: string;
  bar: (slug: string) => string;
}

export const routes: Routes = {
  root: '/',
  bar: (slug: string) => `/bar${slug}`,
};
