const categories = [
  {
    id: 0,
    name: "All",
  },
  // {
  //   id: 1,
  //   name: "Trends",
  // },
  {
    id: 2,
    name: "Tops",
  },
  {
    id: 3,
    name: "Skirts",
  },
  {
    id: 4,
    name: "Long Dresses",
  },
  {
    id: 5,
    name: "Pants",
  },
  {
    id: 6,
    name: "Bags",
  },
  {
    id: 7,
    name: "Glasses",
  },
  // {
  //   id: 8,
  //   name: "Promotions",
  // },
  // {
  //   id: 9,
  //   name: "Spring/Summer",
  // },
];

const products = [
  {
    id: 1,
    name: "Slim Fit Dress",
    image: "dr1.jpg",
    price: 13000,
    categoryId: 4,
    detail: "This dress is sleeveless,fit and double layered. Due to the make of POLYESTER and Spandex , it can make you so comfortable.",
  },
  {
    id: 2,
    name: "One String",
    image: "d4.jpg",
    price: 12000,
    categoryId: 4,
    detail: "MYPO's light purple Carlotta Fitted square-neck, stretch-cotton mini dress. This dress going to impress everyone."
  },
  {
    id: 3,
    name: "Floral Dress",
    image: "dr7.jpg",
    price: 15500,
    categoryId: 4,
    detail: "Every girl should have one floral print high-low wrap dress. This is the thing you searching for."
  },
  {
    id: 4,
    name: "Bridemaid Dress",
    image: "e1.jpg",
    price: 35000,
    categoryId: 4,
    detail: "This dress is so gorgeous! The design showing the nice image of bridemaid."
  },
  {
    id: 5,
    name: "Syren Black",
    image: "sw3.jpg",
    price: 24000,
    categoryId: 1,
    detail:"Mock neck, short sleeve, fitted dress with SYREN sign. Very nice fitted dress ever.",
    type: "trendy",
  },
  {
    id: 6,
    name: "Cargo Pant",
    image: "j13.jpg",
    price: 17000,
    categoryId: 5,
    detail:"This cargo jean is perfect for a range of different styles, from retro to punk, vintage to preppy, ensuring it can fit seamlessly into any wardrobe."
  },
  {
    id: 7,
    name: "Crochet skirt",
    image: "s24.jpg",
    price: 22000,
    categoryId: 3,
    detail:"Nowaday chrochet items are popular.This is the super cute rainbow striped pattern chrochet skirt."
  },
  {
    id: 8,
    name: "Baggy Jean Pant",
    image: "p18.jpg",
    price: 28000,
    categoryId: 5,
    detail:"Are you bored in wearing plain jeans, you should try this. This is the new-style ripped black jean."
  },
  {
    id: 9,
    name: "Jean Flare Pant",
    image: "j4.jpg",
    price: 32000,
    categoryId: 5,
    detail:"Wanna try flare jeans, this might be the best choice for you . "
  },
  {
    id: 10,
    name: "Gray long Dress with Slit",
    image: "e4.jpg",
    price: 22000,
    categoryId: 4,
    detail:"This dress is very soft, comfortable,breathable, opaque and easy to wear and take off. Perfact match with late night party. You won't regret getting this."
  },
  {
    id: 11,
    name: "Black Mermaid",
    image: "e13.jpg",
    price: 28000,
    categoryId: 4,
    detail:"This tube top design style dress looks very sexy and charming for you. Also reveal a modern and advanced temperament."
  },
  {
    id: 12,
    name: "Babydoll Dress",
    image: "d3.jpg",
    price: 27000,
    categoryId: 4,
    detail:"The dress for warm spring and summer days. Perfect for dating, wedding, birthday and dinner."
  },
  {
    id: 13,
    name: "Fancy Glass",
    image: "p27.jpg",
    price: 6500,
    categoryId: 7,
    detail:"Small Rectangular Sunglasses feature a thin retro frame, rectangular cat-eye style, and a slightly oversized fit."
  },
  {
    id: 14,
    name: "Tube Top",
    image: "p4.jpg",
    price: 11000,
    categoryId: 2,
    detail: "Perfect for layering over some top. This is designed in soft, gentle fabric with a pretty shoulder off."
  },
  {
    id: 15,
    name: "Fancy Glass",
    image: "p28.jpg",
    price: 6000,
    categoryId: 7,
    detail:"Small Rectangular Sunglasses feature a thin retro frame, rectangular cat-eye style, and a slightly oversized fit."
  },
  {
    id: 16,
    name: "Ted Baker Bag",
    image: "b3.jpg",
    price: 17000,
    categoryId: 6,
    detail:"This crossover bow detail handbag suit with every dress . Sometimes simple things are perfect."
  },
  {
    id: 17,
    name: "Designer Luxury Bag",
    image: "b2.jpg",
    price: 18000,
    categoryId: 6,
    detail:"This lovely bag in stylish,simple,fashionable and confortable to wear. It is the classic handbag that everyone needs to own."
  },
  {
    id: 18,
    name: "Mini Shoulder Bag",
    image: "b4.jpg",
    price: 14000,
    categoryId: 6,
    detail:"All the while is able to fit the essentials - your phone,credit card, lipstick,and keys.This is the exact things for your essentials."
  },
  {
    id: 19,
    name: "Mafia Girl",
    image: "e17.jpg",
    price: 35000,
    categoryId: 1,
    detail:"Women V neck slim fit dress with party long lantern sleeves.",
    type: "trendy",
  },
  {
    id: 20,
    name: "Jean Short Pant",
    image: "j30.jpg",
    price: 21000,
    categoryId: 1,
    detail:"High waist sexy jean short pant. If you're in the era of 20 , this suit very well.",
    type: "trendy",
  },
  {
    id: 21,
    name: "Modern Glass",
    image: "p29.jpg",
    price: 8000,
    categoryId: 7,
    detail:"Small Rectangular Sunglasses feature a thin retro frame, rectangular cat-eye style, and a slightly oversized fit."
  },
  {
    id: 22,
    name: "Butterfly Shoulder Bag",
    image: "p42.jpg",
    price: 17500,
    categoryId: 6,
    detail:"This small shoulder bag is a versatile and fashionable item that can be worn on your back no matter what you wear."
  },
  {
    id: 23,
    name: "Shape White Top",
    image: "p3.jpg",
    price: 10000,
    categoryId: 2,
    detail:"Show off your shape in this super suct crop top.Fearuring a white ribbed fabric with wrap around waist."
  },
  {
    id: 24,
    name: "Bubbles",
    image: "p8.jpg",
    price: 15000,
    categoryId: 2,
    detail:"The soft, ribbed fibric is comfortable to wear all day long and the turtleneck neckline adds a touch of sophistication."
  },
  {
    id: 25,
    name: "Waffle Pant",
    image: "j25.jpg",
    price: 24000,
    categoryId: 5,
    detail:"Khaki Waffle Pant for office worker and student. This can draw attention from everyone for sure."
  },
  {
    id: 26,
    name: "Paris Blue",
    image: "e19.jpg",
    price: 39000,
    categoryId: 4,
    detail:"The wonderful delicate dress made of satin has a long skirt gathered at the waist and an inconspicuous zipper on the back."
  },
  {
    id: 27,
    name: "Tweed Skirt",
    image: "s2.jpg",
    price: 21500,
    categoryId: 3,
    detail:"This skirt is perfect for endlessly styling with your existing wardobe pieces."
  },
  {
    id: 28,
    name: "Pocketed Skirt",
    image: "s26.jpg",
    price: 29000,
    categoryId: 3,
    detail:"If you're a fashionista,then you know that trends come an go.But there are some trends that never seem to go away, that is pocketed skirt."
  },
  {
    id: 29,
    name: "Butterfly Glass",
    image: "p32.jpg",
    price: 8000,
    categoryId: 7,
    detail:"Fashionable Multicolor Rimless Glasses with Butterfly Decoration,suitable for travel."
  },
  {
    id: 30,
    name: "Graphic Crop Tee",
    image: "c5.jpg",
    price: 11000,
    categoryId: 2,
    detail:"Graphic Tee with racing car style which is popular among teenage girl."
  },
  {
    id: 31,
    name: "Lady D Joy",
    image: "b40.jpg",
    price: 26000,
    categoryId: 1,
    detail:"Beautiful luxury design handbag.If you are with this , that's sure you're so elegant.",
    type: "trendy",
  },
  {
    id: 32,
    name: "Crop Tee",
    image: "p16.jpg",
    price: 13000,
    categoryId: 2,
    detail:"Helpom Stylish women crop top which is suitable for everyone."
  },
  {
    id: 33,
    name: "Cargo Jean",
    image: "j7.jpg",
    price: 30000,
    categoryId: 5,
    detail:"Cargo jean with clean look and heavy fade stretchable."
  },
  {
    id: 34,
    name: "Hobo Purse",
    image: "p45.jpg",
    price: 20000,
    categoryId: 6,
    detail:"Simple small hobo purse for women with chain strap,nylon cute office lady handbag shoulder bag with zipper closure."
  },
  {
    id: 35,
    name: "Gap Poplin Pyjama Shirt",
    image: "c10.jpg",
    price: 11500,
    categoryId: 6,
    detail:"Beautiful flower printed coordinating night suit."
  },
  {
    id: 36,
    name: "Pocket Straight Jean",
    image: "j9.jpg",
    price: 29000,
    categoryId: 5,
    detail:"High Rise Cargo Pant with Flap Pockets.Suitable for casual go out."
  },
  {
    id: 37,
    name: "Ice Silk Cargo",
    image: "j8.jpg",
    price: 32000,
    categoryId: 5,
    detail:"Teen girls flap pockets cargo jean with wheat color.You must try it."
  },
  {
    id: 38,
    name: "Jean Pant",
    image: "p20.jpg",
    price: 28500,
    categoryId: 5,
    detail:"Straight jeans loose high waist pants for casual and formal."
  },
  {
    id: 39,
    name: "Crotchet Top",
    image: "c27.jpg",
    price: 19000,
    categoryId: 2,
    detail:"Hollister Crotchet Halter Top with lavender color.This is the perfect choice for beach mood."
  },
  {
    id: 40,
    name: "Drawstring Split Thigh Skirt",
    image: "s15.jpg",
    price: 33000,
    categoryId: 3,
    detail:"Midi Shirt ruched Drawsttring Slit Thigh Skirt For Casual Party."
  },
  {
    id: 41,
    name: "Glitter Ruched Tank",
    image: "c18.jpg",
    price: 14000,
    categoryId: 9,
    detail:"Our tank top offers high stretch for a snug, adaptable fit;ensuring you enjoy every moment of your outings without any restrictions.",
    type: "upcoming",
  },
  {
    id: 42,
    name: "Avidlove",
    image: "s16.jpg",
    price: 12000,
    categoryId: 9,
    detail:"This skirt is perfect for teen who love to going lingerie party outfit and clubwear.",
    type: "upcoming",
  },
  {
    id: 43,
    name: "Pearls Heart Top",
    image: "c25.jpg",
    price: 10000,
    categoryId: 9,
    detail:"Pearls Trim Asymmetrical Hem Carmi Top with Heart Shape.",
    type: "upcoming",
  },
  {
    id: 44,
    name: "Mini Handbag",
    image: "p39.jpg",
    price: 9000,
    categoryId: 9,
    detail:"mini patent leather tote with foldover top and circulat handle",
    type: "upcoming",
  },
  {
    id: 45,
    name: "Solid Crop Top",
    image: "c30.jpg",
    price: 18000,
    categoryId: 8,
    detail:"Top with amazing front tie and back crop pattern. Bset for dinner night.",
    type: "promotion",
    normal_price: 22000,
  },
  {
    id: 46,
    name: "Ruched Cami Dress",
    image: "dr3.jpg",
    price: 16500,
    categoryId: 8,
    detail:"Fill Trim Ruched Bust Cami Dress for casual daily. It's super comfortable to wear.",
    type: "promotion",
    normal_price: 20000,
  },
];

const limitedProducts = [
  {
    id: 1001,
    name: "Cherish Blue",
    image: "dr4.jpg",
    price: 130000,
    categoryId: 1,
    in_stock: true,
    detail:"This is the dress which make you feel like a princess . Make with Full Passion."
  },
  {
    id: 1002,
    name: "Sweet Heart",
    image: "dr9.jpg",
    price: 120000,
    categoryId: 1,
    in_stock: true,
    detail:"Floral print sweetheart neck puff sleeve organza dress of MYPO."
  },
  {
    id: 1003,
    name: "Designer Top",
    image: "c23.jpg",
    price: 155000,
    categoryId: 1,
    in_stock: true,
    detail:"suitable for leisure , work, dating,dinner and so many places.This should be in your wardrobe."
  },
  {
    id: 1004,
    name: "Elegant Red",
    image: "c35.jpg",
    price: 350000,
    categoryId: 1,
    in_stock: true,
    detail:"In elegant red color,with thr extra long ties offer multiple ways to wear ."
  },
  {
    id: 1005,
    name: "Mini Skirt",
    image: "s9.jpg",
    price: 110000,
    categoryId: 1,
    in_stock: false,
  },
  {
    id: 1006,
    name: "Jump Suit",
    image: "pro1.jpg",
    price: 170000,
    categoryId: 1,
    in_stock: false,
  },
  {
    id: 1007,
    name: "Designer Bag",
    image: "b27.jpg",
    price: 220000,
    categoryId: 1,
    in_stock: false,
  },
  {
    id: 1008,
    name: "Fairy Grunge Skirt",
    image: "s4.jpg",
    price: 210000,
    categoryId: 1,
    in_stock: false,
  },
];
