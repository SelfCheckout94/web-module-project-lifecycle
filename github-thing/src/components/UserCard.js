import React, { Component } from "react";

class UserCard extends Component {
  render() {
    return (
      <div>
        <img width="200px" src={this.props.avatar} alt="user avatar" />
        <div>
          <h2>{this.props.name}</h2>
          <h4>Username: {this.props.username}</h4>
          <p>Bio: {this.props.bio}</p>
          <p>Followers: {this.props.followers}</p>
          <p>Following: {this.props.following}</p>
        </div>
      </div>
    );
  }
}

export default UserCard;
