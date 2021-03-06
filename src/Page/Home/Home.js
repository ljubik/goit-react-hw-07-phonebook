import React, { Component } from "react";
// import axios from "axios";
import Navigate from "../../components/Navigation/Navigation";
import App from "../../App";
import Navigation from '../../components/Navigation/Navigation';
import navLinks from '../..//db/naviate.json';
import style from "./Home.module.css";


class Home extends Component {
  state = {
    msg: "Please register or login",
  };

  componentDidUpdate(prevProps, prevState) {
    // console.log(`Я обновился`, this.state.query);

  }

  componentWillUnmount() {
    // console.log(`Я пошел спать`);
  }



  render() {
    const pathUrl = this.props.match.url;
    // console.log(pathUrl);
    const { msg } = this.state;

    return (
      <div className={style.home}>
      <Navigation links={navLinks} />
      {/* <Navigate /> */}
        {/* <App  /> */}
        {msg && <p>{msg}</p>}
      </div>
    );
  }
}

export default Home;
