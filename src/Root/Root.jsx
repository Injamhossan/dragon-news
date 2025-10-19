import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router";
import LatestNews from "../components/LatestNews/LatestNews";
import Header from "../components/Header/Header";
import LeftAside from "../layouts/HomeLayout/LeftAside";
import RightAside from "../layouts/HomeLayout/RightAside";

const Root = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <section className="w-9/12 mx-auto">
          <LatestNews></LatestNews>
        </section>
      </header>
      <Navbar></Navbar>
      <main className="w-11/12 mx-auto my-3 grid grid-cols-12 gap-5">
        <aside className="col-span-3">
          <LeftAside></LeftAside>
        </aside>
        <section className="main col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default Root;
