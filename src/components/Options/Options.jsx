import css from './Options.module.css'; 
export default function Options({updateFeedback, totalFeedback}) {
    return(
        <div className={css.buttons}>
            <button className={css.option} onClick={() => updateFeedback('good')}>Good</button>
            <button className="option" onClick={() => updateFeedback('neutral')}>Neutral</button>
            <button className="option" onClick={() => updateFeedback('bad')}>Bad</button>
            {totalFeedback > 0 && (<button className="option" onClick={() => updateFeedback('reset')}>Reset</button>)}
        </div>
    )
}