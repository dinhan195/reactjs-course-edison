/** @format */

import { Button, Col, Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import AddStudentForm from './AddStudentForm';
import { useDispatch, useSelector } from 'react-redux';
import { removeStudent } from './studentSlice';
import AddCourse from './AddCourse';

function StudentList() {
  const students = useSelector((state) => state.student.students);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(removeStudent(id));
  };
  return (
    <div className="container m-auto mt-3 ">
      <Row>
        <Col md={4} className="me-5">
          <AddStudentForm />
        </Col>
        <Col as={'div'}>
          <Table
            md={8}
            style={{ width: 800, minHeight: '100px' }}
            striped
            bordered
            hover>
            <thead>
              <tr>
                <th style={{ width: 40, textAlign: 'center' }}>ID</th>
                <th>Name</th>
                <th>Couses</th>
                <th style={{ width: 40, textAlign: 'center' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>
                    <AddCourse
                      studentId={student.id}
                      courses={student.courses}
                    />
                  </td>
                  <td>
                    <Button
                      variant="outline-secondary"
                      onClick={() => handleDelete(student.id)}>
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
}

export default StudentList;
