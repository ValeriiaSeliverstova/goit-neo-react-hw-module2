import css from "./Feedback.module.css";

export default function Feedback({
  feedback,
  totalFeedback,
  positivePercentage,
}) {
  return (
    <div className={css.feedbackSection}>
      <p className={css.feedback}>Good: {feedback.good}</p>
      <p className={css.feedback}>Neutral: {feedback.neutral}</p>
      <p className={css.feedback}>Bad: {feedback.bad}</p>
      <p className={css.feedback}>Total: {totalFeedback}</p>
      <p className={css.feedback}>Positive: {positivePercentage}%</p>
    </div>
  );
}
