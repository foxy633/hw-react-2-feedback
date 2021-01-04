import React from "react";
import PropTypes from "prop-types";
import Section from "./Section";

const Statistics = ({ good, neutral, bad, total, positivePercentege }) => {
  return (
    <>
      <Section title="Statistics">
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive feedback: {positivePercentege}%</p>
      </Section>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentege: PropTypes.number.isRequired,
};

export default Statistics;
