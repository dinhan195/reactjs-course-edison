/** @format */

import React, { useMemo, useState } from 'react';
import AddContactForm from './AddContactForm';
import { Card, Col, Nav, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { GrFavorite } from 'react-icons/gr';
import { MdDeleteForever } from 'react-icons/md';
import { onFavorite, onRemove } from './contactSlice';
import { MdOutlineFavorite } from 'react-icons/md';

function Contacts(props) {
  const [filter, setFilter] = useState('');
  const contacts = useSelector((state) => state.contact.contacts);
  const dispatch = useDispatch();
  const handleFavorite = (id) => {
    dispatch(onFavorite(id));
  };
  const filterContacts = useMemo(() => {
    return contacts.filter((contact) => {
      if (!filter) {
        return true;
      }
      return contact.status === filter;
    });
  }, [filter, contacts]);
  const handleFilterFavorite = (status) => {
    setFilter(status);
  };
  const handleRemove = (id) => {
    dispatch(onRemove(id));
  };
  return (
    <Card
      className="mt-3"
      border="info"
      style={{ width: 800, margin: 'auto', minHeight: '80vh' }}>
      <Row className="p-2 g-2">
        <Col>
          <AddContactForm />
        </Col>
        <Col>
          <Card>
            <Card.Header>
              <Nav variant="tabs" defaultActiveKey="#first">
                <Nav.Item>
                  <Nav.Link
                    href="#first"
                    onClick={() => handleFilterFavorite('')}>
                    All
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    href="#link"
                    onClick={() => handleFilterFavorite('favorite')}>
                    Favourite
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Header>
            <Card.Body>
              {filterContacts.map((contact) => (
                <Row
                  key={contact.id}
                  className="g-2 m-2"
                  style={{ borderBottom: '1px solid gray' }}>
                  <Col>
                    <strong className="d-flex m-0">{contact.name}</strong>
                    <small className="ms-4">{contact.phone}</small>
                  </Col>
                  <Col className="d-flex align-items-center justify-content-end fs-4">
                    <div
                      cursor="pointer"
                      onClick={() => handleFavorite(contact.id)}>
                      {contact.status === '' ? (
                        <GrFavorite />
                      ) : (
                        <MdOutlineFavorite />
                      )}
                    </div>
                    <MdDeleteForever
                      cursor="pointer"
                      className="fs-2 ms-3"
                      onClick={() => handleRemove(contact.id)}
                    />
                  </Col>
                </Row>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Card>
  );
}

export default Contacts;
