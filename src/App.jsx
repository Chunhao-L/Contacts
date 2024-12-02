import { useEffect, useState } from "react";
import styles from './App.module.css'
import { Table } from "./components/Table/Table";
import { Navbar } from "./components/Navbar/Navbar";

export default function App() {

  return (

    <div className={styles.App}>
      <Navbar />
      <Table />

    </div>

  );

}

