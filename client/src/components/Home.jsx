import { Outlet } from "react-router-dom";
import Header from "./Header";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="mt-16">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;