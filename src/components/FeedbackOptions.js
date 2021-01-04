import React from "react";
import PropTypes from "prop-types";
import Section from "./Section";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <Section title="Please leave feedback">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            name={option}
            onClick={onLeaveFeedback}
          >
            {option}
          </button>
        ))}
      </Section>
    </>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
