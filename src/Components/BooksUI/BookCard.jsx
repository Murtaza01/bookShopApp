import { useContext, useRef } from "react";
import BookInfo from "./BookInfo";
import { context } from "../store/CartContext";

export default function BookCard({
  name,
  image,
  price,
  author,
  language,
  description,
  email,
  exchangeable,
  lendable,
  year,
  user,
}) {
  const dialog = useRef();

  const { setItems, setTotalPrice } = useContext(context);

  function addToCart() {
    setItems((prev) => [...prev, { name: name, price: price }]);
    setTotalPrice((prevPrice) => prevPrice + price);
  }

  function openDialog() {
    dialog.current.open();
  }

  function closeDialog() {
    dialog.current.close();
  }
  return (
    <div
      dir={language ? "rtl" : "ltr"}
      className="cardSM  relative flex h-max w-full overflow-hidden border-b-2 border-black pb-2 md:w-72"
    >
      <div className=" sm:center  w-[35%]  sm:w-full">
        <img src={image} alt="" className="h-full sm:h-64 md:h-72 " />
      </div>
      <div
        className={` w-[75%]  space-y-0   ${language ? "pr-2" : "pl-2"}   xs:space-y-2 xs:py-2 sm:grid sm:w-full sm:place-items-center sm:gap-y-1 sm:space-y-0  sm:pl-0  `}
      >
        <div className="col-span-2  flex items-center justify-between  capitalize sm:gap-2">
          <h3 className="headingFont  text-xl font-semibold ">{name}</h3>
          <span className="text-2xl text-[#119735]">{price}$</span>
        </div>
        <p
          className={` ${language ? "normalFont" : "paragraphFont"}   col-span-2 `}
        >
          {author}
        </p>
        <p className="hidden xs:line-clamp-3 sm:hidden ">{description}</p>{" "}
        <span
          onClick={openDialog}
          className="primaryFont col-span-2 block font-semibold text-blue-600 underline hover:cursor-pointer"
        >
          Show More Info
        </span>
        {/* pass the bookcard props into the bookinfo props */}
        <BookInfo
          ref={dialog}
          closeDialog={closeDialog}
          description={description}
          image={image}
          language={language}
          email={email}
          exchangeable={exchangeable}
          lendable={lendable}
          year={year}
          user={user}
        />
      </div>

      <button
        onClick={addToCart}
        className={`button  absolute bottom-[3%] ${language ? "left-[0.2%]" : "right-[0.2%]"} sm:static sm:mx-auto sm:w-[60%]`}
      >
        Add to Cart
      </button>
    </div>
  );
}
