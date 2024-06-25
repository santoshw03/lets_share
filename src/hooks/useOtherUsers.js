import axios from "axios";
import { USER_API_END_POINT } from "../utils/constant.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getOtherUsers } from "../redux/userSlice";

const useOtherUsers = (id) => {
  const dispatch = useDispatch();
  useEffect(() => {
    //use this useEffect whenever doing network call
    const fetchOtherUsers = async () => {
      try {
        const res = await axios.get(`${USER_API_END_POINT}/otheruser/${id}`, {
          withCredentials: true,
        });
        console.log(res);
        dispatch(getOtherUsers(res?.data?.otherUser));
      } catch (error) {
        console.log(error);
      }
    };
    fetchOtherUsers();
  }, [id, dispatch]);
};
export default useOtherUsers;
