import React, { useState } from "react";

const FormComponent = (props) => {
  const [state, setState] = useState(props.data);
  const [alertMsg, setAlert] = useState("");
  const UpdateEmployees = () => {
    setAlert("Updated Successfully");
    alert("Updated Successfully")
  };
  const ResetForm = (event) => {
    setState(props.data)
    event.preventDefault();
  };
  console.log(state);
  return (
    <>
      <div className="container">
      <div className="h3 text-center">Edit Form</div>
        <form>
          <div className="mb-3">
            <label htmlFor="FirstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="FirstName"
              value={state.user.name.first || ""}
              onChange={(e) =>
                setState({
                  ...state,
                  user: {
                    ...state.user,
                    name: { ...state.user.name, first: e.target.value },
                  },
                })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="LastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="LastName"
              value={state.user.name.last || ""}
              onChange={(e) =>
                setState({
                  ...state,
                  user: {
                    ...state.user,
                    name: { ...state.user.name, last: e.target.value },
                  },
                })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="ShortName" className="form-label">
              Short Name
            </label>
            <input
              type="text"
              className="form-control"
              id="ShortName"
              value={state.user.name.short || ""}
              onChange={(e) =>
                setState({
                  ...state,
                  user: {
                    ...state.user,
                    name: { ...state.user.name, short: e.target.value },
                  },
                })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Title" className="form-label">
              Title
            </label>
            <select
              id="Title"
              className="form-control"
              value={state.user.name.title || ""}
              onChange={(e) =>
                setState({
                  ...state,
                  user: {
                    ...state.user,
                    name: { ...state.user.name, title: e.target.value },
                  },
                })
              }
            >
              <option>Mr</option>
              <option>Mrs</option>
              <option>Ms</option>
              <option>Dr</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="Email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="Email"
              value={state.user.email || ""}
              onChange={(e) =>
                setState({
                  ...state,
                  user: { ...state.user, email: e.target.value },
                })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Contact" className="form-label">
              Contact
            </label>
            <input
              type="text"
              className="form-control"
              id="Contact"
              value={state.user.contact || ""}
              onChange={(e) =>
                setState({
                  ...state,
                  user: { ...state.user, contact: e.target.value },
                })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="contact-ext" className="form-label">
              Contact Ext
            </label>
            <input
              type="text"
              className="form-control"
              id="contact-ext"
              value={state.user["contact-ext"] || ""}
              onChange={(e) =>
                setState({
                  ...state,
                  user: { ...state.user, "contact-ext": e.target.value },
                })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="join-date" className="form-label">
              Join Date
            </label>
            <input
              type="text"
              className="form-control"
              id="join-date"
              value={state.user["join-date"] || ""}
              onChange={(e) =>
                setState({
                  ...state,
                  user: { ...state.user, "join-date": e.target.value },
                })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="team" className="form-label">
              Team
            </label>
            <input
              type="text"
              className="form-control"
              id="team"
              value={state.team || ""}
              onChange={(e) => setState({ ...state, team: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="job-title" className="form-label">
              Job-Title
            </label>
            <input
              type="text"
              className="form-control"
              id="job-title"
              value={state["job-title"] || ""}
              onChange={(e) =>
                setState({ ...state, "job-title": e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="last-login" className="form-label">
              Last-Login
            </label>
            <input
              type="text"
              className="form-control"
              id="last-login"
              value={state["last-login"].datetime || ""}
              onChange={(e) =>
                setState({
                  ...state,
                  "last-login": {
                    ...state["last-login"],
                    datetime: e.target.value,
                  },
                })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="loggedIn" className="form-label">
              loggedIn
            </label>
            <select
              id="loggedIn"
              className="form-control"
              value={state.loggedIn}
              onChange={(e) =>
                setState({
                  ...state,
                  loggedIn: e.target.value === "true" ? true : false,
                })
              }
            >
              <option>true</option>
              <option>false</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="Picture" className="form-label">
              Picture large : Url
            </label>
            <input
              type="text"
              className="form-control"
              id="Picture"
              value={state.user.picture.large || ""}
              onChange={(e) =>
                setState({
                  ...state,
                  user: {
                    ...state.user,
                    picture: { ...state.user.picture, large: e.target.value },
                  },
                })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Picturemedium" className="form-label">
              Picture Medium : Url
            </label>
            <input
              type="text"
              className="form-control"
              id="Picturemedium"
              value={state.user.picture.medium || ""}
              onChange={(e) =>
                setState({
                  ...state,
                  user: {
                    ...state.user,
                    picture: { ...state.user.picture, medium: e.target.value },
                  },
                })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Picturethumbnail" className="form-label">
              Picture thumbnail : Url
            </label>
            <input
              type="text"
              className="form-control"
              id="Picturethumbnail"
              value={state.user.picture.thumbnail || ""}
              onChange={(e) =>
                setState({
                  ...state,
                  user: {
                    ...state.user,
                    picture: {
                      ...state.user.picture,
                      thumbnail: e.target.value,
                    },
                  },
                })
              }
            />
          </div>
          <div className="text-center">
            <button
              className="btn btn-primary  w-25"
              onClick={() => {
                UpdateEmployees();
              }}
            >
              Submit
            </button>
            <button
              className="btn btn-secondary ms-5  w-25"
              onClick={(event) => {
                ResetForm(event);
              }}
            >
              Reset
            </button>
            <button
              className="btn btn-danger ms-5 w-25"
              onClick={() => {
                props.setModalOpen(false);
              }}
            >
              Close
            </button>
          </div>
          <div className="text-center h3">{alertMsg}</div>
        </form>
      </div>
    </>
  );
};

export default FormComponent;
