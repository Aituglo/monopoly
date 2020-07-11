import React, {Component} from 'react';
import Card from "./Card";
import MainView from "./middleScreen/MainView";

import "./assets/css/game.css";
import "./assets/css/rolling_dice.css";
//import "./App.css";

import { GameView } from './assets/js/views/game';
import {inject, observer} from "mobx-react";
import {withRouter} from 'react-router-dom';

const game = new GameView();

class Board extends Component {
    componentDidMount() {
        let gameInfo = localStorage.getItem("previous_game");
        if (!gameInfo) {
            this.props.history.push("/start");
            return;
        }
        gameInfo = JSON.parse(gameInfo);
        this.props.store.setGameAuthInfo(gameInfo);
        this.props.store.connectToGame();
    }

    componentDidUpdate() {
        if(this.gameDiv){
            game.initComponents(this.gameDiv)
        }
    }

    render() {
        return (
            this.props.store.inGame ? 
                <div id="game-container" ref={div => {this.gameDiv = div}}>
                
        
                </div>
                :
                <div style={{margin: "auto", textAlign: "center", fontSize: 80}}><i
                    className="fas fa-spinner  fa-spin"/></div>
        );
    }
}

export default withRouter(inject("store")(observer(Board)));
