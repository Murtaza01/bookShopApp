import { useState, useEffect, useRef, useContext } from "react";
import openBook from "../assets/images/open-book.gif";
import { FaShoppingCart } from "react-icons/fa";
import { context } from "./store/CartContext";
import Cart from "./Cart";

export default function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrolledY, setLastScrolledY] = useState(0);
  const dialog = useRef();
  const { items } = useContext(context);

  function onScroll() {
    if (window.scrollY > lastScrolledY) {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }
    setLastScrolledY(window.scrollY);
  }
  useEffect(() => {
    addEventListener("scroll", onScroll);

    return () => {
      removeEventListener("scroll", onScroll);
    };
  });

  function openCart() {
    dialog.current.open();
  }
  function closeCart() {
    dialog.current.close();
  }

  return (
    <>
      <header
        className={`fixed z-50  ${showHeader ? "top-0" : "top-[-80px]"} h-20 w-full bg-white px-5  text-xl shadow-md transition-all duration-300`}
      >
        <div className="relative flex h-full items-center justify-between ">
          <a href="#" className="">
            <span className="">
              <img src={openBook} alt="" className="w-[70px] " />
            </span>
          </a>
          <a href="#" onClick={openCart} className="activeButton">
            <span className="center headingFont gap-4 rounded-sm border-[1px] border-black/50 px-3 py-1 shadow-sm ">
              {" "}
              Cart ({items.length})
              <FaShoppingCart className="text-lg text-[#00A9FF]" />
            </span>
          </a>
        </div>

        <Cart ref={dialog} closeCart={closeCart} />
      </header>
    </>
  );
}
