import React from "react";
import Card from "../components/shared/Card";

const AboutPage = () => {
  return (
    <Card>
      <div className="about">
        <h1>About this Project</h1>
        <p>This is a react app to leave feedback for product or service</p>
        <p>Version 1.0.0</p>
        <p>
          <a href="/">Go back to Home</a>
        </p>
      </div>
    </Card>
  );
};

export default AboutPage;
