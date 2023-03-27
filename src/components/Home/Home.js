import React from "react";
import HistoryOfStacking from "../HistoryOfStacking/HistoryOfStacking";
import Staking from "../Staking/Staking";
import styles from "./styles.module.css";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        {" "}
        <div className={styles.home}>
          <HistoryOfStacking />
          <Staking />
        </div>
      </div>
    </div>
  );
};

export default Home;
