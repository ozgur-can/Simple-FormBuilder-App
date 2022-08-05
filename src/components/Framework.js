import React from "react";
import { connect } from "react-redux";
import { addToQuestions, showOtherOpt } from "../reduxlayer/actions";
import classNames from "classnames";

const Framework = (props) => {
  const frameworkCheckHandler = (e, frameworkName) => {
    e.target.disabled = true;
    if (frameworkName !== "Diğer") props.addToQuestions(frameworkName);
    else if (frameworkName === "Diğer") props.showOtherOpt(true);
  };

  return (
    <div className="h-full flex flex-col justify-around border-0 rounded-lg">
      <span className="text-center font-semibold">Select a framework</span>
      {props.json.map((framework, i) => {
        return (
          <div key={i} className="mx-5 h-10">
            <input
              id={`${framework.name}_${i}`}
              className="peer hidden"
              type="checkbox"
              onChange={(e) => frameworkCheckHandler(e, framework.name)}
            />
            <label
              htmlFor={`${framework.name}_${i}`}
              className={classNames(
                "w-full h-full flex items-center justify-center peer-checked:border border-gray-500 rounded-lg bg-blue-100",
                {
                  "bg-blue-200": framework.name === "Diğer",
                }
              )}
            >
              <span>{framework.name}</span>
            </label>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  json: state.data,
  otherVis: state.otherVis,
});

const mapDispatchToProps = (dispatch) => ({
  addToQuestions: (frameworkName) => dispatch(addToQuestions(frameworkName)),
  showOtherOpt: (value) => dispatch(showOtherOpt(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Framework);
