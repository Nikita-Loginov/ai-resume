import { Outlet } from "react-router-dom";

import { Header } from "../../components/shared/Header/Header";

const Template = () => {
  return (
    <div className="wrapper">
      <Header />

      <main className="main">
        <Outlet />
      </main>
    </div>
  );
};

export default Template;
