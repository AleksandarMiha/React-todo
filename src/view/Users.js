import useFetch from "../http/useFetch";
import { Link } from "react-router-dom";
import baseUrl from '../http/const';

const Users = () => {
  let { data: users } = useFetch(baseUrl);

  let handleDelete = (id) => {
    fetch(`${baseUrl}/${id}`, {
      method: "DELETE",
    }).then((res) => {
      console.log("res", res);
    });
  };

  return (
    <div>
      <h2> All users </h2>
      <Link to="/new-user" className="btn btn-primary">
        Add new user
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td> {user.firstName} </td>
              <td> {user.lastName}</td>
              <td> {user.email}</td>
              <td>
                <button className="btn btn-primary mx-2"> Edit </button>
                <button
                  className="btn btn-danger mx-2"
                  onClick={() => handleDelete(user.id)}
                > 
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
