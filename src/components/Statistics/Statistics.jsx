import React from "react";

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <div>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive feedback: {positivePercentage}%</p>
        </div>
    );
}


// <div>
// <p>Statistics</p>
// <p>Good:{this.state.good}</p>
// <p>Neutral: {this.state.neutral}</p>
// <p>Bad: {this.state.bad}</p>
// <p>Total: {this.countTotalFeedback()}</p>
// <p>Positive feedback: {this.countTotalFeedback() === 0 ? "0" : this.countPositiveFeedbackPercentage()} </p>
// </div>
