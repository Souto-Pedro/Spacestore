const products = {
  3: {
    name: "T-shirt: Star Stuff",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus lacus vel lectus dictum aliquam. In laoreet, arcu in porttitor semper, magna diam consectetur arcu, vel condimentum risus erat vel lacus. Duis ut viverra est, a facilisis augue. Integer feugiat risus risus. Curabitur facilisis ipsum at libero ullamcorper, id porta sapien rutrum. Integer egestas egestas quam, non venenatis quam lacinia sit amet. Ut massa metus, volutpat sit amet feugiat dapibus, tincidunt non est. Cras pharetra ut massa eu porta. Phasellus velit magna, pretium eleifend turpis in, dictum vehicula nunc.",
    images: [
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/726/919/products/star_stuff_branca1-183f0f04dc4787b3b315865577513454-640-0.png",
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/726/919/products/star_stuff_preta1-bd15c920848a81cd5a15865577518292-640-0.png",
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/726/919/products/star_stuff_amarela1-abe1d15bb22d3f27da15865577521371-640-0.png",
    ],
    price: 79.99,
    categories: [1],
  },
  1: {
    name: "Spacex Hoodie",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus lacus vel lectus dictum aliquam. In laoreet, arcu in porttitor semper, magna diam consectetur arcu, vel condimentum risus erat vel lacus. Duis ut viverra est, a facilisis augue. Integer feugiat risus risus. Curabitur facilisis ipsum at libero ullamcorper, id porta sapien rutrum. Integer egestas egestas quam, non venenatis quam lacinia sit amet. Ut massa metus, volutpat sit amet feugiat dapibus, tincidunt non est. Cras pharetra ut massa eu porta. Phasellus velit magna, pretium eleifend turpis in, dictum vehicula nunc.",
    images: [
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/726/919/products/mockup-of-a-customizable-crewneck-sweatshirt-hanging-against-a-concrete-wall-339971-d6795c1805d90d4a0915908462359356-640-0.png",
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/726/919/products/mescla-spaceex1-5b842b23f17cf0b5e515908462346917-640-0.jpg",
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/726/919/products/mockup-of-a-customizable-crewneck-sweatshirt-hanging-against-a-concrete-wall-339971-d6795c1805d90d4a0915908462359356-640-0.png",
    ],
    price: 399.99,
    promo_price: 249.99,
    percent: 15,
    categories: [1, 3],
  },
  4: {
    name: "T-shirt: My next destination: Moon",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus lacus vel lectus dictum aliquam. In laoreet, arcu in porttitor semper, magna diam consectetur arcu, vel condimentum risus erat vel lacus. Duis ut viverra est, a facilisis augue. Integer feugiat risus risus. Curabitur facilisis ipsum at libero ullamcorper, id porta sapien rutrum. Integer egestas egestas quam, non venenatis quam lacinia sit amet. Ut massa metus, volutpat sit amet feugiat dapibus, tincidunt non est. Cras pharetra ut massa eu porta. Phasellus velit magna, pretium eleifend turpis in, dictum vehicula nunc.",
    images: [
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/726/919/products/my-next-destination_-moon-p1-5dde86367dde547e2315865609760538-640-0.png",
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/726/919/products/my-next-destination_-moon-bordo1-e7b2b57b0e88806da215865609762666-640-0.png",
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/726/919/products/my-next-destination_-moon-a1-5fde45af3e97d66f1c15865609762276-640-0.png",
    ],
    price: 99.99,
    promo_price:59.99,
    percent:40,
    categories: [1],
  },
  8: {
    name: "Hoodie Property of NASA",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus lacus vel lectus dictum aliquam. In laoreet, arcu in porttitor semper, magna diam consectetur arcu, vel condimentum risus erat vel lacus. Duis ut viverra est, a facilisis augue. Integer feugiat risus risus. Curabitur facilisis ipsum at libero ullamcorper, id porta sapien rutrum. Integer egestas egestas quam, non venenatis quam lacinia sit amet. Ut massa metus, volutpat sit amet feugiat dapibus, tincidunt non est. Cras pharetra ut massa eu porta. Phasellus velit magna, pretium eleifend turpis in, dictum vehicula nunc.",
    images: [
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/726/919/products/cinza-mescla71-522f876cb60e38181d16137454234071-640-0.png",
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/726/919/products/branca401-9114a655a794eafa0216137454234298-640-0.png",
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/726/919/products/cinza-mescla71-522f876cb60e38181d16137454234071-640-0.png",
    ],
    price: 299.99,
    promo_price: 199.99,
    percent: 15,
    categories: [1, 3],
  },
  5: {
    name: "T-shirt: Astronaut Graffiti The Milky Way",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus lacus vel lectus dictum aliquam. In laoreet, arcu in porttitor semper, magna diam consectetur arcu, vel condimentum risus erat vel lacus. Duis ut viverra est, a facilisis augue. Integer feugiat risus risus. Curabitur facilisis ipsum at libero ullamcorper, id porta sapien rutrum. Integer egestas egestas quam, non venenatis quam lacinia sit amet. Ut massa metus, volutpat sit amet feugiat dapibus, tincidunt non est. Cras pharetra ut massa eu porta. Phasellus velit magna, pretium eleifend turpis in, dictum vehicula nunc.",
    images: [
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/726/919/products/camiseta-astronaut-graffiti-the-milky-way11-5801caf86df908d27215865582985970-640-0.png",
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/726/919/products/astronauta-6-preta1-e19081a2ea8fcca54815274538063455-640-0.png",
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/726/919/products/camiseta-astronaut-graffiti-the-milky-way2-0f4f500221dbcb23cd15865582987564-640-0.png",
    ],
    price: 59.99,
    categories: [1],
  },
  6: {
    name: "Crew Dragon Demo-2    Hoodie",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus lacus vel lectus dictum aliquam. In laoreet, arcu in porttitor semper, magna diam consectetur arcu, vel condimentum risus erat vel lacus. Duis ut viverra est, a facilisis augue. Integer feugiat risus risus. Curabitur facilisis ipsum at libero ullamcorper, id porta sapien rutrum. Integer egestas egestas quam, non venenatis quam lacinia sit amet. Ut massa metus, volutpat sit amet feugiat dapibus, tincidunt non est. Cras pharetra ut massa eu porta. Phasellus velit magna, pretium eleifend turpis in, dictum vehicula nunc.",
    images: [
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/726/919/products/blusao-preto1-570d7595712c1b869115906992940489-640-0.png",
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/726/919/products/blusao-3-azul1-16bb66ce9dde46b2f315906992951170-640-0.png",
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/726/919/products/blusao-02-azul1-3425c85c4f07e9409815906992951622-640-0.png",
    ],
    price: 299.99,
    promo_price: 199.99,
    percent: 15,
    categories: [1, 3],
  },
  7: {
    name: "The Worm Futebol - Preto ou Vermelho",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus lacus vel lectus dictum aliquam. In laoreet, arcu in porttitor semper, magna diam consectetur arcu, vel condimentum risus erat vel lacus. Duis ut viverra est, a facilisis augue. Integer feugiat risus risus. Curabitur facilisis ipsum at libero ullamcorper, id porta sapien rutrum. Integer egestas egestas quam, non venenatis quam lacinia sit amet. Ut massa metus, volutpat sit amet feugiat dapibus, tincidunt non est. Cras pharetra ut massa eu porta. Phasellus velit magna, pretium eleifend turpis in, dictum vehicula nunc.",
    images: [
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/726/919/products/frente-preta1-17882d5c65b0b5617916067608259913-640-0.jpg",
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/726/919/products/frente-vermelha1-43074ab21a93b721c116067608411484-640-0.jpg",
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/726/919/products/whatsapp-image-2020-11-04-at-16-51-13-111-b170eed3d82145d83e16045215268119-640-0.jpeg",
    ],
    price: 150.00,
    promo_price:135.00,
    percent: 10,
    categories: [1],
  },
  15: {
    name: "Kit Artemis 1 - Hoodie + Mug + Flag",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus lacus vel lectus dictum aliquam. In laoreet, arcu in porttitor semper, magna diam consectetur arcu, vel condimentum risus erat vel lacus. Duis ut viverra est, a facilisis augue. Integer feugiat risus risus. Curabitur facilisis ipsum at libero ullamcorper, id porta sapien rutrum. Integer egestas egestas quam, non venenatis quam lacinia sit amet. Ut massa metus, volutpat sit amet feugiat dapibus, tincidunt non est. Cras pharetra ut massa eu porta. Phasellus velit magna, pretium eleifend turpis in, dictum vehicula nunc.",
    images: [
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/726/919/products/preto-11-86cab31ebe760b71ba16617707778675-640-0.png",
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/726/919/products/whatsapp-image-2022-08-16-at-15-47-561-45f02219f078118eb816617282386387-640-0.jpeg",
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/726/919/products/whatsapp-image-2022-08-28-at-13-10-121-958032347b4130a9eb16617282388005-640-0.jpeg",
    ],
    price: 260.00,
    promo_price: 208.99,
    percent: 15,
    categories: [1, 2, 3],
  },
  12: {
    name: "Kit- Spacex: Mug + T-shirt",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus lacus vel lectus dictum aliquam. In laoreet, arcu in porttitor semper, magna diam consectetur arcu, vel condimentum risus erat vel lacus. Duis ut viverra est, a facilisis augue. Integer feugiat risus risus. Curabitur facilisis ipsum at libero ullamcorper, id porta sapien rutrum. Integer egestas egestas quam, non venenatis quam lacinia sit amet. Ut massa metus, volutpat sit amet feugiat dapibus, tincidunt non est. Cras pharetra ut massa eu porta. Phasellus velit magna, pretium eleifend turpis in, dictum vehicula nunc.",
    images: [
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/726/919/products/spacex-camiseta-e-caneca1-12daa030b3ab3991b115862731440012-640-0.png",
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/726/919/products/mockup-of-a-t-shirt-hanging-against-a-solid-background-2362-el1-31-48f6a8225433cfafda15862731437915-640-0.png",
      "https://www.spacetodaystore.com/produtos/kit-camiseta-caneca-spacex/?variant=127519055",
    ],
    price: 109.99,
    categories: [1, 2],
  },
  10: {
    name: "Crew Dragon Mug",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus lacus vel lectus dictum aliquam. In laoreet, arcu in porttitor semper, magna diam consectetur arcu, vel condimentum risus erat vel lacus. Duis ut viverra est, a facilisis augue. Integer feugiat risus risus. Curabitur facilisis ipsum at libero ullamcorper, id porta sapien rutrum. Integer egestas egestas quam, non venenatis quam lacinia sit amet. Ut massa metus, volutpat sit amet feugiat dapibus, tincidunt non est. Cras pharetra ut massa eu porta. Phasellus velit magna, pretium eleifend turpis in, dictum vehicula nunc.",
    images: [
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/726/919/products/caneca-crew-dragon1-3832e8b21ae2ba485b15865299910528-640-0.png",
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/726/919/products/crew-dragon21-cb34a21936a79aef0315570526551951-640-0.png",
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/726/919/products/caneca-crew-dragon1-3832e8b21ae2ba485b15865299910528-640-0.png",
    ],
    price: 49.99,
    categories: [2],
  },
  9: {
    name: "Magic Mug: Full Moon",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus lacus vel lectus dictum aliquam. In laoreet, arcu in porttitor semper, magna diam consectetur arcu, vel condimentum risus erat vel lacus. Duis ut viverra est, a facilisis augue. Integer feugiat risus risus. Curabitur facilisis ipsum at libero ullamcorper, id porta sapien rutrum. Integer egestas egestas quam, non venenatis quam lacinia sit amet. Ut massa metus, volutpat sit amet feugiat dapibus, tincidunt non est. Cras pharetra ut massa eu porta. Phasellus velit magna, pretium eleifend turpis in, dictum vehicula nunc.",
    images: [
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/726/919/products/whatsapp-image-2021-05-24-at-15-47-241-a55ff73b53fad85ff616243140935470-640-0.jpeg",
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/726/919/products/mockup-of-an-11-oz-magic-mug-against-a-solid-background-281771-70d54f131cdd73b4d916243140942232-640-0.png",
      "https://www.youtube.com/watch?v=cPCdDm7rAM8",
    ],
    price: 100.00,
    promo_price: 59.00,
    percent: 40,
    categories: [2],
  },
};

const categories = {
  1: { name: "Roupas" },
  2: { name: "Acessórios" },
  3: { name: "Hoodies" },
  4: { name: "SpaceExp" }
};

module.exports = {
  products,
  categories,
};
