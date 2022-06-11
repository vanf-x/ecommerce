const products = [
  {
    id: "1",
    name: "Mancuernas a pedido",
    price: 499,
    category: "gimnasio",
    stock: 100,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam",
    img: "../src/assets/productos/1mancuernas.png",
  },
  {
    id: "2",
    name: "Barra dominadas exterior",
    price: 9999,
    category: "gimnasio",
    stock: 5,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam",
    img: "../src/assets/productos/2barradominadas.PNG",
  },
  {
    id: "3",
    name: "Banco plano",
    price: 8999,
    category: "gimnasio",
    stock: 5,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam",
    img: "../src/assets/productos/3pressplano.PNG",
  },
  {
    id: "4",
    name: "Bicileta fija spinning",
    price: 23999,
    category: "gimnasio",
    stock: 5,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam",
    img: "../src/assets/productos/4bicicletafija.PNG",
  },
  {
    id: "5",
    name: "Buzo Universal importado",
    price: 3999,
    category: "indumentaria",
    stock: 20,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam",
    img: "../src/assets/productos/5buzouniversal.PNG",
  },
  {
    id: "6",
    name: "Remera pesca filtro UV",
    price: 4899,
    category: "indumentaria",
    stock: 20,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam",
    img: "../src/assets/productos/6remerapesca.PNG",
  },
  {
    id: "7",
    name: "Pantalón chupin UFC",
    price: 3599,
    category: "indumentaria",
    stock: 30,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam",
    img: "../src/assets/productos/7pantalonmma.PNG",
  },
  {
    id: "8",
    name: "Gorro UFC",
    price: 299,
    category: "indumentaria",
    stock: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam",
    img: "../src/assets/productos/8gorroufc.PNG",
  },
  {
    id: "9",
    name: "Combo cuello + gorra",
    price: 2499,
    category: "outdoor",
    stock: 20,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam",
    img: "../src/assets/productos/9combo.PNG",
  },
  {
    id: "10",
    name: "Acha de mano camping",
    price: 1299,
    category: "outdoor",
    stock: 5,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam",
    img: "../src/assets/productos/10acha.PNG",
  },
  {
    id: "11",
    name: "Caña de pescar profesional",
    price: 4999,
    category: "outdoor",
    stock: 5,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam",
    img: "../src/assets/productos/11caña.PNG",
  },
  {
    id: "12",
    name: "Carpa iglú 2/3 personas",
    price: 3999,
    category: "outdoor",
    stock: 10,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam",
    img: "../src/assets/productos/12carpa.PNG",
  },
  {
    id: "13",
    name: "Protector bucal profesional ideal box kick mma",
    price: 399,
    category: "deportes-de-contacto",
    stock: 50,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam",
    img: "../src/assets/productos/13bucal.PNG",
  },
  {
    id: "14",
    name: "Guantes de box kick marca venum",
    price: 8999,
    category: "deportes-de-contacto",
    stock: 10,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam",
    img: "../src/assets/productos/14guantesbox.PNG",
  },
  {
    id: "15",
    name: "Bolsa de box kick mma",
    price: 5499,
    category: "deportes-de-contacto",
    stock: 5,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam",
    img: "../src/assets/productos/15bolsa.PNG",
  },
  {
    id: "16",
    name: "Vendas 3,5 metros box kick mma",
    price: 649,
    category: "deportes-de-contacto",
    stock: 20,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam",
    img: "../src/assets/productos/16vendas.PNG",
  },
];

export const getProducts = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(products);
    }, 100);
  });
};

export const getProductById = (id) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(products.find((p) => p.id === id));
    }, 200);
  });
};

export const getProductByCategory = (category) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(products.filter((p) => p.category === category));
    }, 200);
  });
};
