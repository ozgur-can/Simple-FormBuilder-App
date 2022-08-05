import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateCommentText } from "../reduxlayer/actions";

const OtherOption = (props) => {
  const [submitButtonVis, setSubmitButtonVis] = useState(true);
  let history = useHistory();

  return (
    <div className="bg-gray-50 h-48 w-full rounded-t-none rounded-lg mt-2">
      <div className="w-full h-full flex flex-col items-center justify-around px-5 m-auto">
        <input
          type="text"
          className="w-full h-16 max-h-16 rounded-lg bg-transparen outline-1 outline-dashed indent-2"
          placeholder="Add comment.."
          onChange={(e) => {
            if (e.target.value !== "") setSubmitButtonVis(false);
            else setSubmitButtonVis(true);
            props.updateCommentText(e.target.value);
          }}
        />
        <button
          className="bg-blue-200 w-full rounded-lg h-10 max-h-10"
          type="button"
          disabled={submitButtonVis}
          onClick={() =>
            history.push({
              pathname: "/submission",
              state: {
                answers: props.answers,
                comment: props.comment,
              },
            })
          }
        >
          Gönder
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  answers: state.answers,
  comment: state.comment,
});

const mapDispatchToProps = (dispatch) => ({
  updateCommentText: (text) => dispatch(updateCommentText(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OtherOption);
