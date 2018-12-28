import TodoItem from "../components/TodoItem";
import { connect } from "react-redux";
const mapStateToProps = state => {
  return {
    tasks: state.tasks.tasks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClickDone: taskID => {
      console.log(taskID);
      dispatch(toggleTask(taskID));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoItem);
