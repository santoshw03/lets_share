import React from "react";
import Avatar from "react-avatar";
import {
  FaRegCommentDots,
  FaRegHeart,
  FaRegStar,
  FaRegShareSquare,
} from "react-icons/fa";

const Feeling = () => {
  return (
    <div className="border-b border-gray-200">
      <div className="">
        <div className="flex p-4">
          <Avatar
            src="https://imgs.search.brave.com/MQ0lJ7sJn0l3P-tY4aUEI_rQFw9fTY-IWa-5l9gjZo4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1wc2QvM2Qt/aWxsdXN0cmF0aW9u/LWh1bWFuLWF2YXRh/ci1wcm9maWxlXzIz/LTIxNTA2NzExMTYu/anBnP3NpemU9NjI2/JmV4dD1qcGc"
            size="40"
            round={true}
          />
          <div className="ml-2 w-full">
            <div className="flex items-center">
              <h2 className="font-semibold">User</h2>
              <p className="text-gray-400 text-sm ml-1">@username</p>
            </div>
            <div>
              <p>Hello Humans lets share our feelings and connect together </p>
            </div>
            <div className="flex justify-between my-3">
              <div className="flex items-center">
                <div className="p-2 rounded-full cursor-pointer hover:bg-[#cd84f1]">
                  <FaRegCommentDots size={"20px"} />
                </div>
                <p className="">0</p>
              </div>
              <div className="flex items-center">
                <div className="p-2 rounded-full cursor-pointer hover:bg-[#cd84f1]">
                  <FaRegHeart size={"20px"} />
                </div>
                <p className="">0</p>
              </div>
              <div className="flex items-center">
                <div className="p-2 rounded-full cursor-pointer hover:bg-[#cd84f1]">
                  <FaRegShareSquare size={"20px"} />
                </div>
                <p className="">0</p>
              </div>
              <div className="flex items-center">
                <div className="p-2 rounded-full cursor-pointer hover:bg-[#cd84f1]">
                  <FaRegStar size={"20px"} />
                </div>
                <p className="">0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feeling;
