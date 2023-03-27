import React from "react";
import HistoryOfStacking from "../HistoryOfStacking/HistoryOfStacking";
import Staking from "../Staking/Staking";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <HistoryOfStacking />
      <Staking />
    </div>
  );
};

export default Home;
