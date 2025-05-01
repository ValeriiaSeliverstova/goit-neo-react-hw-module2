import css from "./Feedback.module.css";

export default function Feedback({
  feedback,
  totalFeedback,
  positivePercentage,
}) {
  return (
    <div className={css.feedback}>
      <p className={css["feedback-item"]}>Good: {feedback.good}</p>
      <p className={css["feedback-item"]}>Neutral: {feedback.neutral}</p>
      <p className={css["feedback-item"]}>Bad: {feedback.bad}</p>
      <p className={css["feedback-item"]}>Total: {totalFeedback}</p>
      <p className={css["feedback-item"]}>Positive: {positivePercentage}%</p>
    </div>
  );
}
