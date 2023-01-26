import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import MyVerticallyCenteredModal from "./updateTask";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedTask , removeTaskFromList} from "../slices/taskSlices";

const TasksList = () => {  
  const { taskList } = useSelector((state) => state.tasks);
  const dispatch = useDispatch()

  const updateTask = (task) => {
    console.log("updateTask");
    setModalShow(true);
    dispatch(setSelectedTask(task))
  };

  const deleteTask = (task) => {
    console.log("deleteTask");
    dispatch(removeTaskFromList(task))
  };

  const [modalShow, setModalShow] = useState("");

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {taskList &&
            taskList.map((task,index) => {
              return (
                <tr className="text-start" key={task.id}>
                  <td>{index+1}</td>
                  <td>{task.title}</td>
                  <td>{task.description}</td>
                  <td className="text-center">
                    <Button
                      variant="primary"
                      className="mx-3"
                      onClick={() => updateTask(task)}
                    >
                      <i className="bi bi-pencil"></i>
                    </Button>
                    <Button
                      variant="primary"
                      className="mx-3"
                      onClick={() => deleteTask(task)}
                    >
                      <i className="bi bi-trash"></i>
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default TasksList;