import { Outlet } from "react-router-dom";

import { Header } from "../../components/shared/Header/Header";

import styles from "./Template.module.css";

const Template = () => {
  return (
    <div className="wrapper">
      <Header />

      <main className="main">
        <Outlet />
      </main>

      <footer>footer</footer>
    </div>
  );
};

export default Template;
