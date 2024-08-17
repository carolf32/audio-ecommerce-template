import RoutesMain from "./routes/RoutesMain";
import "./styles/index.css";
import { register } from "swiper/element/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

register();

const App = () => {
  return (
    <div>
      <RoutesMain />
    </div>
  );
};

export default App;
