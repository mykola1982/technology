const products = [
  { id: "1", name: "Підсилювач", number: "600.000.054.50-01" },
  { id: "2", name: "Кронштейн", number: "600.000.054.51" },
  { id: "3", name: "Кронштейн термостата", number: "600.000.054.52" },
  { id: "4", name: "Фіксатор торсіона", number: "600.000.054.53" },
  { id: "5", name: "Кронштейн", number: "600.000.054.54" },
  { id: "6", name: "Кутник", number: "600.000.054.55" },
  { id: "7", name: "Направляюча платформи", number: "600.000.054.56" },
  { id: "8", name: "Направляюча платформи", number: "600.000.054.56-01" },
  { id: "9", name: "Направляюча платформи", number: "600.000.054.56-02" },
  { id: "10", name: "Направляюча платформи", number: "600.000.054.56-03" },
  { id: "11", name: "Пластина агрегата", number: "600.000.054.60" },
  { id: "12", name: "Облицювання нижнє", number: "300.000.054.61" },
  { id: "13", name: "Основа лайт-бокса", number: "321.000.054.62" },
  { id: "14", name: "Підсилювач верхнбої вставки", number: "600.000.054.63" },
  { id: "15", name: "Заглушка", number: "000.000.054.64" },
  { id: "16", name: "Облицювання", number: "600.000.054.65" },
  { id: "17", name: "Підсилювач", number: "600.000.054.66" },
  { id: "18", name: "Підсилювач", number: "600.000.054.67" },
  { id: "19", name: "Стійка полиці", number: "600.000.054.58" },
  { id: "20", name: "Кронштейн полиці", number: "600.000.054.59" },
];

export const getProducts = () => {
  return products;
};

export const getProductById = (productId) => {
  return products.find((product) => product.id === productId);
};
