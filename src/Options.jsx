import css from "./Options.module.css";

export default function Options({ updateFeedback }) {
  return (
    <div className={css.options}>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      <button onClick={() => updateFeedback("reset")}>Reset</button>
    </div>
  );
}
