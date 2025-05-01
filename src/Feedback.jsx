import css from "./Feedback.module.css";

export default function Feedback({
  feedback,
  totalFeedback,
  positivePercentage,
}) {
  return (
    <div className={css.feedback}>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total Feedback: {totalFeedback}</p>
      <p>Positive: {positivePercentage}%</p>
    </div>
  );
}
