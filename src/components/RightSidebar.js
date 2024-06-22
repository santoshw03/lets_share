import React from "react";
import { CiSearch } from "react-icons/ci";
import Avatar from "react-avatar";

const RightSidebar = () => {
  return (
    <div className="w-[25%] ml-4">
      <div className="flex items-center p-2 bg-gray-200 rounded-full text-[#cd84f1]">
        <div>
          <CiSearch size={"20px"} />
        </div>
        <input
          className="outline-none bg-transparent ml-1 px-1 border-none "
          type="text"
          placeholder="search"
        />
      </div>
      <div className="p-4 my-3 bg-gray-100 rounded-2xl">
        <h1 className="font-bold text-lg">You may want to Follow</h1>
        <div className="p-1">
          <div>
            <div className="flex items-center ">
              <Avatar
                src="https://imgs.search.brave.com/izLp69hLVyJVX5fDL8TLIcX0WCsrW3an8W02waqxy5c/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNS8w/NS8xNC8xNS81NS9j/aGFyYWN0ZXItNzY2/OTM1XzY0MC5qcGc"
                size="30"
                round={true}
              />
              <div className="ml-2">
                <h2 className="font-semibold">User</h2>
                <p className="text-gray-400 text-sm">@username</p>
              </div>
              <div>
                <button className="px-4 py-1 ml-3 border-none bg-black rounded-full hover:cursor-pointer text-white text-sm">
                  Profile
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="p-1">
          <div>
            <div className="flex items-center ">
              <Avatar
                src="https://imgs.search.brave.com/izLp69hLVyJVX5fDL8TLIcX0WCsrW3an8W02waqxy5c/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNS8w/NS8xNC8xNS81NS9j/aGFyYWN0ZXItNzY2/OTM1XzY0MC5qcGc"
                size="30"
                round={true}
              />
              <div className="ml-2">
                <h2 className="font-semibold">User</h2>
                <p className="text-gray-400 text-sm">@username</p>
              </div>
              <div>
                <button className="px-4 py-1 ml-3 border-none bg-black rounded-full hover:cursor-pointer text-white text-sm">
                  Profile
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="p-1">
          <div>
            <div className="flex items-center ">
              <Avatar
                src="https://imgs.search.brave.com/izLp69hLVyJVX5fDL8TLIcX0WCsrW3an8W02waqxy5c/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNS8w/NS8xNC8xNS81NS9j/aGFyYWN0ZXItNzY2/OTM1XzY0MC5qcGc"
                size="30"
                round={true}
              />
              <div className="ml-2">
                <h2 className="font-semibold">User</h2>
                <p className="text-gray-400 text-sm">@username</p>
              </div>
              <div>
                <button className="px-4 py-1 ml-3 border-none bg-black rounded-full hover:cursor-pointer text-white text-sm">
                  Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
