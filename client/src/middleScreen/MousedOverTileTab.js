import React, {Component} from 'react';
import {inject, observer} from "mobx-react";

class MousedOverTileTab extends Component {
    state = {};

    render() {
        const tile = this.props.store.game.board[this.props.store.mousedOverTile];
        const playersOnTile = this.props.store.game.player_info.map((player, i) => ({
            ...player,
            index: i
        })).filter(player => player.state !== "OUT").filter(player => player.position === this.props.store.mousedOverTile);
        let relatedTiles = [];
        if (tile.type === "rr" || tile.type === "utility") {
            relatedTiles = this.props.store.game.board.filter((tile, i) => tile.type === this.props.store.game.board[this.props.store.mousedOverTile].type && i !== this.props.store.mousedOverTile);
        } else if (tile.type === "property") {
            relatedTiles = this.props.store.game.board.filter((tile, i) => tile.group === this.props.store.game.board[this.props.store.mousedOverTile].group && i !== this.props.store.mousedOverTile);
        }
        return (
            <div className="d-flex flex-column align-items-center justify-content-center tile-info-container">
                <div className="d-flex flex-row">
                    <div className="d-flex flex-column align-items-center justify-content-center">
                        <div className="tile-info-image-div" style={{
                            backgroundImage: `url(${tile.url})`,
                        }}/>
                        <div className="tile-info-name">
                            {tile.name}
                        </div>
                    </div>
                    {(tile.type === "property" || tile.type === "rr" || tile.type === "utility") && (
                        <div className="d-flex flex-row align-items-center justify-content-center">
                            {relatedTiles.map((relTile, i) => {
                                return (
                                    <div key={i}
                                         className="d-flex flex-column align-items-center justify-content-center">
                                        <div className="rel-tile-info-image-div" style={{
                                            backgroundImage: `url(${relTile.url})`,
                                        }}/>
                                    </div>
                                )
                            })}
                        </div>
                    )}
                </div>
                {(tile.type === "chance" || tile.type === "chest") && (
                    <div>
                        Atteri ici ou pioche une carte
                    </div>
                )}
                {(tile.type === "go") && (
                    <div>
                        Passe ou atteri et gagne $200.
                    </div>
                )}
                {(tile.type === "lux-tax") && (
                    <div>
                        Paye $75.
                    </div>
                )}
                {(tile.type === "income-tax") && (
                    <div>
                        Paye $200 ou 10% de ton revenu net
                    </div>
                )}
                {(tile.type === "property" || tile.type === "utility" || tile.type === "rr") && (
                    <div className="d-flex flex-row tile-info-property justify-content-between">
                        <div className="d-flex flex-column tile-info-rents">
                            <div className="d-flex justify-content-between">
                                <div>Prix:</div>
                                <div>${tile.cost}</div>
                            </div>
                            {tile.owned && (
                                <div className="d-flex justify-content-between">
                                    <div>Loyer actuel:</div>
                                    <div>${this.props.store.calcRentCostTile(this.props.store.mousedOverTile, true)}</div>
                                </div>
                            )}
                            <div className="d-flex justify-content-between">
                                <div>Loyer de base:</div>
                                <div>${this.props.store.calcRentCostTile(this.props.store.mousedOverTile, true)}</div>
                            </div>
                        </div>
                        <div className="d-flex flex-column justify-content-between tile-info-upgrades">
                            {tile.type === "property" && (
                                <div>
                                    <div className="d-flex justify-content-between">
                                        <div>Coût de financement:</div>
                                        <div>${tile.upgrade}</div>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <div>1ère Maison:</div>
                                        <div>${tile.rent[1]}</div>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <div>2ème Maison:</div>
                                        <div>${tile.rent[2]}</div>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <div>3ème Maison:</div>
                                        <div>${tile.rent[3]}</div>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <div>4ère Maison:</div>
                                        <div>${tile.rent[4]}</div>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <div>Hotel:</div>
                                        <div>${tile.rent[5]}</div>
                                    </div>
                                </div>
                            )}
                            {tile.type === "rr" && (
                                <div>
                                    <div className="d-flex justify-content-between">
                                        <div>Un propriétaire:</div>
                                        <div>$25</div>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <div>Deux propriétaires:</div>
                                        <div>$50</div>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <div>Trois propriétaires:</div>
                                        <div>$100</div>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <div>Quatre propriétaires:</div>
                                        <div>$200</div>
                                    </div>
                                </div>
                            )}
                            {tile.type === "utility" && (
                                <div>
                                    <div className="d-flex justify-content-between">
                                        <div>Un propriétaire:</div>
                                        <div>$Dé×4</div>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <div>Deux propriétaires:</div>
                                        <div>$Dé×10</div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
                <div className="d-flex flex-column mt-3 players-on-tile">
                    {playersOnTile.length > 0 ?
                        <div>
                            <span>Joueurs sur la case:</span>
                            <ul>
                                {playersOnTile.map((player, i) => {
                                    return <li key={i}>{player.username} - ({player.index + 1})</li>
                                })}
                            </ul>
                        </div>
                        :
                        <span>Pas de joueur ici.</span>
                    }
                    {tile.owned ?
                        <div>
                            <span>Appartient à: {this.props.store.game.player_info[tile.player].username}</span>
                        </div>
                        :
                        null
                    }
                </div>
            </div>
        );
    }
}

export default inject("store")(observer(MousedOverTileTab));