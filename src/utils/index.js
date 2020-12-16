export const desktop = 1366;
export const largeTablet = 1024;

export const isDesktop = window.innerWidth >= desktop;

export const formatPrice = (value) => value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
