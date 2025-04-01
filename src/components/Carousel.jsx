import { useState } from "react";

import { nanoid } from "nanoid";
import { MdNavigateNext } from "react-icons/md";
import { MdOutlineNavigateBefore } from "react-icons/md";

const categories = [
  {
    image: "/public/Categories/Kitchen.jpg",
    title: "Kitchen appliances",
    href: "#",
    id: nanoid(),
  },
  {
    image: "/public/Categories/Books.jpg",
    title: "Books",
    href: "#",
    id: nanoid(),
  },
  {
    image: "/public/Categories/Game.jpg",
    title: "Games",
    href: "#",
    id: nanoid(),
  },
  {
    image: "/public/Categories/Toys.jpg",
    title: "Toys",
    href: "#",
    id: nanoid(),
  },
];

function Carousel() {
  const [step, setStep] = useState(1);

  function handlePrevious() {
    if (step > 1) {
      setStep((step) => step - 1);
    } else {
      setStep(categories.length);
    }
  }
  function handleNext() {
    if (step < categories.length) {
      setStep((step) => step + 1);
    }else{
        setStep(1)
    }
  }
  return (
    <section className="hero">
      <div className="carousel-container">
        <a href="#">
          <img
            src={categories.at(step - 1).image}
            alt={categories.at(step - 1).title}
          />
        </a>
      </div>
      <button className="carousel-btn prev-btn" onClick={handlePrevious}>
        <MdOutlineNavigateBefore />
      </button>
      <button
        className="carousel-btn next-btn"
        onClick={handleNext}
      >
        <MdNavigateNext />
      </button>
    </section>
  );
}

export default Carousel;
