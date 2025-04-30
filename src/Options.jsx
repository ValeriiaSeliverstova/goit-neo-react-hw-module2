import css from "./Options.module.css";

export default function Options({ handleFeedback }) {
  return (
    <div className="options">
      <button onClick={() => handleFeedback("good")}>Good</button>
      <button onClick={() => handleFeedback("neutral")}>Neutral</button>
      <button onClick={() => handleFeedback("bad")}>Bad</button>
    </div>
  );
}
