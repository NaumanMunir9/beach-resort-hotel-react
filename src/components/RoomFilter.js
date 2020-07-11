import React, { useContext } from "react";
import { RoomContext } from "../context";

const RoomFilter = () => {
  const context = useContext(RoomContext);
  console.log(context);

  return <div>Hello from Room Filter</div>;
};

export default RoomFilter;
