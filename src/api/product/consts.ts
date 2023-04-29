import { Product } from "src/models";

export const LOCAL_STORAGE_PRODUCTS_LIST_KEY = "products";
export const DEFAULT_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Lumen HYPERPC(Standart design)",
    category: "tech",
    variations: ["RTX 3060", "RTX 3060TI", "RTX 3070"],
    img: "https://hyperpc.ru/images/product/lumen/landing-content/plus/gallery/hyperpc_lumen_plus_live_photo_01.jpg",
    price: 499.99,
    inStock: 3,
    description: "Proccesor: Intel i5-10850F , VideoCard : NVIDIA RTX 3060/60TI/70, RAM: DDR4 16GB (Up to 32) ",
  },
  {
    id: "2",
    name: "HYPERPC Gold Diamond",
    category: "tech",
    variations: ["RTX 3070", "RTX 3070TI", "RTX 3080"],
    img: "https://hyperpc.ru/images/product/special/exclusive/hypercp-concept-4/davidych/gallery/hyperpc_erik_davidych_build_photo_03.jpg",
    price: 659.99,
    inStock: 2,
    description:
      "Proccesor: Intel i7-10850F , VideoCard : NVIDIA RTX 3070/70TI/80, RAM: DDR4 32GB (Up to 64) ",
  },
  {
    id: "3",
    name: "Lumin HYPERPC Minecraft Edition",
    category: "tech",
    variations: ["RTX 4050", "RTX 4060", "RTX 4070"],
    img: "https://scontent.fgyd1-1.fna.fbcdn.net/v/t1.6435-9/93857563_4366949086664741_5488582039483449344_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=q_No5JdPuCkAX-BkqPV&_nc_ht=scontent.fgyd1-1.fna&oh=00_AfBjfmBSOj04rSP1rqIowmNRF5JvyZ4OjZw4pLGkPrylLw&oe=64751220",
    price: 790.99,
    inStock: 4,
    description:
      "Proccesor: Intel i7-11850F , VideoCard : NVIDIA RTX 4050/60/70, RAM: DDR5 32GB (Up to 64)",
  },
  {
    id: "4",
    name: "HYPERPC ASUS Black Cherry",
    category: "tech",
    variations: ["RTX 3070", "RTX 3070TI", "RTX 3080"],
    img: "https://ru-static.z-dn.net/files/dc0/914c27d556f21000e2ca7e7f5964fcda.jpg",
    price: 679.99,
    inStock: 5,
    description:
      "Proccesor: Intel i7-10890K , VideoCard : NVIDIA RTX 3070/70TI/80, RAM: DDR5 16GB (Up to 64)",
  },
  {
    id: "5",
    name: "Lumin HYPERPC Blue edition",
    category: "tech",
    variations: ["RTX 2060", "RTX 2070", "RTX 2080"],
    img: "https://avatars.dzeninfra.ru/get-zen_doc/3483777/pub_5f02fa0114bab739661a1291_5f02fcb81a895d1874613361/scale_1200",
    price: 556.99,
    inStock: 3,
    description:
      "Proccesor: Intel i5-10850K , VideoCard : NVIDIA RTX 2060/70/80, RAM: DDR4 16GB (Up to 64)",
  },
  {
    id: "6",
    name: "HYPERPC NanoX",
    category: "tech",
    variations: ["RTX 3080TI", "RTX 3090"],
    img: "https://hyperpc.ru/images/product/nano-x/gallery/hyperpc-nano-x-build-photo-01.jpg",
    price: 989.99,
    inStock: 4,
    description:
      "Proccesor: Intel i9-10850K , VideoCard : NVIDIA RTX 3080TI/90, RAM: DDR5 32GB (Up to 64)",
  },
  {
    id: "7",
    name: "Xbox series X",
    category: "console",
    variations: ["1TB", "2TB"],
    img: "https://cdn1.ozone.ru/s3/multimedia-x/6205839465.jpg",
    price: 799.99,
    inStock: 1,
    description:
      "The Xbox Series X and Series S are the fourth generation of the Xbox series of home video game consoles developed and sold by Microsoft. Released on November 10, 2020, the higher-end Xbox Series X and lower-end Xbox Series S are part of the ninth generation of video game consoles, which also includes Sony's PlayStation 5, released the same month. They superseded the Xbox One.",
  },
  {
    id: "8",
    name: "Sony PlayStation 5 (Black edition)",
    category: "console",
    variations: ["1TB", "2TB"],
    img: "https://pbs.twimg.com/media/EaRtCiJXgAEMPjA.jpg",
    price: 899.99,
    inStock: 6,
    description:
      "The PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. It was announced as the successor to the PlayStation 4 in April 2019, was launched on November 12, 2020, in Australia, Japan, New Zealand, North America, and South Korea, and was released worldwide one week later.",
  },
  {
    id: "9",
    name: "HYPERPC White editon",
    category: "tech",
    variations: ["RTX 3050TI", "RTX 3060"],
    img: "https://scontent.fgyd1-1.fna.fbcdn.net/v/t1.6435-9/76697284_3864903576869297_5749378015679217664_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=j280cbOb5loAX-LDnAi&_nc_ht=scontent.fgyd1-1.fna&oh=00_AfCUx10aU6wdde_fptT8ytCqvmoFjfc0Pdmh45eBubmFwg&oe=6474E825",
    price: 520.99,
    inStock: 3,
    description:
      "Proccesor: Intel i5-10850K , VideoCard : NVIDIA RTX 3050TI/60, RAM: DDR4 16GB (Up to 64)",
  },
];

// localStorage.setItem(
//   LOCAL_STORAGE_PRODUCTS_LIST_KEY,
//   JSON.stringify(DEFAULT_PRODUCTS)
// );
