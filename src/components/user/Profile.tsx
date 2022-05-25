import Header from "../header/Header";

const Profile = () => {
  return (
    <div className="page-container">
      <Header />
      <form>
        {" "}
        <h2>User Profile</h2>
        <h3>username:</h3>
        <h3>phone: </h3>
      </form>
    </div>
  );
};

export default Profile;
