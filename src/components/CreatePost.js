import React from "react";
import Avatar from "react-avatar";
import { FaImage } from "react-icons/fa6";

const CreatePost = () => {
  return (
    <div className="">
      <div className="">
        <div className="flex items-center justify-evenly border-b border-gray-200">
          <div className="cursor-pointer hover:bg-gray-200 w-full text-center py-2">
            <h1 className="font-semibold text-gray-600 text-lg">For you</h1>
          </div>
          <div className="cursor-pointer hover:bg-gray-200 w-full text-center py-2">
            <h1 className="font-semibold text-gray-600 text-lg">Following</h1>
          </div>
        </div>
        <div>
          <div className="flex items-center p-4">
            <div>
              <Avatar
                src="https://imgs.search.brave.com/Y6ZAxHCR_uwFVvFyZZapcdVI0vOKUR8lN0TT21o_rpk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi95b3Vu/Zy1ib3ktc2l0dGlu/Zy1mcm9udC1sYXB0/b3AtY29tcHV0ZXIt/dG9wLXdvb2Rlbi10/YWJsZS1nZW5lcmF0/aXZlLWFpLTI4Njgw/ODUyNy5qcGc"
                size="40"
                round={true}
              />
            </div>
            <input
              className="w-full outline-none text-lg ml-2"
              type="text"
              placeholder="Share your Feelings"
            />
          </div>
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div>
              <FaImage className="text-[#cd84f1]" />
            </div>
            <button className=" my-2 px-4 py-2 border-none bg-[#cd84f1] rounded-full hover:cursor-pointer text-white font-bold">
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
