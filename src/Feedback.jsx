import css from "./Feedback.module.css";

export default function Feedback({
  feedback,
  totalFeedback,
  positivePercentage,
}) {
  if (totalFeedback === 0) {
    return (
      <div className={css.feedback}>
        <h2>No feedback yet</h2>
      </div>
    );
  } else {
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
}
