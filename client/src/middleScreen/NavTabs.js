import React, {Component} from 'react';
import {inject, observer} from "mobx-react";

class NavTabs extends Component {
    render() {
        return (
            <ul className="nav nav-tabs">
                <li className="nav-item cursor" onClick={() => this.props.selectTab({selectedTab: "my_info"})}>
                    <div className={`nav-link ${this.props.selectedTab === "my_info" ? "active" : ""}`}>Mes infos
                    </div>
                </li>
                <li className="nav-item cursor" onClick={() => this.props.selectTab({selectedTab: "my_properties"})}>
                    <div className={`nav-link ${this.props.selectedTab === "my_properties" ? "active" : ""}`}>Mes Propriétés
                    </div>
                </li>
                <li className="nav-item cursor" onClick={() => this.props.selectTab({selectedTab: "trades"})}>
                    <div className={`nav-link ${this.props.selectedTab === "trades" ? "active" : ""}`}>Mes échanges
                    </div>
                </li>
                <li className="nav-item dropdown cursor"
                    onMouseEnter={() => this.props.changeDropDown({dropdownExpanded: true})}
                    onMouseLeave={() => this.props.changeDropDown({dropdownExpanded: false})}
                >
                    <div className="nav-link dropdown-toggle" data-toggle="dropdown" role="button"
                         aria-haspopup="true" aria-expanded="false">Joueurs
                    </div>
                    <div className={`dropdown-menu ${this.props.dropdownExpanded ? "show" : ""}`}>
                        {this.props.store.game.player_info.filter(player => player.state !== "OUT").length === 1 && (
                            <div className="dropdown-item">Pas de joueurs</div>
                        )}
                        {this.props.store.game.player_info.filter(player => player.state !== "OUT").length > 1 && this.props.store.game.player_info.filter(player => player.state !== "OUT").map((player, index) => ({
                            ...player,
                            index
                        })).filter(player => player.username !== this.props.store.gameAuthInfo.username).map(player =>
                            <div onClick={() => this.props.selectTab({
                                selectedTab: "player_info",
                                selectedPlayer: player.id,
                                dropdownExpanded: false,
                            })} key={player.id} className="dropdown-item">{player.username} - ({player.id + 1})</div>
                        )}
                    </div>
                </li>
            </ul>
        )
    }
}

export default inject("store")(observer(NavTabs));