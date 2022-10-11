import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CgMenuRight, CgClose } from "react-icons/cg";

const Header = () => {
  const navlink = [
    {
      title: "Home",
      to: "/home",
    },
    {
      title: "Shop",
      to: "/shop",
    },
    {
      title: "Order Review",
      to: "/orderReview",
    },
    {
      title: "Manage Inventory here",
      to: "/manageinventoryhere",
    },
    {
      title: "Friends",
      to: "/friends",
    },
  ];
  const [toggle, setToggle] = useState(false);

  return (
    <div className=" bg-green-500">
      <div
        className="sm:hidden  cursor-pointer w-8 relative"
        onClick={() => {
          setToggle((prev) => !prev);
        }}
      >
        {toggle ? (
          <CgClose className="text-3xl text-white" />
        ) : (
          <CgMenuRight className="text-3xl text-white" />
        )}
      </div>
      <ul
        className={` sm:flex justify-center bg-green-500 absolute sm:static  duration-200 ease-in-out ${
          toggle ? " top-[30px] " : "top-[-500px]"
        }`}
      >
        {navlink.map((nav) => {
          return (
            <li className="p-5">
              <NavLink
                to={nav.to}
                className={({ isActive }) =>
                  isActive ? "text-white border-b" : undefined
                }
              >
                {nav.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Header;
