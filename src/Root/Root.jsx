import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router";
import LatestNews from "../components/LatestNews/LatestNews";
import Header from "../components/Header/Header";

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
      <main>
        <section className="left_nav"></section>
        <section className="main">
          <Outlet></Outlet>
        </section>
        <section className="right_nav"></section>
      </main>
    </div>
  );
};

export default Root;
