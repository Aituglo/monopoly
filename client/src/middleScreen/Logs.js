import React, {Component} from 'react';
import {inject, observer} from "mobx-react";

class Logs extends Component {

    componentDidUpdate(prevProps, prevState, snapshot) {
        const div = this.refs.logs;
        div.scrollTop = div.scrollHeight;
    }

    componentDidMount() {
        const div = this.refs.logs;
        div.scrollTop = div.scrollHeight;
    }

    render() {
        return (
            <div ref="logs" className="logs-tab">
                {this.props.store.game.logs.length === 0 && (
                    <div>Pas d'actions...</div>
                )}
                {this.props.store.game.logs.map((log, i) => {
                    return (
                        <div key={i}>
                            {log.log}
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default inject("store")(observer(Logs));