export const desktop = 1366;
export const largeTablet = 1024;

export const isDesktop = window.innerWidth >= desktop;

export const formatPrice = (value) => value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

export const testDate = (value) => /^(0?[1-9]|1[012])[/-]([1-9][0-9])/.test(value);

export const post = (url, data) => new Promise((resolve) => {
  setTimeout(() => {
    resolve({
      status: 200,
      data,
    });
  }, 2000);
});
