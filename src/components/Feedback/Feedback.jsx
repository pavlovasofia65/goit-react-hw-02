import css from './Feedback.module.css';
export default function Feedback({good, neutral, bad, total, positive}) {
    return (
        <div>
            <p className="feedback">Good: {good}</p>
            <p className="feedback">Neutral: {neutral}</p>
            <p className="feedback">Bad: {bad}</p>
            <p className="feedback">Total: {total}</p>
            {good > 0 && (<p className="positive">Positive: {positive}%</p>)}
        </div>
    )
}