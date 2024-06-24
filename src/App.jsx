import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Modal from "./components/Modal";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Modal />
    </>
  );
}

export default App;
