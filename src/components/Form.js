import React from "react";
import { connect } from "react-redux";
import Framework from "./Framework";
import Quest from "./Quest";
import OtherOption from "./OtherOption";

const Form = (props) => (
  <div className="w-80 h-80 absolute left-2/4 top-2/4 -translate-x-1/2 -translate-y-1/2 bg-gray-100 border-0 rounded-lg">
    <Framework />
    {props.counter < props.qIndex && <Quest />}
    {((props.counter !== 0 && props.counter === props.qIndex) ||
      props.otherVis === true) && <OtherOption />}
  </div>
);

const mapStateToProps = (state) => ({
  counter: state.counter,
  otherVis: state.otherVis,
  qIndex: state.qIndex,
});

export default connect(mapStateToProps, null)(Form);
