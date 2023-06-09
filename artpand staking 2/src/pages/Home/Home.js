import React from "react";
import HistoryOfStacking from "../../components/HistoryOfStacking/HistoryOfStacking";
import Staking from "../../components/Staking/Staking";
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
