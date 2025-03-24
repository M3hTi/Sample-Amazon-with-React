import Header from "./Header";
import Body from "./Body";

import "./App.css";

const products = [
  {
    image: "/public/athletic-cotton-socks-6-pairs.png",
    name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
    rating: {
      stars: 4.5,
      count: 87,
    },
    priceCents: 1090,
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
  },
  {
    image: "/public/intermediate-composite-basketbal.png",
    name: "Intermediate Size Basketball",
    rating: {
      stars: 4,
      count: 127,
    },
    priceCents: 2095,
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
  },
  {
    image: "/public/adults-plain-cotton-tshirt-2-pac.png",
    name: "Adults Plain Cotton T-Shirt - 2 Pack",
    rating: {
      stars: 4.5,
      count: 56,
    },
    priceCents: 799,
    id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
  },
  {
    image: "/public/black-2-slot-toaster.png",
    name: "2 Slot Toaster - Black",
    rating: {
      stars: 5,
      count: 2197,
    },
    priceCents: 1899,
    id: "54e0eccd-8f36-462b-b68a-8182611d9add",
  },
  {
    image: "/public/6-piece-white-dinner-plate-set.png",
    name: "6 Piece White Dinner Plate Set",
    rating: {
      stars: 4,
      count: 37,
    },
    priceCents: 2067,
    id: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
  },
  {
    image: "/public/6-piece-non-stick-baking-set.png",
    name: "6-Piece Nonstick, Carbon Steel Oven Bakeware Baking Set",
    rating: {
      stars: 4.5,
      count: 175,
    },
    priceCents: 3499,
    id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
  },
  {
    image: "/public/plain-hooded-fleece-sweatshirt-y.png",
    name: "Plain Hooded Fleece Sweatshirt",
    rating: {
      stars: 4.5,
      count: 317,
    },
    priceCents: 2400,
    id: "dd82ca78-a18b-4e2a-9250-31e67412f98d",
  },
  {
    image: "/public/luxury-tower-set-6-piece.png",
    name: "Luxury Towel Set - Graphite Gray",
    rating: {
      stars: 4.5,
      count: 144,
    },
    priceCents: 3599,
    id: "77919bbe-0e56-475b-adde-4f24dfed3a04",
  },
];

function App() {
  return (
    <>
      <Header />
      <Body />
    </>
  );
}

export default App;
