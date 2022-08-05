import React from "react";

const QuestionAnswers = (props) => {
  const answers = props.location.state.answers;

  return (
    <div className="h-full flex flex-col justify-around items-center text-center mx-5">
      {answers.map((data, i) => {
        return (
          <div className="mb-3 rounded-lg w-full" key={i}>
            <h1 className="font-semibold bg-blue-200 rounded-t-lg py-2">{data.question}</h1>
            <p className="font-extralight bg-blue-100 rounded-b-lg py-1">{data.answer}</p>
          </div>
        );
      })}
    </div>
  );
};

const Comment = (props) => {
  const comment = props.location.state.comment;
  return (
    <div className="flex flex-col bg-blue-200 items-center mx-5 rounded-lg py-2">
      <h3 className="font-semibold">Yorum: <span className="font-light italic">{comment}</span></h3>
    </div>
  );
};

const SubmissionScreen = (props) => {
  return (
    <div className="py-5 w-80 h-auto absolute left-2/4 top-2/4 -translate-x-1/2 -translate-y-1/2 bg-gray-100 border-0 rounded-lg overflow-y-auto">
      {QuestionAnswers(props)}
      {Comment(props)}
    </div>
  );
};
export default SubmissionScreen;
