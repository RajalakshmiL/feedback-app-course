import React, { useState, useEffect } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackForm = () => {
  const { FeedbackAdd, item4Edit, updateFeedback, setItem4Edit } =
    useContext(FeedbackContext);
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(7);
  const handleTextChange = (e) => {
    if (text.trim() === "" || text.trim().length < 10) {
      setBtnDisabled(true);
      setMessage("Text must be atleast 10 char");
    } else {
      setBtnDisabled(false);
      setMessage("");
    }
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text: text,
        rating: rating,
      };
      if (item4Edit.editFlag === true) {
        updateFeedback(item4Edit.item.id, newFeedback);
        setItem4Edit({
          item: {},
          editFlag: false,
        });
      } else {
        FeedbackAdd(newFeedback);
      }
      setText("");
      setRating(7);
    }
  };

  useEffect(() => {
    if (item4Edit.editFlag === true) {
      setBtnDisabled(false);
      setText(item4Edit.item.text);
      setRating(item4Edit.item.rating);
    }
  }, [item4Edit]);
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your serice with us?</h2>
        <RatingSelect
          onSelect={(rating) => setRating(rating)}
          selectedValue={rating}
        />
        <div className="input-group">
          {/* Controlled component */}
          <input
            type="text"
            placeholder="Write a review"
            onChange={handleTextChange}
            value={text}
          ></input>
          <Button isDisabled={btnDisabled}>Send</Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
