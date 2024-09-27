import React, { Component } from "react";

import axios from "axios";

class Follower extends Component {
  state = {
    name: "",
    username: "",
    id: "",
    avatar: "",
    bio: "",
    followers: "",
    following: "",
  };

  componentDidMount() {
    this.setState({
      username: this.props.data.login,
      avatar: this.props.data.avatar_url,
    });
    // axios
    //   .get(`https://api.github.com/users/${this.state.username}`)
    //   .then((res) =>
    //     this.setState({
    //       name: res.data.name,
    //       bio: res.data.bio,
    //       followers: res.data.followers,
    //       following: res.data.following,
    //     })
    //   )
    //   .catch((err) => console.log(err));
  }
  render() {
    // console.log(this.props.data);
    console.log(this.state.username);
    return (
      <div>
        <img width="150px" src={this.state.avatar} alt="user avatar" />
        <h3>{this.state.name}</h3>
        <h4>{this.state.username}</h4>
        <p>{this.state.bio}</p>
        <p>{this.state.followers}</p>
        <p>{this.state.following}</p>
      </div>
    );
  }
}

export default Follower;
