import "./App.css";

import React, { Component } from "react";

import UserCard from "./components/UserCard";
import axios from "axios";

class App extends Component {
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
    axios
      .get("https://api.github.com/users/selfcheckout94")
      .then((res) =>
        this.setState({
          name: res.data.name,
          username: res.data.login,
          id: res.data.id,
          avatar: res.data.avatar_url,
          bio: res.data.bio,
          followers: res.data.followers,
          following: res.data.following,
        })
      )
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div>
        <h1>Yo</h1>
        <UserCard
          name={this.state.name}
          username={this.state.username}
          key={this.state.id}
          avatar={this.state.avatar}
          bio={this.state.bio}
          followers={this.state.followers}
          following={this.state.following}
        />
      </div>
    );
  }
}

export default App;
