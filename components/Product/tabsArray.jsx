const srtarr = [
  {
    id: 1,
    name: "Best match",
  },
  {
    id: 2,
    name: "Price: low to high",
  },
  {
    id: 3,
    name: "Price: high to low",
  },
  {
    id: 4,
    name: "Newest",
  },
  {
    id: 5,
    name: "Customer rating",
  },
  {
    id: 6,
    name: "Name",
  },
  {
    id: 7,
    name: "Most popular",
  },
  {
    id: 8,
    name: "Width",
  },
  {
    id: 9,
    name: "Length",
  },
];
const Size = [
  {
    id: 1,
    name: "10*10*10",
  },
  {
    id: 2,
    name: "20*20*20",
  },
  {
    id: 3,
    name: "30*30*30",
  },
  {
    id: 4,
    name: "40*40*40",
  },
  {
    id: 5,
    name: "50*50*50",
  },
  {
    id: 6,
    name: "60*60*60",
  },
  {
    id: 7,
    name: "70*70*70",
  },
  {
    id: 8,
    name: "80*80*80",
  },
  {
    id: 9,
    name: "90*90*90",
  },
];
// const htarr = [
//   {
//     id: 1,
//     name: "100 cm",
//     value: "1",
//   },
//   {
//     id: 2,
//     name: "150 cm",
//     value: "17",
//   },
//   {
//     id: 3,
//     name: "250 cm",
//     value: "76",
//   },
//   {
//     id: 4,
//     name: "310 cm",
//     value: "1",
//   },
//   {
//     id: 5,
//     name: "1000 cm",
//     value: "1",
//   },
// ];
const colorarr = [
  {
    id: 1,
    class:
      "rounded-full bg-white border border-slate-400 hover:outline hover:outline-1 hover:outline-slate-300 hover:outline-offset-2 w-14 h-14",
    name: "White",
  },
  {
    id: 2,
    class:
      "rounded-full bg-gray-300 hover:outline hover:outline-1 hover:outline-slate-300 hover:outline-offset-2 w-14 h-14",
    name: "Grey",
  },
  {
    id: 3,
    class:
      "rounded-full bg-yellow-100 hover:outline hover:outline-1 hover:outline-slate-300 hover:outline-offset-2 w-14 h-14",
    name: "Beige",
  },
  {
    id: 4,
    class:
      "rounded-full bg-blue-800 hover:outline hover:outline-1 hover:outline-slate-300 hover:outline-offset-2 w-14 h-14",
    name: "Blue",
  },
  {
    id: 5,
    class:
      "rounded-full bg-green-800 hover:outline hover:outline-1 hover:outline-slate-300 hover:outline-offset-2 w-14 h-14",
    name: "Green",
  },
  {
    id: 6,
    class:
      "rounded-full bg-red-600 hover:outline hover:outline-1 hover:outline-slate-300 hover:outline-offset-2 w-14 h-14",
    name: "Red",
  },
  {
    id: 7,
    class:
      "rounded-full bg-white hover:outline hover:outline-1 hover:outline-slate-300 hover:outline-offset-2 border border-slate-300 w-14 h-14",
    name: "Multicolor",
  },
  {
    id: 8,
    class:
      "rounded-full bg-yellow-900 hover:outline hover:outline-1 hover:outline-slate-300 hover:outline-offset-2 w-14 h-14",
    name: "Brown",
  },
  {
    id: 9,
    class:
      "rounded-full bg-black hover:outline hover:outline-1 hover:outline-slate-300 hover:outline-offset-2 w-14 h-14",
    name: "Black",
  },
  {
    id: 10,
    class:
      "rounded-full bg-yellow-300 hover:outline hover:outline-1 hover:outline-slate-300 hover:outline-offset-2 w-14 h-14",
    name: "Yellow",
  },
  {
    id: 11,
    class:
      "rounded-full bg-emerald-300 hover:outline hover:outline-1 hover:outline-slate-300 hover:outline-offset-2 w-14 h-14",
    name: "Turquiose",
  },
  {
    id: 12,
    class:
      "rounded-full bg-orange-400 hover:outline hover:outline-1 hover:outline-slate-300 hover:outline-offset-2  w-14 h-14",
    name: "Orange",
  },
  {
    id: 13,
    class:
      "rounded-full bg-red-200 hover:outline hover:outline-1 hover:outline-slate-300 hover:outline-offset-2  w-14 h-14",
    name: "Pink",
  },
];
const categoryarr = [
  { id: 1, name: "3 D Geometric" },
  { id: 2, name: "Abstract" },
  { id: 3, name: "Animal" },
  { id: 4, name: "Botanicals" },
  { id: 5, name: "Brick" },
  { id: 6, name: "Classic" },
  { id: 7, name: "Damask" },
  { id: 8, name: "Floral" },
  { id: 9, name: "Indian Heritage" },
  { id: 10, name: "Kids" },
  { id: 11, name: "Marble" },
  { id: 12, name: "Nature" },
  { id: 13, name: "Plain & Checkered" },
  { id: 14, name: "Plain & Stripes" },
  { id: 15, name: "Plain & Textured" },
  { id: 16, name: "Stone Finish" },
  { id: 17, name: "Wood Finish" },
];
const wallpaperCollectionArr = [
  { id: 1, name: "Allure" },
  { id: 2, name: "Altis" },
  { id: 3, name: "Aurora" },
  { id: 4, name: "Aventus" },
  { id: 5, name: "Avenue 8" },
  { id: 6, name: "Best Of Living Walls" },
  { id: 7, name: "Blooming" },
  { id: 8, name: "Brazil" },
  { id: 9, name: "Celebration" },
  { id: 10, name: "Darae 5" },
  { id: 11, name: "Decortex" },
  { id: 12, name: "Deshaj" },
  { id: 13, name: "Deshaj" },
  { id: 14, name: "Divine" },
  { id: 15, name: "Dune" },
  { id: 16, name: "Fiori Country" },
  { id: 17, name: "Floral Impression" },
  { id: 18, name: "Glitz & Glam" },
  { id: 19, name: "Harmony" },
  { id: 20, name: "Hera 5" },
  { id: 21, name: "House Of Turnowsky" },
  { id: 22, name: "Little Love" },
  { id: 23, name: "Metropolitan Stories" },
  { id: 24, name: "Metropolitan Stories II Vol. I" },
  { id: 25, name: "Metropolitan Stories II Vol. II" },
  { id: 26, name: "Metropolitan Stories Travel Styles" },
  { id: 27, name: "Mix & Match 2" },
  { id: 28, name: "Modern & Glam" },
  { id: 29, name: "Modern Bytes" },
  { id: 30, name: "Modernist" },
  { id: 31, name: "My Home My Space" },
  { id: 32, name: "Nature's Ragas" },
  { id: 33, name: "New Walls" },
  { id: 34, name: "Opulence" },
  { id: 35, name: "Paradise" },
  { id: 36, name: "Primo" },
  { id: 37, name: "Reflection" },
  { id: 38, name: "Stone & Natural II" },
  { id: 39, name: "Superhit" },
  { id: 40, name: "Tapestry" },
  { id: 41, name: "Trendy Walls" },
  { id: 42, name: "Versace Iv" },
  { id: 43, name: "Versace V" },
  { id: 44, name: "Wall Art" },
  { id: 45, name: "Wall Fabric" },
];

const flooringCollectionArr = [
  { id: 1, name: "Chevron" },
  { id: 2, name: "Exelam Hdf Laminates" },
  { id: 3, name: "Herringbone Flooring" },
  { id: 4, name: "Luxury Vinyl Planks 1.5 Mm" },
  { id: 5, name: "Spc Floorings 4.0 Mm" },
  { id: 6, name: "Spc Floorings 5.0 Mm" },
];

const typearr = [
  {
    id: 1,
    name: "Heading tape",
  },
  {
    id: 2,
    name: "Slot heading",
  },
  {
    id: 3,
    name: "Tab heading",
  },
  {
    id: 4,
    name: "Eyelet",
  },
  {
    id: 5,
    name: "Curtains, 1 pair",
  },
];

const typeContent = [
  {
    id: 1,
    name: "Sheer curtains, 1 pair",
  },
  {
    id: 2,
    name: "Block-out curtains, 1 pair",
  },
  {
    id: 3,
    name: "Curtain",
  },
  {
    id: 4,
    name: "Iron-on hemming strip",
  },
  {
    id: 5,
    name: "Sound absorbing panel",
  },
  {
    id: 6,
    name: "Tie heading",
  },
];

export {
  srtarr,
  typeContent,
  typearr,
  categoryarr,
  colorarr,
  wallpaperCollectionArr,
  flooringCollectionArr,
  Size,
};
