import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../store/store";
import { fetchUsers } from "../../store/usersSlice";
import Header from "../header/Header";

const Profile = () => {
  
  const dispatch = useAppDispatch();
  const { usersData } = useSelector((state: any) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="page-container">
      <Header />
      <form>
        <h2>User Profile</h2>
        <h3>username: </h3>
        <h3>name:</h3>
        <h3>phone: </h3>
      </form>
    </div>
  );
};

export default Profile;
