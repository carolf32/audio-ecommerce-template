import RoutesMain from "./routes/RoutesMain";
import "./styles/index.css";
import { register } from "swiper/element/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

register();

const App = () => {
  return (
    <div>
      <ToastContainer />
      <RoutesMain />
    </div>
  );
};

export default App;
