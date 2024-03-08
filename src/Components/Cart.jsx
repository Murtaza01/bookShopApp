import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
  useContext,
} from "react";
import { createPortal } from "react-dom";
import { context } from "./store/CartContext";
import { FaXmark } from "react-icons/fa6";
import { FaCircleXmark } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";

const messages = [
  "this functionality doesn't work",
  "clicking the button again  won't help",
];

let i = 0;

const Cart = forwardRef(({ closeCart }, ref) => {
  const [notify, setNotify] = useState(false);
  const [message, setMessage] = useState();
  const dialog = useRef();
  const { items, setItems, totalPrice, setTotalPrice } = useContext(context);

  function ShowMessage() {
    console.log(items);

    const shownMessage = messages[i];
    setMessage(shownMessage);
    i++;
    if (i >= messages.length) i = 0;

    setNotify(true);

    setTimeout(() => {
      setNotify(false);
    }, 3000);
  }

  function removeItem(index, price) {
    setItems((prvItems) => prvItems.toSpliced(index, 1));
    setTotalPrice((prvPrice) => prvPrice - price);
  }

  useImperativeHandle(ref, () => {
    return {
      close() {
        dialog.current.close();
        document.querySelector("body").style.overflowY = "scroll";
      },
      open() {
        dialog.current.showModal();
        document.querySelector("body").style.overflowY = "hidden";
      },
    };
  });

  return createPortal(
    <>
      <dialog
        onKeyDown={(e) => e.key === "Escape" && e.preventDefault()}
        ref={dialog}
        className="relative backdrop:backdrop-blur-sm"
      >
        <div className="center2  fixed min-h-[40%] w-[90%] rounded-sm border-none  bg-white p-2 pb-12 shadow-md shadow-black/40 outline-none xs:w-96  ">
          <h3 className="secondaryFont mb-3 text-2xl font-semibold">
            Your Cart
          </h3>
          {/* loop over the items and create a paragraph that has the cart items */}
          <div className=" space-y-2 ">
            {items.length >= 1 ? (
              items.map(({ name, price }, index) => {
                return (
                  <div
                    key={index}
                    className="secondaryFont flex max-h-max min-h-8 items-center justify-between rounded-md border-b-2 border-black bg-blue-200 px-2 "
                  >
                    <p className="space-x-2">
                      <span className="capitalize">{name}</span>
                      <span className="text-[#119735]">{price}$</span>
                    </p>

                    <button onClick={() => removeItem(index, price)}>
                      <FaRegTrashAlt className="text-xl text-red-600" />
                    </button>
                  </div>
                );
              })
            ) : (
              <p className="paragraphFont text-center text-lg capitalize">
                no cart items selected
              </p>
            )}
          </div>

          <div className=" absolute bottom-[1%] flex w-[97%] justify-between px-1  pb-1 ">
            <h4 className="faqFont   text-xl ">
              Total Price :{" "}
              <span className="secondaryFont  text-[#119735]">
                {totalPrice}$
              </span>
            </h4>
            <button
              onClick={ShowMessage}
              className="rounded-md  bg-[#00A9FF] px-2 text-white shadow-sm"
            >
              Check out
            </button>
          </div>

          <button
            className={`absolute right-0 top-0 rounded-sm bg-[#00A9FF] text-2xl text-white shadow-md  xs:text-2xl`}
            onClick={closeCart}
          >
            <FaXmark />
          </button>
        </div>
        <div
          className={`center fixed  translate-x-[-50%] ${notify ? "translate-y-[-30px]" : "translate-y-[50px]"} bottom-0 left-[50%] min-h-10 w-[350px]    gap-3 rounded-sm border-l-4
             border-red-500   bg-white px-2  shadow-md shadow-black transition-transform duration-300`}
        >
          <FaCircleXmark className=" text-lg text-red-500" />
          <p className="capitalize ">{message}</p>
        </div>
      </dialog>
    </>,
    document.getElementById("cartModal"),
  );
});

export default Cart;
