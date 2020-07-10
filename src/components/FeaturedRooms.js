import React, { Component } from "react";
import { RoomContext } from "../context";

export class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    return <div>Hello from Featured Rooms</div>;
  }
}

export default FeaturedRooms;
