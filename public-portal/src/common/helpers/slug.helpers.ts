export const formatSlugFromUrlParam = (param: string): string =>
  Boolean(param) ? `/${param}` : '';
