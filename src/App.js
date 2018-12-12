import React, { Component } from "react";
import _ from "lodash";
import cx from "classnames";
import ScatterJS from "scatterjs-core";
import ScatterEOS from "scatterjs-plugin-eosjs";
import EOS from "eosjs";
import "./App.css";
import { ReactComponent as Circle } from "./circle.svg";
import { ReactComponent as Times } from "./times.svg";

ScatterJS.plugins(new ScatterEOS());
const scatter = ScatterJS.scatter;

const network = {
  blockchain: "eos",
  protocol: "http",
  host: "jungle2.cryptolions.io",
  port: 80,
  chainId: "e70aaab8997e1dfce58fbfac80cbbb8fecec7b99cf982a9444273cbc64c41473"
};

const TONY = "tony11111111";
const JOHN = "john11111111";

class App extends Component {
  state = {
    host: TONY,
    challenger: JOHN,
    turn: "",
    board: [],
    account: null,
    winner: "none"
  };

  async componentDidMount() {}

  move = async i => {};

  render() {
    const { account, host, challenger, turn, board, winner } = this.state;
    return (
      <div className="App">
        <div className="title">Tic Tac Toe</div>
        {account && (
          <div className="accountName">{`Welcome ${account.name}`}</div>
        )}
        <div className="players">
          <div
            className={cx("player", { active: turn === host })}
          >{`Host: ${TONY}`}</div>
          <div
            className={cx("player", { active: turn === challenger })}
          >{`Challenger: ${JOHN}`}</div>
        </div>
        <div className="board">
          {_.range(9).map(i => {
            return (
              <div key={i} className="tile" onClick={() => this.move(i)}>
                {board[i] === 1 ? (
                  <Circle />
                ) : board[i] === 2 ? (
                  <Times />
                ) : null}
              </div>
            );
          })}
        </div>
        <div className="winner">{`Winner: ${winner}`}</div>
      </div>
    );
  }
}

export default App;
