import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { MdOutlineMail } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const BookInfo = forwardRef(
  (
    {
      closeDialog,
      description,
      image,
      language,
      email,
      exchangeable,
      lendable,
      year,
      user,
    },
    ref,
  ) => {
    const [notify, setNotify] = useState(false);
    const dialog = useRef();

    useImperativeHandle(ref, () => {
      return {
        open() {
          dialog.current.showModal();
          document.querySelector("body").style.overflowY = "hidden";
        },
        close() {
          dialog.current.close();
          document.querySelector("body").style.overflowY = "scroll";
        },
      };
    });

    function copyClipBoard() {
      navigator.clipboard.writeText(email);

      setNotify(true);
      setTimeout(() => {
        setNotify(false);
      }, 2000);
    }
    return createPortal(
      <dialog
        onKeyDown={(e) => e.key === "Escape" && e.preventDefault()}
        dir={language ? "rtl" : "ltr"}
        ref={dialog}
        className=" relative backdrop:backdrop-blur-sm"
      >
        <div className="center2 fixed h-[80vh]  min-w-[85%] overflow-hidden rounded-sm bg-white px-1 shadow-lg shadow-black/40  outline-none    ">
          <div className="relative mx-auto h-[96%] w-[98%]  space-y-5 ">
            <figure
              className={`mx-auto my-1  w-[35%] max-w-[180px] shadow-md shadow-black sm:mb-3  sm:max-w-[250px]  ${language ? "sm:float-right" : "sm:float-left"} `}
            >
              <img src={image} alt="" className="" />
            </figure>

            <div className="flex flex-col sm:mt-3 sm:space-y-2 sm:p-2 sm:text-lg">
              <p>{description}</p>
              <p className=" font-semibold">
                {language ? "سنة النشر:" : "Publish year:"}
                <span className="ml-2 font-normal">{year}</span>
              </p>
              <p className=" font-semibold">
                {language ? "قام بلرفع:" : "Uploaded By:"}
                <span className="ml-2 font-normal">{user}</span>
              </p>
              <span className="font-semibold capitalize">
                {language
                  ? "تواصل مع المستخدم للحصول على الكتاب: "
                  : "Contact the User to get the book: "}
                <button onClick={copyClipBoard}>
                  <MdOutlineMail className="inline text-2xl text-[#00A9FF]" />
                </button>
              </span>
            </div>
            <div className="secondaryFont absolute bottom-2 flex w-full justify-center gap-5 text-lg   ">
              <span
                className={`availableButton ${exchangeable ? "available " : "notAvailable"} `}
              >
                {language ? "استبدال" : "Exchangeable"}
              </span>
              <span
                className={`availableButton ${lendable ? "available " : "notAvailable"}`}
              >
                {language ? "اعارة" : "Lendable"}
              </span>
            </div>
          </div>
          <button
            className={`absolute ${language ? "left-0 top-0" : "right-0 top-0"}   bg-[#00A9FF] text-2xl text-white shadow-md  xs:text-3xl`}
            onClick={closeDialog}
          >
            <FaXmark />
          </button>
        </div>
        <div
          className={`center transition-transform duration-300 ${notify ? "translate-y-[0]" : "translate-y-[100px]"}  fixed bottom-2  left-[50%] min-h-10 w-[350px] translate-x-[-50%]  gap-3 rounded-sm   ${language ? " border-r-4 border-r-[#119735]" : " border-l-4 border-l-[#119735]"} bg-white px-2 shadow-md shadow-black`}
        >
          <FaCheckCircle className=" text-[#119735]" />
          <p className="">
            {language
              ? "نسخ الايميل الى الحافظة "
              : "Email has been Copied to Clipboard"}
          </p>
        </div>
      </dialog>,
      document.getElementById("bookModal"),
    );
  },
);

export default BookInfo;
