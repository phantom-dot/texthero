import Navbar from "../components/Navbar";
import Textform from "../components/Textform";
import "./styles.css";

export default function App() {
  return (
    <>
      <Navbar title="TextHero" />
      <div className="container mt-5">
        <Textform />
      </div>
    </>
  );
}
