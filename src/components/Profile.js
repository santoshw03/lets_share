import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import Avatar from "react-avatar";
import { useSelector } from "react-redux";
import useGetProfile from "../hooks/useGetProfile";

const Profile = () => {
  const { user } = useSelector((store) => store.user);
  console.log(user?._id);
  useGetProfile(user?._id);

  return (
    <div className="w-[55%] border-l border-r border-gray-200 p-1">
      <div className="flex justify-between">
        <div className="flex items-center my-1">
          <Link
            to="/"
            className="p-2 rounded-full cursor-pointer hover:bg-[#cd84f1]"
          >
            <IoArrowBack size={"18px"} />
          </Link>
          <div className="ml-4">
            <h1 className="font-semibold">{user.name}</h1>
            <p className="text-gray-600 text-sm">0 posts</p>
          </div>
        </div>
        <div className="">
          <button className=" my-2 px-4 py-1 border border-gray-400   rounded-full hover:bg-[#cd84f1] hover:text-white cursor-pointer">
            Edit Profile
          </button>
        </div>
      </div>
      <div>
        <img
          className="rounded-2xl"
          alt="banner"
          src="https://imgs.search.brave.com/zZVEylRaftD-gtLAyvWIpjcbEBB8AWZpkTFe0tFK5tk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9saWJn/LnMzLnVzLWVhc3Qt/Mi5hbWF6b25hd3Mu/Y29tL2Rvd25sb2Fk/L0NvZGluZy1XZWJz/aXRlLUxheW91dC5q/cGc"
        />
        <div className="absolute top-48 ml-4 border-3 border-white rounded-full">
          <Avatar
            src="https://imgs.search.brave.com/q1X2ovdHgOeivj2xrBohly9NPB-aQGGc7_uYeTJh428/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9vcmFuZ2Utd2hp/dGUtcGljdHVyZS1t/YW4td2l0aC1iZWFy/ZC1zbWlsZV83NDU1/MjgtMTcyOTYuanBn/P3NpemU9NjI2JmV4/dD1qcGc"
            size="100"
            round={true}
          />
        </div>
      </div>
      <div className="flex justify-end p-4">
        <div className="p-1 mr-2">
          <h3>
            <b>0</b>Following
          </h3>
        </div>
        <div className="p-1 mr-2">
          <h3>
            <b>0</b>Followers
          </h3>
        </div>
      </div>
      <div className="my-2 p-3 border-b border-gray-200">
        <div>
          <h1 className="text-lg font-bold ">{user.name}</h1>
          <p className="text-gray-600">@{user.username}</p>
        </div>
        <p className="text-sm text-gray-900">
          Bio | Bio Bio | Bio Bio | Bio Bio | Bio Bio | Bio Bio | Bio Bio | Bio
          Bio | Bio Bio | Bio Bio | Bio Bio | Bio Bio | Bio Bio | Bio Bio | Bio
          Bio | Bio Bio | Bio
        </p>
      </div>
    </div>
  );
};

export default Profile;
