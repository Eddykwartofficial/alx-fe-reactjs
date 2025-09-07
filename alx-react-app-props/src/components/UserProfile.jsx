import { createContext, useContext } from "react";
// 1. Create the Context
const UserContext = createContext(null);

// 2. Define the components
const UserProfile = () => {
  const { name, bio } = useContext(UserContext);
};
export default UserProfile;
