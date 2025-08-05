import LandingPage from "./LandingPage";
import Dashboard from "./Dashboard";
import { useDisplayStore } from "@/store/useDisplayStore";

const Home = () => {
  const isVisible = useDisplayStore((state) => state.isVisible);
  // const toggleVisibility = useDisplayStore((state) => state.toggleVisibility);

  return (
   <>
     {!isVisible && (<LandingPage />)}
     {isVisible && (<Dashboard />)}
   </>
  );
};

export default Home;
