// src/product.ts
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

export const products: Product[] = [
  {
    id: 1,
    title: "Chainsaw Man:volume_01",
    price: 30.95,
    description:
      "Chainsaw Man follows the story of Denji, an impoverished teenager who makes a contract that fuses his body with that of Pochita, the dog-like Chainsaw Devil, granting him the ability to transform parts of his body into chainsaws. Denji eventually joins the Public Safety Devil Hunters, a government agency focused on combating Devils whenever they become a threat to Japan. The second arc of the story focuses on Asa Mitaka, a high school student who enters into a contract with Yoru, the War Devil, who forces her to hunt down Chainsaw Man in order to reclaim what he had stolen from her.",
    category: "manga",
    image: "https://m.media-amazon.com/images/I/A1DjDSDjTbL._SY466_.jpg",
    rating: {
      rate: 4.9,
      count: 120,
    },
  },
  {
    id: 2,
    title: "Chainsaw Man:volume_02 ",
    price: 35.3,
    description:
      "Chainsaw Man follows the story of Denji, an impoverished teenager who makes a contract that fuses his body with that of Pochita, the dog-like Chainsaw Devil, granting him the ability to transform parts of his body into chainsaws. Denji eventually joins the Public Safety Devil Hunters, a government agency focused on combating Devils whenever they become a threat to Japan. The second arc of the story focuses on Asa Mitaka, a high school student who enters into a contract with Yoru, the War Devil, who forces her to hunt down Chainsaw Man in order to reclaim what he had stolen from her.",
    category: "manga",
    image: "https://m.media-amazon.com/images/I/91LH2rUEacL._SY466_.jpg",
    rating: {
      rate: 4.7,
      count: 259,
    },
  },
  {
    id: 3,
    title: "Chainsaw Man:volume_03",
    price: 44.99,
    description:
      "Chainsaw Man follows the story of Denji, an impoverished teenager who makes a contract that fuses his body with that of Pochita, the dog-like Chainsaw Devil, granting him the ability to transform parts of his body into chainsaws. Denji eventually joins the Public Safety Devil Hunters, a government agency focused on combating Devils whenever they become a threat to Japan. The second arc of the story focuses on Asa Mitaka, a high school student who enters into a contract with Yoru, the War Devil, who forces her to hunt down Chainsaw Man in order to reclaim what he had stolen from her.",
    category: "manga",
    image:
      "https://m.media-amazon.com/images/I/51sXjod7yVL._SY445_SX342_FMwebp_.jpg",
    rating: {
      rate: 4.7,
      count: 500,
    },
  },
  {
    id: 4,
    title: "Chainsaw Man:volume_04",
    price: 45.99,
    description:
      "Chainsaw Man follows the story of Denji, an impoverished teenager who makes a contract that fuses his body with that of Pochita, the dog-like Chainsaw Devil, granting him the ability to transform parts of his body into chainsaws. Denji eventually joins the Public Safety Devil Hunters, a government agency focused on combating Devils whenever they become a threat to Japan. The second arc of the story focuses on Asa Mitaka, a high school student who enters into a contract with Yoru, the War Devil, who forces her to hunt down Chainsaw Man in order to reclaim what he had stolen from her.",
    category: "manga",
    image:
      "https://m.media-amazon.com/images/I/51nBjTglXpL._SY445_SX342_FMwebp_.jpg",
    rating: {
      rate: 2.1,
      count: 430,
    },
  },
  {
    id: 5,
    title: "Chainsaw Man:volume_05",
    price: 695,
    description:
      "Chainsaw Man follows the story of Denji, an impoverished teenager who makes a contract that fuses his body with that of Pochita, the dog-like Chainsaw Devil, granting him the ability to transform parts of his body into chainsaws. Denji eventually joins the Public Safety Devil Hunters, a government agency focused on combating Devils whenever they become a threat to Japan. The second arc of the story focuses on Asa Mitaka, a high school student who enters into a contract with Yoru, the War Devil, who forces her to hunt down Chainsaw Man in order to reclaim what he had stolen from her.",
    category: "manga",
    image:
      "https://m.media-amazon.com/images/I/518b6xpf+sL._SY445_SX342_FMwebp_.jpg",
    rating: {
      rate: 4.6,
      count: 400,
    },
  },
  {
    id: 6,
    title: "Fire Punch:volume_01 ",
    price: 45,
    description:
      "Fire Punch takes place on an Earth that has become frozen over and barren. The series follows Agni, a young man who is able to regenerate his body. After his village succumbs to inextinguishable flames he is left constantly on fire, leaving him in anguish and vowing to get revenge.",
    category: "manga",
    image:
      "https://static.wikia.nocookie.net/fire_punch/images/0/0f/Volume_01.png",
    rating: {
      rate: 4.8,
      count: 70,
    },
  },
  {
    id: 7,
    title: "Fire Punch:volume_02",
    price: 44.99,
    description:
      "Fire Punch takes place on an Earth that has become frozen over and barren. The series follows Agni, a young man who is able to regenerate his body. After his village succumbs to inextinguishable flames he is left constantly on fire, leaving him in anguish and vowing to get revenge.",
    category: "manga",
    image:
      "https://static.wikia.nocookie.net/fire_punch/images/6/68/Volume_02.png",
    rating: {
      rate: 4.7,
      count: 400,
    },
  },
  {
    id: 8,
    title: "Fire Punch:volume_03",
    price: 48,
    description:
      "Fire Punch takes place on an Earth that has become frozen over and barren. The series follows Agni, a young man who is able to regenerate his body. After his village succumbs to inextinguishable flames he is left constantly on fire, leaving him in anguish and vowing to get revenge.",
    category: "manga",
    image:
      "https://tse1.mm.bing.net/th/id/OIP.pp_TESFRBFx3vMZHLOrf-AHaLo?rs=1&pid=ImgDetMain&o=7&rm=3",
    rating: {
      rate: 4.8,
      count: 100,
    },
  },
  {
    id: 9,
    title: "Nayuta of the Prophecy ",
    price: 48,
    description:
      "A tale about a prophecy involving a girl with horns who is said to bring destruction upon the world, and her brother.",
    category: "manga",
    image:
      "https://tse3.mm.bing.net/th/id/OIP.kMxnkzSF6PfR12I1PambtwHaLo?rs=1&pid=ImgDetMain&o=7&rm=3",
    rating: {
      rate: 4.5,
      count: 203,
    },
  },
  {
    id: 10,
    title: "Goodbye,Eri",
    price: 35,
    description:
      "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    category: "manga",
    image:
      "https://m.media-amazon.com/images/I/41WHE2AzPOL._SY445_SX342_ML2_.jpg",
    rating: {
      rate: 5,
      count: 470,
    },
  },
  {
    id: 11,
    title: "Look Back",
    price: 109,
    description:
      "https://m.media-amazon.com/images/I/51vRousHQwL._SY445_SX342_ML2_.jpg",
    category: "manga",
    image:
      "https://th.bing.com/th/id/R.83914649372893ee79a8791e2e5f03e2?rik=hZvWALHt892nqQ&pid=ImgRaw&r=0",
    rating: {
      rate: 4.9,
      count: 319,
    },
  },
  {
    id: 12,
    title:
      "【READY STOCK】造化 ZaoHua Studio - Chainsaw Man Series 03 - Devils Chainsaw Man",
    price: 300,
    description:
      "【READY STOCK】 Shipping from China. Shipping fee is not included.\n" +
      "造化 ZaoHua Studio - Chainsaw Man Series 03 - Devils\n" +
      "Variaiton : Normal & Deluxe\n" +
      "Add 56 USD to have Accessories Pack (Kobeni + Devil Hand)\n" +
      "Scale : 1/4" +
      "Size : (H) 62.0cm (W) 40.0cm (D) 30.0cm\n" +
      "#gkfigure #gkfigureworldwide #gkresin #gkstatue #animefigure #animeactionfigure #animestatue #onepiece #naruto #onepiecefigure #narutofigure #attackontitan #attackontitanfigure #demonslayer #demonslayerfigure #yugiohfigure #g5studio #g5 #jimei #jimeipalace",
    category: "Figure",
    image:
      "https://static.wixstatic.com/media/5964ec_3ccbd2b032b04234af90264362a35188~mv2.jpg/v1/fill/w_989,h_802,al_c,q_85,usm_0.66_1.00_0.01/5964ec_3ccbd2b032b04234af90264362a35188~mv2.jpg",
    rating: {
      rate: 5,
      count: 400,
    },
  },
];
