class App extends Component {
  state = {
    yellow1: false,
    yellow21: false,
    yellow22: false,
    yellow23: false,
  };
  render() {
    const yellow1Open = () => {
      this.setState({
        yellow1: !this.state.yellow1,
        yellow21: false,
        yellow22: false,
        yellow23: false,
      });
      console.log("yellow1 open");
    };
    const yellow21Open = () => {
      this.setState({ yellow21: !this.state.yellow21 });
      console.log("yellow 21 open");
    };
    const yellow22Open = () => {
      this.setState({ yellow22: !this.state.yellow22 });
      console.log("yellow 22 open");
    };
    const yellow23Open = () => {
      this.setState({ yellow23: !this.state.yellow23 });
      console.log("yellow 23 open");
    };
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <button
          onClick={() => yellow1Open()}
          style={{ width: "100px", height: "100px" }}
        >
          root
        </button>
        <div
          style={{
            display: "flex",
            width: "50%",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {this.state.yellow1 ? (
            <button
              onClick={() => yellow21Open()}
              style={{ width: "100px", height: "100px" }}
            >
              1-yellow1
            </button>
          ) : null}
          {this.state.yellow1 ? (
            <button
              onClick={() => yellow22Open()}
              style={{ width: "100px", height: "100px" }}
            >
              1-yellow2
            </button>
          ) : null}
          {this.state.yellow1 ? (
            <button
              onClick={() => yellow23Open()}
              style={{ width: "100px", height: "100px" }}
            >
              1-yellow3
            </button>
          ) : null}
        </div>

        <div
          style={{
            width: "100%",
          }}
        >
          {this.state.yellow21 ? (
            <button
              style={{ width: "100px", height: "100px", marginLeft: "340px" }}
            >
              2-yellow1
            </button>
          ) : null}
          {this.state.yellow22 ? (
            <button
              style={{ width: "100px", height: "100px", marginLeft: "150px" }}
            >
              2-yellow2
            </button>
          ) : null}
          {this.state.yellow22 ? (
            <button
              style={{ width: "100px", height: "100px", marginLeft: "50px" }}
            >
              2-yellow3
            </button>
          ) : null}
          {this.state.yellow23 ? (
            <button style={{ width: "100px", height: "100px" }}>
              2-yellow4
            </button>
          ) : null}
        </div>
      </div>
    );
  }
}

export 

dict[row2col1] = new Node(
  "row2col1",
  "notre enterprise",
  "yellow",
  "yellow",
  [],
  ["row3col1"]
);
dict[row2col2] = new Node(
  "row2col2",
  "nous southaitons",
  "yellow",
  "yellow",
  [],
  ["row3col2", "row3col3"]
);
dict[row2col3] = new Node(
  "row2col3",
  "nous sommes",
  "yellow",
  "yellow",
  [],
  ["row3col4"]
);
dict[row3col1] = new Node(
  "row3col1",
  "La menace",
  "yellow",
  "yellow",
  ["row4col1", "row4col2"],
  []
);
dict[row3col2] = new Node(
  "row3col2",
  "Suite a des",
  "yellow",
  "yellow",
  [],
  ["row4col3"]
);
dict[row3col3] = new Node(
  "row3col3",
  "A titre preventif",
  "yellow",
  "yellow",
  [],
  ["row4col4"]
);
dict[row3col4] = new Node(
  "row3col4",
  "L'intervention",
  "yellow",
  "yellow",
  ["row4col5"],
  []
);



{function (event) {
  finction(dict[key].id);
  draw();
}}


fffffffffffffffffffffffffffffffffffffffffffff
class App extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  render() {
    const draw = () => {
      var canvas = this.myRef.current;
      var c = canvas.getContext("2d");

      var startX = 0;
      var startY = 0;
      var endX = 0;
      var endY = 0;
      var amount = 0;
      var mount = 0;
      setInterval(function () {
        amount += 1;

        c.clearRect(0, 0, canvas.width, canvas.height);

        c.strokeStyle = "black";
        c.moveTo(startX, startY);
        c.setLineDash([2, 2]);

        if (startX + amount <= 250) {
          c.lineTo(startX + amount, startY);
        }

        if (startX + mount >= 250) {
          mount += 1;
          c.lineTo(endX, endY + mount);
        }

        if (startX + amount === 250) {
          startX = 250;
          startY = 0;
          endX = 250;
          endY = 0;
        }

        c.stroke();
      }, 10);
    };

    return (
      <div style={{ width: "100%", height: "100%" }}>
        <button className={classes.button1}>button 1</button>
        <canvas
          className={classes.myCanvas}
          onClick={() => draw()}
          ref={this.myRef}
          width="2000"
          height="1000"
        ></canvas>
        <button className={classes.button2}>button 2</button>
        <button className={classes.button3}>button 3</button>
        <button className={classes.button4}>button 4</button>
      </div>
    );
  }
}