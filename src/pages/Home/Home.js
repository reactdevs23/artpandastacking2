import React from "react";
import HistoryOfStacking from "../../components/HistoryOfStacking/HistoryOfStacking";
import Staking from "../../components/Staking/Staking";
import style from "./home.module.css";

const Home = () => {
  return (
    <div className={style.mainWrapper}>
      <div className="container">
        {" "}
        <div className={style.home}>
          <HistoryOfStacking />
          <Staking />
        </div>
      </div>
    </div>
  );
};

export default Home;
