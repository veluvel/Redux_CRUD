// import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import Addtask from "./components/Addtask";
import Navbar from "./components/Navbar";
import TasksList from "./components/TasksList";
// import Login from "./Login";
// import Profile from "./Profile";

function App() {
  return (
    <Container>
      <Navbar />
      <Row className="justify-content-md-center">
        <Col lg="6">
          <Addtask />
          <TasksList/>
        </Col>
      </Row>
    </Container>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Profile />}></Route>
    //     <Route path="/login" element={<Login />}></Route>
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
