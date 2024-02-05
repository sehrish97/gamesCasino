import "./App.css";
import Routing from "./routes";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
// import checkAuth from "./checkAuth";

//Theme Setting
import ThemeCustomization from "./themes";




function App() {
  // const Routes = checkAuth(Routing);
  return (
    <>
      <ThemeCustomization>
        <Routing/>
        <ToastContainer position="bottom-right" toastClassName="rounded-xl"  />
      </ThemeCustomization>
    </>
  );
}

export default App;
