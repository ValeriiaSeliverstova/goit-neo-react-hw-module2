import css from "./Options.module.css";

export default function Options({ updateFeedback, totalFeedback }) {
  return (
    <div className={css.options}>
      <button className={css.button} onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button className={css.button} onClick={() => updateFeedback("neutral")}>
        Neutral
      </button>
      <button className={css.button} onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={css.button} onClick={() => updateFeedback("reset")}>
          Reset
        </button>
      )}
    </div>
  );
}
