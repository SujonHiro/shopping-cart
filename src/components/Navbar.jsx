import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TbShoppingBag } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const cart = useSelector((state) => state.cart);

  return (
    <>
      <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
        <nav
          className="mt-6 relative max-w-[45rem] w-full bg-white border border-gray-200 rounded-[36px] mx-2 py-3 px-4 md:flex md:items-center md:mx-auto md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto "
          aria-label="Global"
        >
          <div className="flex items-center justify-between">
            <a
              className="flex-none text-xl font-semibold"
              href="/"
              aria-label="Brand"
            >
              ShoppingCart
            </a>
            <div className="md:hidden">
              <button
                onClick={() => setOpen(!open)}
                type="button"
                className="hs-collapse-toggle size-8 flex justify-center items-center text-sm font-semibold rounded-full border border-gray-200 text-gray-800 "
                data-hs-collapse="#navbar-collapse-with-animation"
                aria-controls="navbar-collapse-with-animation"
                aria-label="Toggle navigation"
              >
                {open ? (
                  <IoClose size={25} />
                ) : (
                  <svg
                    className="hs-collapse-open:hidden flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="3" x2="21" y1="6" y2="6" />
                    <line x1="3" x2="21" y1="12" y2="12" />
                    <line x1="3" x2="21" y1="18" y2="18" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div
            id="navbar-collapse-with-animation"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
          >
            <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:ps-7">
              <Link
                className="font-medium  hover:text-green-600 md:py-6 "
                to={"/"}
              >
                Home
              </Link>
              <Link
                className="flex items-center gap-1 font-medium  hover:text-green-600 md:py-6 "
                to={"/cart"}
              >
                Cart
                <TbShoppingBag size={20} className="border-green-500" />
                {cart.length > 0 ? (
                  <div className=" bg-green-600 w-5 h-5 rounded-full -ml-3 -mt-3">
                    <span className="flex justify-center text-white">
                      {cart.length}
                    </span>
                  </div>
                ) : null}
              </Link>

              <a
                className="flex items-center gap-x-2 font-medium  hover:text-green-600 md:border-s md:border-gray-300 md:my-6 md:ps-6 "
                href="#"
              >
                <svg
                  className="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                Log in
              </a>
            </div>
          </div>
          <div>
            {/*Mobile view*/}
            {open ? (
              <div className="md:hidden ml-5 flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:ps-7">
                <Link
                  className="font-medium  hover:text-green-600 md:py-6 "
                  to={"/"}
                >
                  Home
                </Link>
                <Link
                  className="flex items-center gap-1 font-medium  hover:text-green-600 md:py-6 "
                  to={"/cart"}
                >
                  Cart
                  <TbShoppingBag size={20} className="border-sky-500" />
                </Link>

                <a
                  className="flex items-center gap-x-2 font-medium  hover:text-green-600 md:border-s md:border-gray-300 md:my-6 md:ps-6 "
                  href="#"
                >
                  <svg
                    className="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  Log in
                </a>
              </div>
            ) : null}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
