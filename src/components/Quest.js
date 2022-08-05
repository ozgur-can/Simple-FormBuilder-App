import React from "react";
import { connect } from "react-redux";
import { addToAnswers } from "../reduxlayer/actions";

const Quest = (props) => {
  return props.qIndex ? (
    <div className="bg-gray-100 h-48 w-full flex flex-col items-center justify-around rounded-t-none rounded-lg mt-2">
      <span className="font-semibold">
        {props.questions[props.counter].question}
      </span>
      {props.questions[props.counter].anwers.map((a, i) => (
        <button
          className="bg-blue-100 rounded-lg w-72"
          key={i}
          onClick={() =>
            props.addToAnswers(props.questions[props.counter].question, a)
          }
        >
          {a}
        </button>
      ))}
    </div>
  ) : (
    <ul>Framework seçimi yap..</ul>
  );
};

const mapStateToProps = (state) => ({
  qIndex: state.qIndex,
  questions: state.questions,
  counter: state.counter,
});

const mapDispatchToProps = (dispatch) => ({
  addToAnswers: (q, a) => dispatch(addToAnswers(q, a)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Quest);
