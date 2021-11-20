export interface Routes {
  root: string;
  restaurant: (slug: string) => string;
}

export const routes: Routes = {
  root: "/",
  restaurant: (slug: string) => `/restaurant/${slug}`,
};
