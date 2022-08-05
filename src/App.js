import React from "react";
import { connect } from "react-redux";
import { addToQuestions, addToAnswers } from "./reduxlayer/actions";
import { Route } from "react-router-dom";
import SubmissionScreen from "./components/SubmissionScreen";
import Form from "./components/Form";

function App() {
  return (
    <React.Fragment>
      <Route path="/" exact component={Form} />
      <Route
        path="/submission"
        render={props => <SubmissionScreen object={props.answers} {...props} />}
      />
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  json: state.data,
  qIndex: state.qIndex,
  questions: state.questions,
  counter: state.counter,
  otherVis: state.otherVis,
  answers: state.answers
});

const mapDispatchToProps = dispatch => ({
  addToQuestions: frameworkName => dispatch(addToQuestions(frameworkName)),
  addToAnswers: (q, a) => dispatch(addToAnswers(q, a))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
