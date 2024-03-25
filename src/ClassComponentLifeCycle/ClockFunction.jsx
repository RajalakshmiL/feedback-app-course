import React, { useEffect, useState } from "react";
import Card from "../components/shared/Card";
const ClockFunction = ({ name }) => {
  const [date, setDate] = useState(new Date());
  const [topic, setTopic] = useState("Functional Component");

  const tick = () => {
    setDate(new Date());
  };
  useEffect(() => {
    console.log("Topic changed");
  }, [topic]);

  // useEffect(() => {
  //   console.log("Date changed");
  // }, [date]);

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => {
      console.log("Unmounting Phase");
      clearInterval(timerID);
    };
  }, []);

  const handleClick = () => {
    setTopic("Functional Component has changed");
  };
  return (
    <Card>
      <h3>Hello Functional Component</h3>
      <h3>Property: {name}</h3>
      <h3>It is {date.toLocaleTimeString()}</h3>
      <h3>{topic}</h3>
      <button onClick={handleClick}>Change Topic</button>
    </Card>
  );
};

export default ClockFunction;
