import React, { Component} from "react";
import styles from "../styles/app.css";
import Table from './Table.js';

class App extends Component{
  render() {
    return (
      <div className={styles.App} >
        <h1> Page header </h1>
        <Table/>
        <div style={{backgroundImage: `url(/assets/images/Cuscuta.jpg)`,width:'600px', height: '399px'}}></div>
      </div>
    );
  }
}

export default App;