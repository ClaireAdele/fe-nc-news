import React, { Component } from 'react'
import axios from "axios";

export default class VoteHandlerButton extends Component {
    state = {
        votes : this.props.votes
    }

    handleClick (number) {
        this.setState((currentState) => {
            return {votes : currentState.votes+= number}
        })
        this.props.comment_id ?
        axios.patch(`https://claire-castanet-nc-news.herokuapp.com/api/articles/${this.props.article_id}/comments/${this.props.comment_id}`, {inc_votes : number})
        : 
        axios.patch(`https://claire-castanet-nc-news.herokuapp.com/api/articles/${this.props.article_id}`, {inc_votes : number})
    }

    render() {
        return (
        <div>
        <ul>
        <li>Votes : {this.state.votes}</li>
        <button onClick={() => {this.handleClick(1)}}>"🍍 Fresh! (+1)"</button>
        <button onClick={() => {this.handleClick(-1)}}>"☣️ Rotten! (-1)"</button>
        </ul>
        </div>
        )
    }
}

