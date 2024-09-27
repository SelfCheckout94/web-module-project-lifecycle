import React, { Component } from "react";

import Follower from "./Follower";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

class Follows extends Component {
  state = {
    followersArr: [],
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/users/SelfCheckout94/followers")
      .then((res) => {
        this.setState({
          followersArr: res.data,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    console.log(this.state.followersArr);
    return (
      <div>
        {this.state.followersArr.map((follower) => {
          return <Follower key={uuidv4()} data={follower} />;
        })}
      </div>
    );
  }
}

export default Follows;
