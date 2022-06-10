import "./App.css";
import "./store/font.css";
import Header from "./Header/Header";
import { Bag, Cover } from "./Header/Bag";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Cover />
      <Bag />
      <Body />
      <Footer />
    </>
  );
}
export default App;
