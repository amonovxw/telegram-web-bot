import React, { useState } from "react";
import "./card.css";
import Button from "../button/Button";
const Card = (props) => {
  const { course, onAddItems, onRemoveItems } = props;

  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
    onAddItems(course)
  };

  const handleDescrement = () => {
    if (count === 0) {
      return;
    }
    setCount((prev) => prev - 1);
    onRemoveItems(course)
  };

  return (
    <div className="card">
      <span className={`${count !== 0 ? 'card__badge' : "card__badge_hidden"}`}>{count}</span>
      <div className="image__container">
        <img
          src={course.Image}
          alt={course.title}
          width={"100%"}
          height={"230px"}
        />
      </div>

      <div className="card__body">
        <h2 className="card__title">{course.title}</h2>
        <div className="card__price">
          {Number(course.price).toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </div>
      </div>

      <div className="hr"></div>
      <div className="btn__container">
        <Button title={"+"} onClick={handleIncrement} />
        {
          count !== 0 && (
            <Button
            title={"-"}
            type={"remove"}
            onClick={handleDescrement}
          />
            )
        }
       
      </div>
    </div>
  );
};

export default Card;
