/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import {withRouter} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer, toast} from 'react-toastify';

const URL = process.env.REACT_APP_URL || 'https://monopoly.cassimkhouani.com';

class NewGame extends Component {
    state = {
        game_name: "",
        game_password: "",
        plate: "mp",
        money: 1500,
        username: "",
        password: "",
        selectedTab: "home",
        searchGameName: "",
        gamesFound: [],
        gamesFoundSelected: -1,
        joinGamePassword: "",
        joinGameUsername: "",
        joinGameUsernamePassword: "",
        formError: "",
    };

    componentDidMount() {
        localStorage.removeItem("username");
    }

    submitNewGame = (e) => {
        e.preventDefault();
        fetch(`${URL}/${this.state.plate}/${this.state.money}/create_game`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                game_name: this.state.game_name,
                game_password: this.state.game_password,
                username: this.state.username,
                password: this.state.password
            }),
        })
            .then(res => res.json())
            .then(response => {
                localStorage.setItem("previous_game", JSON.stringify({
                    game_name: this.state.game_name,
                    game_password: this.state.game_password,
                    username: this.state.username,
                    password: this.state.password,
                    game_id: response.game_id,
                }));
                console.log(response);
                this.props.history.push("/play-game");
            });
    };
    joinGame = (e) => {
        e.preventDefault();
        console.log(this.state.gamesFound[this.state.gamesFoundSelected]._id);
        fetch(`${URL}/join_game`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                game_id: this.state.gamesFound[this.state.gamesFoundSelected]._id,
                game_password: this.state.joinGamePassword,
                username: this.state.joinGameUsername,
                password: this.state.joinGameUsernamePassword
            }),
        })
            .then(res => res.json())
            .then(response => {
                console.log(response)
                if (response.error) {
                    this.setState({formError: response.error}, () => {
                        if (this.state.formError === "incorrect_game_pw") {
                            toast.error("Mot de passe de partie incorrect.", {
                                position: "top-right",
                                autoClose: 2000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                            });
                        } else if (this.state.formError === "player_not_in_game") {
                            toast.error("Vous n'êtes pas dans cette partie.", {
                                position: "top-right",
                                autoClose: 2000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                            });
                        } else if (this.state.formError === "incorrect_player_pw") {
                            toast.error("Mot de passe du joueur incorrect.", {
                                position: "top-right",
                                autoClose: 2000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                            });
                        }
                    });
                    return;
                }
                if (response.success) {
                    localStorage.setItem("previous_game", JSON.stringify({
                        game_id: this.state.gamesFound[this.state.gamesFoundSelected]._id,
                        game_name: this.state.gamesFound[this.state.gamesFoundSelected].auth.game_name,
                        game_password: this.state.joinGamePassword,
                        username: this.state.joinGameUsername,
                        password: this.state.joinGameUsernamePassword,
                    }));
                    console.log(response);
                    this.props.history.push("/play-game");
                }
            });
    };
    keyPress = (e) => {
        if (e.keyCode === 13) {
            this.searchForGames();
        }
    };
    searchForGames = () => {
        this.setState({gamesFound: [], gamesFoundSelected: -1});
        fetch(`${URL}/search_for_games?game_name=${this.state.searchGameName}`)
            .then(res => res.json())
            .then(data => {
                this.setState({gamesFound: data.games});
            })
    };

    render() {

        return (
            <div>
                <ToastContainer/>
                <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <a className="navbar-brand text-white" href="#" onClick={() => this.setState({selectedTab: "home"})}>Monopoly</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item cursor" onClick={() => this.setState({selectedTab: "create_game"})}>
                            <div className={`nav-link text-white ${this.state.selectedTab === "create_game" ? "active" : ""}`}>
                                Créer une partie
                            </div>
                        </li>
                        <li className="nav-item cursor" onClick={() => this.setState({selectedTab: "join_game"})}>
                            <div className={`nav-link text-white ${this.state.selectedTab === "join_game" ? "active" : ""}`}>
                                Rejoindre une partie
                            </div>
                        </li>
                    </ul>
                </div>
                </nav>
                {this.state.selectedTab === "home" && (
                    <div className="container" style={{paddingTop: "50px"}}>
                        <div class="jumbotron">
                        <img 
                            src="https://upload.wikimedia.org/wikipedia/fr/thumb/c/ca/Monopoly.svg/1200px-Monopoly.svg.png"
                            className="center"
                            alt="monopoly"
                        />
                        <hr class="my-4" />
                        <p class="lead">
                            <a class="btn btn-primary btn-lg center" onClick={() => this.setState({selectedTab: "create_game"})} href="#" role="button">Jouer</a>
                        </p>
                        </div>
                    </div>
                )}
                {this.state.selectedTab === "create_game" && (
                    <div className="create-game-input">
                        <form onSubmit={this.submitNewGame}>
                            <h5>Créer une partie</h5>
                            <small className="form-text text-muted align-self-start">Nom de la partie</small>
                            <input required value={this.state.game_name}
                                   onChange={({target}) => this.setState({game_name: target.value})}
                                   type="text"
                                   className="form-control"
                                   placeholder="Nom partie"/>
                            <small className="form-text text-muted align-self-start">Mot de passe de la partie</small>
                            <input required value={this.state.game_password}
                                   onChange={({target}) => this.setState({game_password: target.value})}
                                   type="password" className="form-control mb-2"
                                   placeholder="Mot de passe"/>
                            <small className="form-text text-muted align-self-start">Ton nom</small>
                            <input required value={this.state.username}
                                   onChange={({target}) => this.setState({username: target.value})}
                                   type="text" className="form-control mb-2"
                                   placeholder="Nom"/>
                            <small className="form-text text-muted align-self-start">Ton mot de passe</small>
                            <input required value={this.state.password}
                                   onChange={({target}) => this.setState({password: target.value})} type="password"
                                   className="form-control mb-2"
                                   placeholder="Mot de passe"/>
                            <small className="form-text text-muted align-self-start">Plateau</small>
                            <select required value={this.state.plate}
                                   onChange={({target}) => this.setState({plate: target.value})}
                                   className="form-control mb-2">
                                <option value="social">Réseaux sociaux</option>
                                <option value="mp">MP</option>
                                <option value="mario">Mario</option>
                                <option value="mpcouple">MP Couples</option>
                                <option value="hp">Harry Potter</option>
                            </select>
                            <small className="form-text text-muted align-self-start">Argent de départ</small>
                            <input required value={this.state.money}
                                   onChange={({target}) => this.setState({money: target.value})}
                                   type="number" className="form-control mb-2"
                                   placeholder="Argent de départ"/>
                            <button type="submit" className="btn btn-primary">Créer</button>
                        </form>
                    </div>
                )}
                {this.state.selectedTab === "join_game" && (
                    <div className="create-game-input">
                        <h5>Rejoindre une partie</h5>
                        <small className="form-text text-muted align-self-start">Chercher une partie</small>
                        <div className="input-group">
                            <input required value={this.state.searchGameName}
                                   onChange={({target}) => this.setState({searchGameName: target.value})} type="text"
                                   className="form-control"
                                   placeholder="Search..."
                                   onKeyDown={this.keyPress}
                            />
                            <div className="input-group-append">
                                <button onClick={this.searchForGames} className="btn btn-outline-secondary"
                                        type="button">
                                    <i className="fas fa-search"/>
                                </button>
                            </div>
                        </div>
                        {this.state.gamesFound.length > 0 && (
                            <div className="mt-3">
                                <h5>Parties trouvées</h5>
                                <ul className="list-group">
                                    {this.state.gamesFound.map((game, index) => {
                                        return (
                                            <li key={game._id}
                                                onClick={() => {
                                                    if (this.state.gamesFoundSelected !== index) {
                                                        this.setState({
                                                            gamesFoundSelected: index,
                                                            joinGamePassword: "",
                                                            joinGameUsername: "",
                                                            joinGameUsernamePassword: "",
                                                        })
                                                    }
                                                }}
                                                className="cursor list-group-item">
                                                {this.state.gamesFoundSelected !== index && (
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <div className="d-flex flex-column">
                                                            <div>{game.auth.game_name}</div>
                                                            <small>Crée par: {game.player_info[0].username}</small>
                                                        </div>
                                                        <i className="fas fa-arrow-circle-right"/>
                                                    </div>
                                                )}
                                                {this.state.gamesFoundSelected === index && (
                                                    <div className="">
                                                        {game.game_state === "INVITING_PLAYERS" && (
                                                            <div>
                                                                <small>La partie n'est pas commencé, vous pouvez rejoindre...
                                                                </small>
                                                            </div>
                                                        )}
                                                        <form onSubmit={this.joinGame}>
                                                            <small
                                                                className="form-text text-muted align-self-start">Nom de la partie
                                                            </small>
                                                            <input required value={game.auth.game_name}
                                                                   type="text"
                                                                   readOnly
                                                                   className="form-control"
                                                                   placeholder="Nom de la partie"/>
                                                            <small
                                                                className="form-text text-muted align-self-start">Mot de passe de la partie
                                                            </small>
                                                            <input required value={this.state.joinGamePassword}
                                                                   onChange={({target}) => this.setState({joinGamePassword: target.value})}
                                                                   type="password" className="form-control mb-2"
                                                                   placeholder="Mot de passe de la partie"/>
                                                            <small
                                                                className="form-text text-muted align-self-start">Ton nom
                                                            </small>
                                                            <input required value={this.state.joinGameUsername}
                                                                   onChange={({target}) => this.setState({joinGameUsername: target.value})}
                                                                   type="text" className="form-control mb-2"
                                                                   placeholder="Ton nom"/>
                                                            <small
                                                                className="form-text text-muted align-self-start">Ton mot de passe
                                                            </small>
                                                            <input required value={this.state.joinGameUsernamePassword}
                                                                   onChange={({target}) => this.setState({joinGameUsernamePassword: target.value})}
                                                                   type="password"
                                                                   className="form-control mb-2"
                                                                   placeholder="Mot de passe de la partie"/>
                                                            <button type="submit" className="btn btn-primary">Rejoindre
                                                            </button>
                                                        </form>
                                                    </div>
                                                )}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        )}
                    </div>
                )}
            </div>
        );
    }
}

export default withRouter(inject("store")(observer(NewGame)));
