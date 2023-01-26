import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { addTasktoList } from "../slices/taskSlices";

const Addtask = () => {
  const dispatch = useDispatch()

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const add = (e) => {
    e.preventDefault();
    console.log({ title, description });
    dispatch (addTasktoList({ title, description }))
    setTitle('')
    setDescription('')
  };

  return (
    <section className="my-5">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Task Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Task Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Task Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        <div className="text-end">
          <Button variant="primary" type="text" onClick={(e) => add(e)}>
            Add Task
          </Button>
        </div>
      </Form>
    </section>
  );
};

export default Addtask;
