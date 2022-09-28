import React from "react";
import { useNavigate } from "react-router";
import UserData from "../data/Userdata.json";

const HomePage = () => {
  const data = UserData;
  const navigate = useNavigate();

  return (
    <>
      <div className="container">
      <div className="h3 text-center text-primary ">List of all Employees</div>
      *you can view the profile by clicking particular id of the employee
        <div className="row">
          <table className="table table-bordered table-hover m-auto">
            <thead className="table-light ">
              <tr className="table-secondary">
                <th>
                  <span className="h6">
                    <strong>Id*</strong>
                  </span>
                </th>
                <th>Name</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Join Date</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.profile.map((emp) => {
                  const id = parseInt(emp.userid);
                  return (
                    <tr key={id}>
                      <td
                        className="btn btn-light w-100"
                        onClick={() => {
                          navigate(`/profile/${id}`);
                        }}
                      >
                        {id}
                      </td>
                      <td>
                        {emp.user.name.title +
                          " " +
                          emp.user.name.first +
                          " " +
                          emp.user.name.last}
                      </td>
                      <td>{emp.user.email}</td>
                      <td>{emp.user.contact}</td>
                      <td>{emp.user["join-date"]}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        <hr />
      </div>
    </>
  );
};

export default HomePage;
