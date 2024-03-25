import { createContext, useDebugValue, useEffect, useState } from "react";
// import FeedbackData from "../data/Feedback";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    FetchFeedback();
  }, []);

  const FetchFeedback = async () => {
    // const response = await fetch("http://localhost:5000/feedback");
    // const data = await response.json();
    console.log("axios");
    axios({
      method: "get",
      url: "http://localhost:5000/feedback",
    })
      .then((response) => setFeedback(response.data))
      .catch((error) => console.log(error));
    // setFeedback(data);
    setIsLoading(false);
  };

  const deleteFeedback = async (id) => {
    if (window.confirm("Are you sure want to delete?")) {
      // await fetch(`http://localhost:5000/feedback/${id}`, {
      //   method: "DELETE",
      // });

      axios({
        method: "DELETE",
        url: `http://localhost:5000/feedback/${id}`,
      })
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error));

      const filteredFB = feedback.filter((item) => item.id !== id);
      setFeedback(filteredFB);
    }
  };

  const [item4Edit, setItem4Edit] = useState({
    item: {},
    editFlag: false,
  });
  //selecting item for editing
  const editFeedback = (item) => {
    setItem4Edit({
      item: item,
      editFlag: true,
    });
  };

  const updateFeedback = async (id, updItem) => {
    // const response = await fetch(`http://localhost:5000/feedback/${id}`, {
    //   method: "PUT",
    //   headers: {
    //     "Content-Type": "applicaton/json",
    //   },
    //   body: JSON.stringify(updItem),
    // });
    // const data = await response.json();
    // setFeedback(
    //   feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
    // );

    axios({
      method: "PUT",
      url: `http://localhost:5000/feedback/${id}`,
      data: JSON.stringify(updItem),
    })
      .then((response) =>
        setFeedback(
          feedback.map((item) =>
            item.id === id ? { ...item, ...response.data } : item
          )
        )
      )
      .catch((error) => console.log(error));
  };

  const FeedbackAdd = async (newFeedback) => {
    // const id = uuidv4();
    // newFeedback = { id, ...newFeedback };

    // const response = await fetch("http://localhost:5000/feedback", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "applicaton/json",
    //   },
    //   body: JSON.stringify(newFeedback),
    // });
    // const data = await response.json();
    // setFeedback([...feedback, data]);

    axios({
      method: "POST",
      url: "http://localhost:5000/feedback",
      data: JSON.stringify(newFeedback),
    })
      .then((response) => setFeedback([...feedback, response.data]))
      // .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedback: feedback,
        deleteFeedback,
        FeedbackAdd,
        editFeedback,
        setItem4Edit,
        item4Edit,
        updateFeedback,
        isLoading,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
