import React, { Component } from "react";
import { Animated } from "react-animated-css";
import classes from "./App.module.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.myRef = React.createRef();
    this.myRefs = React.createRef();
  }
  state = {
    row1col1: true,
    row2col2: false,
    row2col1: false,
    row2col3: false,
    row3col1: false,
    row3col2: false,
    row3col3: false,
    row3col4: false,
    row4col1: false,
    row4col2: false,
    row4col3: false,
    row4col4: false,
    row4col5: false,
    row5col1: false,
    row5col2: false,
    row5col3: false,
    row5col4: false,
    row5col5: false,
    row5col6: false,
    row6col1: false,
    row6col2: false,
    row6col3: false,
    row6col4: false,
    row6col5: false,
    row6col6: false,
    row6col7: false,
    row6col8: false,
    row7col1: false,
    row7col2: false,
    row7col3: false,
    row7col4: false,
    row7col5: false,
    row7col6: false,
    row7col7: false,
    row8col1: false,
    row8col2: false,
    row8col3: false,
    row8col4: false,
    row8col5: false,
    row8col6: false,
    row8col7: false,
    row9col1: false,
    row9col2: false,
    row9col3: false,
    row9col4: false,
    row9col5: false,
  };

  render() {
    var dict = {};
    dict["row1col1"] = {
      id: "row1col1",
      text: "Quelle est",
      color: "yellow",
      parentNode: "yellow",
      blueChilds: [],
      yellowChilds: ["row2col1", "row2col2", "row2col3"],
      display: true,
      style: {
        width: "70px",
        background:
          "linear-gradient(56deg, rgba(55,204,245,1) 0%, rgba(78,161,249,1) 54%, rgba(102,119,254,1) 100%)",
        border: "0",
        position: "absolute",
        top: "0px",
        left: "900px",
      },
    };
    dict["row2col1"] = {
      id: "row2col1",
      text: "notre enterprise",
      color: "yellow",
      parentNode: "yellow",
      blueChilds: [],
      yellowChilds: ["row3col1"],
      display: this.state.row2col1,
      style: {
        width: "70px",
        border: "0",
        background:
          "linear-gradient(56deg, rgba(171,230,204,1) 0%, rgba(152,200,214,1) 54%, rgba(132,169,224,1) 100%)",
        border: "0",
        position: "absolute",
        top: "70px",
        left: "400px",
      },
    };
    dict["row2col2"] = {
      id: "row2col2",
      text: "nous southaitons",
      color: "yellow",
      parentNode: "yellow",
      blueChilds: [],
      yellowChilds: ["row3col2", "row3col3"],
      display: this.state.row2col2,
      style: {
        width: "70px",
        border: "0",
        background:
          "linear-gradient(56deg, rgba(240,204,57,1) 0%, rgba(247,173,57,1) 54%, rgba(254,143,58,1) 100%)",
        border: "0",
        position: "absolute",
        top: "70px",
        left: "900px",
      },
    };
    dict["row2col3"] = {
      id: "row2col3",
      text: "nous sommes",
      color: "yellow",
      parentNode: "yellow",
      blueChilds: [],
      yellowChilds: ["row3col4"],
      display: this.state.row2col3,
      style: {
        width: "70px",
        border: "0",
        background:
          "linear-gradient(56deg, rgba(205,238,115,1) 0%, rgba(132,226,133,1) 54%, rgba(64,213,152,1) 100%)",
        border: "0",
        position: "absolute",
        top: "70px",
        left: "1400px",
      },
    };
    dict["row3col1"] = {
      id: "row3col1",
      text: "La menace",
      color: "yellow",
      parentNode: "yellow",
      blueChilds: ["row4col1", "row4col2"],
      yellowChilds: [],
      display: this.state.row3col1,
      style: {
        width: "70px",
        border: "0",
        background:
          "linear-gradient(56deg, rgba(234,68,138,1) 0%, rgba(232,69,106,1) 54%, rgba(232,71,78,1) 100%)",
        border: "0",
        position: "absolute",
        top: "140px",
        left: "400px",
      },
    };
    dict["row3col2"] = {
      id: "row3col2",
      text: "Suite a des",
      color: "yellow",
      parentNode: "yellow",
      blueChilds: [],
      yellowChilds: ["row4col3"],
      display: this.state.row3col2,
      style: {
        width: "70px",
        border: "0",
        background:
          "linear-gradient(56deg, rgba(55,204,245,1) 0%, rgba(78,161,249,1) 54%, rgba(102,119,254,1) 100%)",
        position: "absolute",
        top: "140px",
        left: "700px",
      },
    };
    dict["row3col3"] = {
      id: "row3col3",
      text: "A titre preventif",
      color: "yellow",
      parentNode: "yellow",
      blueChilds: [],
      yellowChilds: ["row4col4"],
      display: this.state.row3col3,
      style: {
        width: "70px",
        border: "0",
        background:
          "linear-gradient(56deg, rgba(171,230,204,1) 0%, rgba(152,200,214,1) 54%, rgba(132,169,224,1) 100%)",
        position: "absolute",
        top: "140px",
        left: "1100px",
      },
    };
    dict["row3col4"] = {
      id: "row3col4",
      text: "L'intervention",
      color: "yellow",
      parentNode: "yellow",
      blueChilds: ["row4col5"],
      yellowChilds: [],
      display: this.state.row3col4,
      style: {
        width: "70px",
        border: "0",
        background:
          "linear-gradient(56deg, rgba(240,204,57,1) 0%, rgba(247,173,57,1) 54%, rgba(254,143,58,1) 100%)",
        position: "absolute",
        top: "140px",
        left: "1400px",
      },
    };
    dict["row4col1"] = {
      id: "row4col1",
      text: "Oui",
      color: "blue",
      parentNode: "yellow",
      blueChilds: [],
      yellowChilds: ["row5col1"],
      display: this.state.row4col1,
      style: {
        width: "70px",
        border: "0",
        background:
          "linear-gradient(56deg, rgba(205,238,115,1) 0%, rgba(132,226,133,1) 54%, rgba(64,213,152,1) 100%)",
        position: "absolute",
        top: "210px",
        left: "300px",
      },
    };
    dict["row4col2"] = {
      id: "row4col2",
      text: "Non mais",
      color: "blue",
      parentNode: "yellow",
      blueChilds: [],
      yellowChilds: ["row5col2"],
      display: this.state.row4col2,
      style: {
        width: "70px",
        border: "0",
        background:
          "linear-gradient(56deg, rgba(234,68,138,1) 0%, rgba(232,69,106,1) 54%, rgba(232,71,78,1) 100%)",
        position: "absolute",
        top: "210px",
        left: "500px",
      },
    };
    dict["row4col3"] = {
      id: "row4col3",
      text: "It est urgent",
      color: "yellow",
      parentNode: "yellow",
      blueChilds: ["row5col3"],
      yellowChilds: [],
      display: this.state.row4col3,
      style: {
        width: "70px",
        border: "0",
        background:
          "linear-gradient(56deg, rgba(171,230,204,1) 0%, rgba(152,200,214,1) 54%, rgba(132,169,224,1) 100%)",
        position: "absolute",
        top: "210px",
        left: "700px",
      },
    };
    dict["row4col4"] = {
      id: "row4col4",
      text: "Avez-vous",
      color: "yellow",
      parentNode: "yellow",
      blueChilds: ["row5col4", "row5col5"],
      yellowChilds: [],
      display: this.state.row4col4,
      style: {
        width: "70px",
        border: "0",
        background:
          "linear-gradient(56deg, rgba(171,230,204,1) 0%, rgba(152,200,214,1) 54%, rgba(132,169,224,1) 100%)",
        position: "absolute",
        top: "210px",
        left: "1100px",
      },
    };
    dict["row4col5"] = {
      id: "row4col5",
      text: "Estuite une",
      color: "blue",
      parentNode: "yellow",
      blueChilds: ["row5col6"],
      yellowChilds: [],
      display: this.state.row4col5,
      style: {
        width: "70px",
        border: "0",
        background:
          "linear-gradient(56deg, rgba(55,204,245,1) 0%, rgba(78,161,249,1) 54%, rgba(102,119,254,1) 100%)",
        position: "absolute",
        top: "210px",
        left: "1400px",
      },
    };
    dict["row5col1"] = {
      id: "row5col1",
      text: "Avez-vous",
      color: "yellow",
      parentNode: "blue",
      blueChilds: ["row6col1", "row6col2"],
      yellowChilds: [],
      display: this.state.row5col1,
      style: {
        width: "70px",
        border: "0",
        background:
          "linear-gradient(56deg, rgba(205,238,115,1) 0%, rgba(132,226,133,1) 54%, rgba(64,213,152,1) 100%)",
        position: "absolute",
        top: "280px",
        left: "300px",
      },
    };
    dict["row5col2"] = {
      id: "row5col2",
      text: "Connaissez-vous",
      color: "yellow",
      parentNode: "blue",
      blueChilds: ["row6col3", "row6col4"],
      yellowChilds: [],
      display: this.state.row5col2,
      style: {
        width: "70px",
        border: "0",
        background:
          "linear-gradient(56deg, rgba(234,68,138,1) 0%, rgba(232,69,106,1) 54%, rgba(232,71,78,1) 100%)",
        position: "absolute",
        top: "280px",
        left: "500px",
      },
    };
    dict["row5col3"] = {
      id: "row5col3",
      text: "La threat",
      color: "blue",
      parentNode: "yellow",
      blueChilds: ["row6col5"],
      yellowChilds: [],
      display: this.state.row5col3,
      style: {
        width: "70px",
        border: "0",
        background:
          "linear-gradient(56deg, rgba(55,204,245,1) 0%, rgba(78,161,249,1) 54%, rgba(102,119,254,1) 100%)",
        position: "absolute",
        top: "280px",
        left: "700px",
      },
    };
    dict["row5col4"] = {
      id: "row5col4",
      text: "Oui",
      color: "blue",
      parentNode: "yellow",
      blueChilds: [],
      yellowChilds: ["row6col6"],
      display: this.state.row5col4,
      style: {
        width: "70px",
        border: "0",
        background:
          "linear-gradient(56deg, rgba(240,204,57,1) 0%, rgba(247,173,57,1) 54%, rgba(254,143,58,1) 100%)",
        position: "absolute",
        top: "280px",
        left: "1000px",
      },
    };
    dict["row5col5"] = {
      id: "row5col5",
      text: "Non",
      color: "blue",
      parentNode: "yellow",
      blueChilds: [],
      yellowChilds: ["row6col7"],
      display: this.state.row5col5,
      style: {
        width: "70px",
        border: "0",
        background:
          "linear-gradient(56deg, rgba(171,230,204,1) 0%, rgba(152,200,214,1) 54%, rgba(132,169,224,1) 100%)",
        position: "absolute",
        top: "280px",
        left: "1200px",
      },
    };
    dict["row5col6"] = {
      id: "row5col6",
      text: "Pour eviter",
      color: "blue",
      parentNode: "blue",
      blueChilds: ["row6col8"],
      yellowChilds: [],
      display: this.state.row5col6,
      style: {
        width: "70px",
        border: "0",
        background:
          "linear-gradient(56deg, rgba(205,238,115,1) 0%, rgba(132,226,133,1) 54%, rgba(64,213,152,1) 100%)",
        position: "absolute",
        top: "280px",
        left: "1400px",
      },
    };
    dict["row6col1"] = {
      id: "row6col1",
      text: "Oui",
      color: "blue",
      parentNode: "yellow",
      blueChilds: [],
      yellowChilds: ["row7col1"],
      display: this.state.row6col1,
      style: {
        width: "70px",
        border: "0",
        background:
          "linear-gradient(56deg, rgba(234,68,138,1) 0%, rgba(232,69,106,1) 54%, rgba(232,71,78,1) 100%)",
        position: "absolute",
        top: "350px",
        left: "250px",
      },
    };
    dict["row6col2"] = {
      id: "row6col2",
      text: "Non",
      color: "blue",
      parentNode: "yellow",
      blueChilds: [],
      yellowChilds: ["row7col2"],
      display: this.state.row6col2,
      style: {
        width: "70px",
        border: "0",
        background:
          "linear-gradient(56deg, rgba(55,204,245,1) 0%, rgba(78,161,249,1) 54%, rgba(102,119,254,1) 100%)",
        position: "absolute",
        top: "350px",
        left: "350px",
      },
    };
    dict["row6col3"] = {
      id: "row6col3",
      text: "Oui",
      color: "blue",
      parentNode: "yellow",
      blueChilds: [],
      yellowChilds: ["row7col3"],
      display: this.state.row6col3,
      style: {
        width: "70px",
        border: "0",
        background:
          "linear-gradient(56deg, rgba(240,204,57,1) 0%, rgba(247,173,57,1) 54%, rgba(254,143,58,1) 100%)",
        position: "absolute",
        top: "350px",
        left: "450px",
      },
    };
    dict["row6col4"] = {
      id: "row6col4",
      text: "Non",
      color: "blue",
      parentNode: "yellow",
      blueChilds: [],
      yellowChilds: ["row7col4"],
      display: this.state.row6col4,
      style: {
        width: "70px",
        border: "0",
        background:
          "linear-gradient(56deg, rgba(171,230,204,1) 0%, rgba(152,200,214,1) 54%, rgba(132,169,224,1) 100%)",
        position: "absolute",
        top: "350px",
        left: "550px",
      },
    };
    dict["row6col5"] = {
      id: "row6col5",
      text: "Deployer",
      color: "blue",
      parentNode: "yellow",
      blueChilds: [],
      yellowChilds: [],
      display: this.state.row6col5,
      style: {
        width: "70px",
        border: "0",
        background:
          "linear-gradient(56deg, rgba(205,238,115,1) 0%, rgba(132,226,133,1) 54%, rgba(64,213,152,1) 100%)",
        position: "absolute",
        top: "350px",
        left: "700px",
      },
    };
    dict["row6col6"] = {
      id: "row6col6",
      text: "Quel est",
      color: "yellow",
      parentNode: "blue",
      blueChilds: [],
      yellowChilds: ["row7col5", "row7col6"],
      display: this.state.row6col6,
      style: {
        width: "70px",
        border: "0",
        background:
          "linear-gradient(56deg, rgba(234,68,138,1) 0%, rgba(232,69,106,1) 54%, rgba(232,71,78,1) 100%)",
        position: "absolute",
        top: "350px",
        left: "1000px",
      },
    };
    dict["row6col7"] = {
      id: "row6col7",
      text: "Assurez",
      color: "yellow",
      parentNode: "blue",
      blueChilds: [],
      yellowChilds: [],
      display: this.state.row6col7,
      style: {
        width: "70px",
        border: "0",
        background:
          "linear-gradient(56deg, rgba(55,204,245,1) 0%, rgba(78,161,249,1) 54%, rgba(102,119,254,1) 100%)",
        position: "absolute",
        top: "350px",
        left: "1200px",
      },
    };
    dict["row6col8"] = {
      id: "row6col8",
      text: "Enffin",
      color: "blue",
      parentNode: "blue",
      blueChilds: ["row7col7"],
      yellowChilds: [],
      display: this.state.row6col8,
      style: {
        width: "70px",
        border: "0",
        background:
          "linear-gradient(56deg, rgba(55,204,245,1) 0%, rgba(78,161,249,1) 54%, rgba(102,119,254,1) 100%)",
        position: "absolute",
        top: "350px",
        left: "1400px",
      },
    };
    dict["row7col1"] = {
      id: "row7col1",
      text: "Assurez",
      color: "yellow",
      parentNode: "blue",
      blueChilds: [],
      yellowChilds: [],
      display: this.state.row7col1,
      style: {
        width: "70px",
        border: "0",
        background:
          "linear-gradient(56deg, rgba(171,230,204,1) 0%, rgba(152,200,214,1) 54%, rgba(132,169,224,1) 100%)",
        position: "absolute",
        top: "420px",
        left: "250px",
      },
    };
    dict["row7col2"] = {
      id: "row7col2",
      text: "it est urgent",
      color: "yellow",
      parentNode: "blue",
      blueChilds: ["row8col1"],
      yellowChilds: [],
      display: this.state.row7col2,
      style: {
        width: "70px",
        border: "0",
        background:
          "linear-gradient(56deg, rgba(205,238,115,1) 0%, rgba(132,226,133,1) 54%, rgba(64,213,152,1) 100%)",
        position: "absolute",
        top: "420px",
        left: "350px",
      },
    };
    dict["row7col3"] = {
      id: "row7col3",
      text: "La mise en place",
      color: "yellow",
      parentNode: "blue",
      blueChilds: ["row8col2"],
      yellowChilds: [],
      display: this.state.row7col3,
      style: {
        width: "70px",
        border: "0",
        background:
          "linear-gradient(56deg, rgba(234,68,138,1) 0%, rgba(232,69,106,1) 54%, rgba(232,71,78,1) 100%)",
        position: "absolute",
        top: "420px",
        left: "450px",
      },
    };
    dict["row7col4"] = {
      id: "row7col4",
      text: "Une vision",
      color: "yellow",
      parentNode: "blue",
      blueChilds: ["row8col3"],
      yellowChilds: [],
      display: this.state.row7col4,
      style: {
        width: "70px",
        border: "0",
        background:
          "linear-gradient(56deg, rgba(55,204,245,1) 0%, rgba(78,161,249,1) 54%, rgba(102,119,254,1) 100%)",
        position: "absolute",
        top: "420px",
        left: "550px",
      },
    };
    dict["row7col5"] = {
      id: "row7col5",
      text: "Nous southaitons",
      color: "yellow",
      parentNode: "yellow",
      blueChilds: [],
      yellowChilds: ["row8col4", "row8col5", "row8col6"],
      display: this.state.row7col5,
      style: {
        width: "70px",
        border: "0",
        background:
          "linear-gradient(56deg, rgba(171,230,204,1) 0%, rgba(152,200,214,1) 54%, rgba(132,169,224,1) 100%)",
        position: "absolute",
        top: "440px",
        left: "850px",
      },
    };
    dict["row7col6"] = {
      id: "row7col6",
      text: "Nous southaitons",
      color: "yellow",
      parentNode: "yellow",
      blueChilds: [],
      yellowChilds: ["row8col7"],
      display: this.state.row7col6,
      style: {
        width: "70px",
        border: "0",
        background:
          "linear-gradient(56deg, rgba(240,204,57,1) 0%, rgba(247,173,57,1) 54%, rgba(254,143,58,1) 100%)",
        position: "absolute",
        top: "440px",
        left: "1150px",
      },
    };
    dict["row7col7"] = {
      id: "row7col7",
      text: "Vous",
      color: "blue",
      parentNode: "blue",
      blueChilds: [],
      yellowChilds: [],
      display: this.state.row7col7,
      style: {
        width: "70px",
        border: "0",
        background:
          "linear-gradient(56deg, rgba(205,238,115,1) 0%, rgba(132,226,133,1) 54%, rgba(64,213,152,1) 100%)",
        position: "absolute",
        top: "420px",
        left: "1400px",
      },
    };
    dict["row8col1"] = {
      id: "row8col1",
      text: "La threat",
      color: "blue",
      parentNode: "yellow",
      blueChilds: ["row9col1"],
      yellowChilds: [],
      display: this.state.row8col1,
      style: {
        width: "70px",
        border: "0",
        background:
          "linear-gradient(56deg, rgba(55,204,245,1) 0%, rgba(78,161,249,1) 54%, rgba(102,119,254,1) 100%)",
        position: "absolute",
        top: "490px",
        left: "350px",
      },
    };
    dict["row8col2"] = {
      id: "row8col2",
      text: "Les Formation",
      color: "blue",
      parentNode: "yellow",
      blueChilds: [],
      yellowChilds: [],
      display: this.state.row8col2,
      style: {
        width: "70px",
        border: "0",
        background:
          "linear-gradient(56deg, rgba(234,68,138,1) 0%, rgba(232,69,106,1) 54%, rgba(232,71,78,1) 100%)",
        position: "absolute",
        top: "490px",
        left: "450px",
      },
    };
    dict["row8col3"] = {
      id: "row8col3",
      text: "Des Services",
      color: "blue",
      parentNode: "yellow",
      blueChilds: ["row9col2"],
      yellowChilds: [],
      display: this.state.row8col3,
      style: {
        width: "70px",
        border: "0",
        background:
          "linear-gradient(56deg, rgba(171,230,204,1) 0%, rgba(152,200,214,1) 54%, rgba(132,169,224,1) 100%)",
        position: "absolute",
        top: "490px",
        left: "550px",
      },
    };
    dict["row8col4"] = {
      id: "row8col4",
      text: "Notice securite",
      color: "yellow",
      parentNode: "yellow",
      blueChilds: [],
      yellowChilds: ["row9col3"],
      display: this.state.row8col4,
      style: {
        width: "70px",
        border: "0",
        background:
          "linear-gradient(56deg, rgba(240,204,57,1) 0%, rgba(247,173,57,1) 54%, rgba(254,143,58,1) 100%)",
        position: "absolute",
        top: "510px",
        left: "750px",
      },
    };
    dict["row8col5"] = {
      id: "row8col5",
      text: "Nous devons",
      color: "yellow",
      parentNode: "yellow",
      blueChilds: [],
      yellowChilds: ["row9col4"],
      display: this.state.row8col5,
      style: {
        width: "70px",
        border: "0",
        background:
          "linear-gradient(56deg, rgba(205,238,115,1) 0%, rgba(132,226,133,1) 54%, rgba(64,213,152,1) 100%)",
        position: "absolute",
        top: "510px",
        left: "850px",
      },
    };
    dict["row8col6"] = {
      id: "row8col6",
      text: "Nos enquipes",
      color: "yellow",
      parentNode: "yellow",
      blueChilds: [],
      yellowChilds: ["row9col5"],
      display: this.state.row8col6,
      style: {
        width: "70px",
        border: "0",
        background:
          "linear-gradient(56deg, rgba(55,204,245,1) 0%, rgba(78,161,249,1) 54%, rgba(102,119,254,1) 100%)",
        position: "absolute",
        top: "510px",
        left: "950px",
      },
    };
    dict["row8col7"] = {
      id: "row8col7",
      text: "Un Audit",
      color: "yellow",
      parentNode: "yellow",
      blueChilds: [],
      yellowChilds: [],
      display: this.state.row8col7,
      style: {
        width: "70px",
        border: "0",
        background:
          "linear-gradient(56deg, rgba(171,230,204,1) 0%, rgba(152,200,214,1) 54%, rgba(132,169,224,1) 100%)",
        position: "absolute",
        top: "510px",
        left: "1150px",
      },
    };
    dict["row9col1"] = {
      id: "row9col1",
      text: "Le mise",
      color: "blue",
      parentNode: "blue",
      blueChilds: [],
      yellowChilds: [],
      display: this.state.row9col1,
      style: {
        width: "70px",
        border: "0",
        background:
          "linear-gradient(56deg, rgba(240,204,57,1) 0%, rgba(247,173,57,1) 54%, rgba(254,143,58,1) 100%)",
        position: "absolute",
        top: "560px",
        left: "350px",
      },
    };
    dict["row9col2"] = {
      id: "row9col2",
      text: "Les formation",
      color: "blue",
      parentNode: "blue",
      blueChilds: [],
      yellowChilds: [],
      display: this.state.row9col2,
      style: {
        width: "70px",
        border: "0",
        background:
          "linear-gradient(56deg, rgba(234,68,138,1) 0%, rgba(232,69,106,1) 54%, rgba(232,71,78,1) 100%)",
        position: "absolute",
        top: "560px",
        left: "550px",
      },
    };
    dict["row9col3"] = {
      id: "row9col3",
      text: "La mise",
      color: "yellow",
      parentNode: "yellow",
      blueChilds: [],
      yellowChilds: [],
      display: this.state.row9col3,
      style: {
        width: "70px",
        border: "0",
        background:
          "linear-gradient(56deg, rgba(205,238,115,1) 0%, rgba(132,226,133,1) 54%, rgba(64,213,152,1) 100%)",
        position: "absolute",
        top: "580px",
        left: "750px",
      },
    };
    dict["row9col4"] = {
      id: "row9col4",
      text: "Nas experts",
      color: "yellow",
      parentNode: "yellow",
      blueChilds: [],
      yellowChilds: [],
      display: this.state.row9col4,
      style: {
        width: "70px",
        border: "0",
        background:
          "linear-gradient(56deg, rgba(55,204,245,1) 0%, rgba(78,161,249,1) 54%, rgba(102,119,254,1) 100%)",
        position: "absolute",
        top: "580px",
        left: "850px",
      },
    };
    dict["row9col5"] = {
      id: "row9col5",
      text: "Les formation",
      color: "yellow",
      parentNode: "yellow",
      blueChilds: [],
      yellowChilds: [],
      display: this.state.row9col5,
      style: {
        width: "70px",
        border: "0",
        background:
          "linear-gradient(56deg, rgba(171,230,204,1) 0%, rgba(152,200,214,1) 54%, rgba(132,169,224,1) 100%)",
        position: "absolute",
        top: "580px",
        left: "950px",
      },
    };

    /*  ............................................Draw - onClick Event............................................... */

    const draw = (startX, startY, endX, endY, e) => {
      var canvas = this.myRef.current;
      var c = canvas.getContext("2d");

      const break1Y = startY + Math.round((endY - startY) / 2);
      const break2X = endX;

      var x = 0;
      var y = 0;
      var z = 0;

      var startxx = startX;
      var startyy = startY;
      var startxxx = 0;

      var moveDown = true;
      var moveFurtherDown = false;
      var moveRight = false;
      var moveLeft = false;

      setInterval(function () {
        /*  c.setLineDash([3, 5]); */
        c.strokeStyle = "gray";
        c.lineWidth = 2;
        c.lineCap = "round";
        c.lineJoin = "bevel";

        c.moveTo(startxx, startyy);

        if (moveDown) {
          y = y + 5;
          c.lineTo(startX + x, startY + y);

          c.stroke();
          if (startxxx !== 0) {
            c.moveTo(startxxx, startyy);
            c.lineTo(startX - x, startY + y);
            c.stroke();
          }

          if (startY + y === break1Y) {
            moveRight = true;
            moveDown = false;
            moveLeft = true;
            moveFurtherDown = true;
            startyy = startyy + y;
          }
          if (startY + y === endY) {
            moveDown = false;
          }
        }

        /* ...................................For Three Yellow Childs.................................. */
        if (dict[e].yellowChilds.length === 3) {
          if (moveRight) {
            x = x + 5;
            c.lineTo(startX + x, startY + y);

            if (startX + x === break2X) {
              moveRight = false;
              moveDown = true;

              startxx = startxx + x;
            }
            c.stroke();
          }

          if (moveLeft) {
            c.moveTo(startX, startY + y);
            c.lineTo(startX - x, startY + y);

            if (x === break2X - startX) {
              moveDown = true;
              moveLeft = false;
              startxxx = startX - x;
            }
            c.stroke();
          }
          if (moveFurtherDown) {
            c.moveTo(startX, startY + y);
            z = z + 5;

            c.lineTo(startX, startyy + z);

            if (startyy + z === endY) {
              moveFurtherDown = false;
            }

            c.stroke();
          }
        }

        /* ...................................For Two Yellow Childs.................................. */
        if (dict[e].yellowChilds.length === 2) {
          if (moveRight) {
            x = x + 5;
            c.lineTo(startX + x, startY + y);

            if (startX + x === break2X) {
              moveRight = false;
              moveDown = true;

              startxx = startxx + x;
            }
            c.stroke();
          }
          if (moveLeft) {
            c.moveTo(startX, startY + y);
            c.lineTo(startX - x, startY + y);

            if (x === break2X - startX) {
              moveDown = true;
              moveLeft = false;
              startxxx = startX - x;
            }
            c.stroke();
          }
        }

        /* ...................................For Two Blue Childs.................................. */
        if (dict[e].blueChilds.length === 2) {
          if (moveRight) {
            x = x + 5;
            c.lineTo(startX + x, startY + y);

            if (startX + x === break2X) {
              moveRight = false;
              moveDown = true;

              startxx = startxx + x;
            }
            c.stroke();
          }
          if (moveLeft) {
            c.moveTo(startX, startY + y);
            c.lineTo(startX - x, startY + y);

            if (x === break2X - startX) {
              moveDown = true;
              moveLeft = false;
              startxxx = startX - x;
            }
            c.stroke();
          }
        }

        /* ...................................For One Blue Child.................................. */
        if (dict[e].blueChilds.length === 1) {
          if (moveFurtherDown) {
            c.moveTo(startX, startY + y);
            z = z + 5;

            c.lineTo(startX, startyy + z);

            if (startyy + z === endY) {
              moveFurtherDown = false;
            }
            c.stroke();
          }
        }

        /* ...................................For One Yellow Child.................................. */
        if (dict[e].yellowChilds.length === 1) {
          if (moveFurtherDown) {
            c.moveTo(startX, startY + y);
            z = z + 5;

            c.lineTo(startX, startyy + z);

            if (startyy + z === endY) {
              moveFurtherDown = false;
            }
            c.stroke();
          }
        }
      }, 20);
    };

    var delay = (ms) => new Promise((res) => setTimeout(res, ms));

    /*  ............................................Finction - onClick Event............................................... */

    const finction = async (e, key, startX, endX) => {
      await delay((endX - startX) * 4);

      dict[e].yellowChilds.map((el) => {
        this.setState({ [dict[el].id]: true });

        /* 1st Blue Child */
        dict[el].blueChilds.map((elb) => {
          /* setTimeout(() => {
            this.setState({ [dict[elb].id]: true });
          }, 1000); */
          this.setState({ [dict[elb].id]: true });

          draw(
            parseInt(
              dict[el].style.left.slice(0, dict[el].style.left.indexOf("p"))
            ) +
              parseInt(
                dict[el].style.width.slice(
                  0,
                  dict[el].style.width.indexOf("p")
                ) / 2
              ),
            parseInt(
              dict[el].style.top.slice(0, dict[el].style.top.indexOf("p"))
            ) + 30,
            parseInt(
              dict[
                dict[el].blueChilds[dict[el].blueChilds.length - 1]
              ].style.left.slice(
                0,
                dict[
                  dict[el].blueChilds[dict[el].blueChilds.length - 1]
                ].style.left.indexOf("p")
              )
            ) + 40,
            parseInt(
              dict[
                dict[el].blueChilds[dict[el].blueChilds.length - 1]
              ].style.top.slice(
                0,
                dict[
                  dict[el].blueChilds[dict[el].blueChilds.length - 1]
                ].style.top.indexOf("p")
              )
            ),
            el
          );

          /* 2nd Blue Child */
          dict[elb].blueChilds.map((els) => {
            this.setState({ [dict[els].id]: true });
            draw(
              parseInt(
                dict[elb].style.left.slice(0, dict[elb].style.left.indexOf("p"))
              ) +
                parseInt(
                  dict[elb].style.width.slice(
                    0,
                    dict[elb].style.width.indexOf("p")
                  ) / 2
                ),
              parseInt(
                dict[elb].style.top.slice(0, dict[elb].style.top.indexOf("p"))
              ) + 30,
              parseInt(
                dict[
                  dict[elb].blueChilds[dict[elb].blueChilds.length - 1]
                ].style.left.slice(
                  0,
                  dict[
                    dict[elb].blueChilds[dict[elb].blueChilds.length - 1]
                  ].style.left.indexOf("p")
                )
              ) + 40,
              parseInt(
                dict[
                  dict[elb].blueChilds[dict[elb].blueChilds.length - 1]
                ].style.top.slice(
                  0,
                  dict[
                    dict[elb].blueChilds[dict[elb].blueChilds.length - 1]
                  ].style.top.indexOf("p")
                )
              ),
              el
            );
            /* 3rd Blue Child */
            dict[els].blueChilds.map((elt) => {
              this.setState({ [dict[elt].id]: true });
              draw(
                parseInt(
                  dict[els].style.left.slice(
                    0,
                    dict[els].style.left.indexOf("p")
                  )
                ) +
                  parseInt(
                    dict[els].style.width.slice(
                      0,
                      dict[els].style.width.indexOf("p")
                    ) / 2
                  ),
                parseInt(
                  dict[els].style.top.slice(0, dict[els].style.top.indexOf("p"))
                ) + 30,
                parseInt(
                  dict[
                    dict[els].blueChilds[dict[els].blueChilds.length - 1]
                  ].style.left.slice(
                    0,
                    dict[
                      dict[els].blueChilds[dict[els].blueChilds.length - 1]
                    ].style.left.indexOf("p")
                  )
                ) + 40,
                parseInt(
                  dict[
                    dict[els].blueChilds[dict[els].blueChilds.length - 1]
                  ].style.top.slice(
                    0,
                    dict[
                      dict[els].blueChilds[dict[els].blueChilds.length - 1]
                    ].style.top.indexOf("p")
                  )
                ),
                el
              );
              /* 4th Blue Child */
              dict[elt].blueChilds.map((elu) => {
                this.setState({ [dict[elu].id]: true });
                draw(
                  parseInt(
                    dict[elt].style.left.slice(
                      0,
                      dict[elt].style.left.indexOf("p")
                    )
                  ) +
                    parseInt(
                      dict[elt].style.width.slice(
                        0,
                        dict[elt].style.width.indexOf("p")
                      ) / 2
                    ),
                  parseInt(
                    dict[elt].style.top.slice(
                      0,
                      dict[elt].style.top.indexOf("p")
                    )
                  ) + 30,
                  parseInt(
                    dict[
                      dict[elt].blueChilds[dict[elt].blueChilds.length - 1]
                    ].style.left.slice(
                      0,
                      dict[
                        dict[elt].blueChilds[dict[elt].blueChilds.length - 1]
                      ].style.left.indexOf("p")
                    )
                  ) + 40,
                  parseInt(
                    dict[
                      dict[elt].blueChilds[dict[elt].blueChilds.length - 1]
                    ].style.top.slice(
                      0,
                      dict[
                        dict[elt].blueChilds[dict[elt].blueChilds.length - 1]
                      ].style.top.indexOf("p")
                    )
                  ),
                  el
                );
              });
            });
          });
        });
      });
      dict[e].display = true;
    };

    /* .............................Return Statement.............................. */
    return (
      <div>
        <canvas
          className={classes.c}
          style={{ position: "absolute", zIndex: "-1" }}
          ref={this.myRef}
          width="1530"
          height="1000"
        ></canvas>

        {Object.keys(dict).map((key, index) =>
          dict[key].display ? (
            <Animated
              animationIn="fadeIn"
              animationOut="fadeOutX"
              isVisible={true}
            >
              <button
                style={{}}
                className={classes.ripple}
                ref={this.myRefs}
                key={index}
                onClick={function (event) {
                  {
                    if (
                      dict[
                        dict[key].yellowChilds[
                          dict[key].yellowChilds.length - 1
                        ]
                      ]
                    ) {
                      draw(
                        parseInt(
                          dict[key].style.left.slice(
                            0,
                            dict[key].style.left.indexOf("p")
                          )
                        ) +
                          parseInt(
                            dict[key].style.width.slice(
                              0,
                              dict[key].style.width.indexOf("p")
                            ) / 2
                          ),
                        parseInt(
                          dict[key].style.top.slice(
                            0,
                            dict[key].style.top.indexOf("p")
                          )
                        ) + 30,

                        parseInt(
                          dict[
                            dict[key].yellowChilds[
                              dict[key].yellowChilds.length - 1
                            ]
                          ].style.left.slice(
                            0,
                            dict[
                              dict[key].yellowChilds[
                                dict[key].yellowChilds.length - 1
                              ]
                            ].style.left.indexOf("p")
                          )
                        ) + 40,

                        parseInt(
                          dict[
                            dict[key].yellowChilds[
                              dict[key].yellowChilds.length - 1
                            ]
                          ].style.top.slice(
                            0,
                            dict[
                              dict[key].yellowChilds[
                                dict[key].yellowChilds.length - 1
                              ]
                            ].style.top.indexOf("p")
                          )
                        ),
                        dict[key].id
                      );
                      finction(
                        dict[key].id,
                        key,
                        parseInt(
                          dict[key].style.left.slice(
                            0,
                            dict[key].style.left.indexOf("p")
                          )
                        ) +
                          parseInt(
                            dict[key].style.width.slice(
                              0,
                              dict[key].style.width.indexOf("p")
                            ) / 2
                          ),
                        parseInt(
                          dict[
                            dict[key].yellowChilds[
                              dict[key].yellowChilds.length - 1
                            ]
                          ].style.left.slice(
                            0,
                            dict[
                              dict[key].yellowChilds[
                                dict[key].yellowChilds.length - 1
                              ]
                            ].style.left.indexOf("p")
                          )
                        ) + 40
                      );
                    }
                  }
                }}
                style={dict[key].style}
              >
                <span>
                  {dict[key].id}
                  <br />
                  {dict[key].color}
                </span>
              </button>
            </Animated>
          ) : null
        )}
      </div>
    );
  }
}

export default App;
