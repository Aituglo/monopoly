import React, {Component} from 'react';
import {inject, observer} from "mobx-react";

class Actions extends Component {
    render() {
        if (this.props.store.game.game_state === "ENDED") {
            return (
                <div className="actions-tab d-flex flex-row justify-content-center align-items-center">
                    La partie est finie
                </div>
            )
        }
        if (this.props.store.game.game_state === "INVITING_PLAYERS" && this.props.store.playerIndex === 0) {
            return (
                <div className="actions-tab d-flex flex-row justify-content-center align-items-center">
                    <button type="button"
                            className="btn btn-primary"
                            onClick={this.props.store.startGame}>
                        Commencer
                    </button>
                </div>
            )
        }
        return (
            <div className="actions-tab d-flex flex-row justify-content-center align-items-center">
                {this.props.store.playerState !== "OUT" && this.props.store.playerState === "START_TURN" && this.props.store.getPlayer.jail_turns < 3 && (
                    <button type="button" onClick={this.props.store.startTurn}
                            className="btn btn-primary">Jeter les dés
                    </button>
                )}
                {this.props.store.playerState === "NOT_TURN" && (
                    <div>Tour de {this.props.store.currentPlayerTurn.username}.</div>
                )}
                {this.props.store.playerState === "UTILITY_CHANCE_CARD" && (
                    <button type="button" onClick={this.props.store.utilityChanceCardPayment}
                            className="btn btn-primary">Lance pour voir combien tu payes
                    </button>
                )}
                {this.props.store.getPlayer.jail_state && this.props.store.playerState === "START_TURN" && (
                    <button type="button" onClick={this.props.store.payOutOfJail}
                            className="btn btn-primary">Payer 50
                    </button>
                )}
                {(this.props.store.playerState === "BUY_TILE" || this.props.store.playerState === "BUY_TILE_NO_MONEY") && (
                    <div className="accept-reject-tile-buy-div d-flex justify-content-center">
                        <div className="btn-group" role="group">
                            <button disabled={this.props.store.playerState === "BUY_TILE_NO_MONEY"} type="button"
                                    className="btn btn-primary buy-tile-button text-center"
                                    onClick={this.props.store.buyTile}>
                                Acheter
                            </button>
                            <button type="button" className="btn btn-primary reject-buy-tile-button"
                                    onClick={this.props.store.rejectBuyTile}>
                                Rejeter
                            </button>
                        </div>
                    </div>
                )}
                {this.props.store.playerState === "INCOME_TAX" && (
                    <div>
                        <button type="button" className="btn btn-primary" onClick={this.props.store.payPercentTax}>Payer
                            10%
                        </button>
                        <button type="button" className="btn btn-primary pay-flat-tax-button"
                                onClick={this.props.store.payFlatTax}>Payer
                            $200
                        </button>
                    </div>
                )}
                {this.props.store.playerState === "END_OF_TURN" && (
                    <button disabled={this.props.store.getPlayer.money < 0} type="button"
                            onClick={this.props.store.endTurn}
                            className="btn btn-primary">Fin du tour
                    </button>
                )}
                {this.props.store.playerState === "END_OF_TURN" && this.props.store.getPlayer.money < 0 && (
                    <button type="button" onClick={this.props.store.giveUp}
                            className="btn btn-primary">Abandonner
                    </button>
                )}
            </div>
        );
    }
}

export default inject("store")(observer(Actions));