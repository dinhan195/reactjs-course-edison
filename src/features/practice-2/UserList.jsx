/** @format */

import React from 'react';
import { Button, Table } from 'react-bootstrap';

import './style.scss';
import AddNewArticle from './AddNewArticle';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, removeArticle } from './manageUserSlice';

function UserList(props) {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const handleDeleteUser = (id) => {
    dispatch(deleteUser(id));
  };
  const handleDeleteArticle = (articleId, userId) => {
    dispatch(
      removeArticle({
        articleId: articleId,
        userId: userId,
      })
    );
  };
  return (
    <div className="mt-5">
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Articles</th>
            <th>Action</th>
          </tr>
        </thead>
        {users.map((user) => {
          return (
            <tbody key={user.id}>
              <tr className="text-right align-top">
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>
                  <AddNewArticle userId={user.id} />
                  <ul style={{ width: 200 }}>
                    {user.article.map((article) => {
                      return (
                        <li key={`${article.article}-${article.id}`}>
                          <span className="me-5">{article.article}</span>
                          <Button
                            variant="outline-secondary px-2 py-0"
                            onClick={() =>
                              handleDeleteArticle(article.id, user.id)
                            }>
                            Delete
                          </Button>
                        </li>
                      );
                    })}
                  </ul>
                </td>
                <td>
                  <Button
                    variant="outline-secondary"
                    onClick={() => handleDeleteUser(user.id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </Table>
    </div>
  );
}

export default UserList;
