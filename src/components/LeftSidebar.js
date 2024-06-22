import React from "react";

import { IoHome, IoLogOut } from "react-icons/io5";
import { FaSearch, FaUser, FaStar } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { Link } from "react-router-dom";
const LeftSidebar = () => {
  return (
    <div className="w-[20%] mr-4">
      <div>
        <div>
          <img
            className="ml-2"
            width={"50px"}
            src="https://imgs.search.brave.com/GGzstaFM3flip3QKkaLDNOj7clSWIq1m0QMXH89U5FY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJzLzEwMzIx/NTA0L3NjcmVlbnNo/b3RzLzE3NTU2MTUx/L21lZGlhLzQyYmYx/OWU4NjgyZGQ2MGY4/YTZjNWRlODAzYWRi/OTI5LmpwZz9yZXNp/emU9NDAweDA"
            alt="Logo"
          />
        </div>
        <div>
          <Link
            to="/"
            className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full hover:cursor-pointer"
          >
            <div>
              <IoHome size={"22px"} />
            </div>
            <h1 className="font-semibold text-lg ml-2">Home</h1>
          </Link>
        </div>
        <div>
          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full hover:cursor-pointer">
            <div>
              <FaSearch size={"20px"} />
            </div>
            <h1 className="font-semibold text-lg ml-2">Explore</h1>
          </div>
          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full hover:cursor-pointer">
            <div>
              <IoIosNotifications size={"24px"} />
            </div>
            <h1 className="font-semibold text-lg ml-2">Notifications</h1>
          </div>
          <Link
            to="/profile"
            className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full hover:cursor-pointer"
          >
            <div>
              <FaUser size={"24px"} />
            </div>
            <h1 className="font-semibold text-lg ml-2">Profile</h1>
          </Link>
          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full hover:cursor-pointer">
            <div>
              <FaStar size={"24px"} />
            </div>
            <h1 className="font-semibold text-lg ml-2">Bookmarks</h1>
          </div>
          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full hover:cursor-pointer">
            <div>
              <IoLogOut size={"24px"} />
            </div>
            <h1 className="font-semibold text-lg ml-2">Logout</h1>
          </div>
          <button className=" my-2 px-4 py-2 border-none bg-[#cd84f1] w-full rounded-full hover:cursor-pointer text-white font-bold">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
