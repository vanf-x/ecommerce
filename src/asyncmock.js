const products = [
  {
    id: "1",
    name: "Mancuernas",
    price: 4999,
    category: "gimnasio",
    stock: 10,
    description: "Mancuernas 5kg.",
    img: "../src/assets/productos/1mancuernas.png"
  },
  {
    id: "2",
    name: "Barra dominadas",
    price: 9999,
    category: "gimnasio",
    stock: 5,
    description: "Barra dominadas / calistenia.",
    img: "../src/assets/productos/2barradominadas.PNG"

  },
  {
    id: "3",
    name: "Banco plano",
    price: 8999,
    category: "gimnasio",
    stock: 5,
    description: "Banco plano no reclinable. No incluye barra ni discos.",
    img: "../src/assets/productos/3pressplano.PNG"
},
  {
    id: "4",
    name: "Bicileta fija",
    price: 23999,
    category: "gimnasio",
    stock: 5,
    description: "Bicicleta fija ideal spinning. Soporta hasta 110kg.",
    img: "../src/assets/productos/4bicicletafija.PNG"
},
  {
    id: "5",
    name: "Buzo Universal",
    price: 3999,
    category: "indumentaria",
    stock: 20,
    description: "Buzo friza Universal. Talles del S al XL.",
    img: "../src/assets/productos/5buzouniversal.PNG"
},
  {
    id: "6",
    name: "Remera pesca",
    price: 4899,
    category: "indumentaria",
    stock: 20,
    description: "Remera ideal pesca. Secado rápido. Filtro UV.",
    img: "../src/assets/productos/6remerapesca.PNG"
},
  {
    id: "7",
    name: "Pantalón chupin UFC",
    price: 3599,
    category: "indumentaria",
    stock: 30,
    description: "Pantalón chupín UFC. Talles del S al XL.",
    img: "../src/assets/productos/7pantalonmma.PNG"
},
  {
    id: "8",
    name: "Gorro UFC",
    price: 299,
    category: "indumentaria",
    stock: 25,
    description: "Gorro UFC talle único. Color negro.",
    img: "../src/assets/productos/8gorroufc.PNG"
},
  {
    id: "9",
    name: "Combo cuello + gorra",
    price: 2499,
    category: "outdoor",
    stock: 20,
    description: "Combo cuello + gorra ideal pesca / outdoor.",
    img: "../src/assets/productos/9combo.PNG"
},
  {
    id: "10",
    name: "Acha de mano ",
    price: 1299,
    category: "outdoor",
    stock: 5,
    description: "Acha de mano ideal camping.",
    img: "../src/assets/productos/10acha.PNG"
},
  {
    id: "11",
    name: "Caña de pescar",
    price: 4999,
    category: "outdoor",
    stock: 5,
    description: "Caña de pescar nueva.",
    img: "../src/assets/productos/11caña.PNG"
},
  {
    id: "12",
    name: "Carpa iglú",
    price: 3999,
    category: "outdoor",
    stock: 10,
    description: "Carpa tipo iglú para 2 o 3 personas.",
    img: "../src/assets/productos/12carpa.PNG"
},
  {
    id: "13",
    name: "Protector bucal",
    price: 399,
    category: "deportes de contacto",
    stock: 50,
    description: "Protector bucal neutro profesional.",
    img: "../src/assets/productos/13bucal.PNG"
},
  {
    id: "14",
    name: "Guantes",
    price: 8999,
    category: "deportes de contacto",
    stock: 10,
    description: "Guantes de boxeo / kick boxing Venum 14 oz.",
    img: "../src/assets/productos/14guantesbox.PNG"
},
  {
    id: "15",
    name: "Bolsa",
    price: 5499,
    category: "deportes de contacto",
    stock: 5,
    description: "Bolsa boxeo envíos en el día.",
    img: "../src/assets/productos/15bolsa.PNG"
},
  {
    id: "16",
    name: "Vendas",
    price: 649,
    category: "deportes de contacto",
    stock: 20,
    description: "Vendas boxeo / kick boxing marca Project 3,5 m.",
    img: "../src/assets/productos/16vendas.PNG"
},
];

export const getProducts = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(products);
    }, 100);
  });
};
