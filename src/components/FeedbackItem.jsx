import React from "react";
import { useState } from "react";
import Card from "./shared/Card";
import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackItem = ({ item }) => {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
  //   const [rating, setRating] = useState(5);
  //   const [text, setText] = useState("This is a feedback text");

  //   const handleClick = () => {
  //     setRating((prev) => {
  //       return prev + 2;
  //     });
  //   };
  // const handleDelete = (id) => {
  //   console.log("button is clicked from App:", id);
  // };
  return (
    <Card reverse={false}>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <button onClick={() => editFeedback(item)} className="edit">
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
      {/* <button onClick={handleClick}>Click</button> */}
    </Card>
  );
};

export default FeedbackItem;
