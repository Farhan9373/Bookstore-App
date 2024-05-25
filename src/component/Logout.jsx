import React from "react";
import { useauth } from "../context/AutoProvider";
import toast from "react-hot-toast";

const Logout = () => {
  const [authUser, setAuthUser] = useauth();

  const handleLogout = () => {
    try {
      // Clear user information
      setAuthUser(null);

      // Clear user data from localStorage
      localStorage.removeItem("Users");

      toast.success("Logout successful");

      // Redirect to home page or perform any other necessary actions
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (err) {
      console.error(err);
      toast.error("An error occurred during logout");
    }
  };

  return (
    <button
      className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
};

export default Logout;

