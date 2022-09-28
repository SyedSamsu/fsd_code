import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import UserData from "../data/Userdata.json";
import ChartComponent from "./ChartComponent";
import EditComponent from "./EditComponent";

const ProfilePage = () => {
  const { id } = useParams();
  const data = UserData;
  const [singleData, setSingleData] = useState();
  useEffect(() => {
    const filter = data.profile.filter((emp) => emp.userid === id);
    setSingleData(filter[0]);
  }, [data.profile, id]);
  return (
    <div className="container">
      {singleData === undefined ? (
        <div> ...Loading</div>
      ) : (
        <>
          <div className="h3">Profile</div>
          <div>
            Name :{" "}
            {singleData.user.name.title +
              " " +
              singleData.user.name.first +
              " " +
              singleData.user.name.last}
            <br />
            Short Name :{" "}
            {singleData.user.name.title + " " + singleData.user.name.short}
            <br />
            Email : {singleData.user.email}
            <br />
            Contact :{" "}
            {singleData.user["contact-ext"] + " " + singleData.user.contact}
            <br />
            Join date :{" "}
            {singleData.user["join-date"] +
              " ( " +
              singleData.user["join-date-format"] +
              " ) "}
          </div>
          <hr />
          <div>Team Profile</div>
          <div>
            Team : {singleData.team}
            <br />
            Job Title : {singleData["job-title"]}
            <br />
            Last Login :{" "}
            {singleData["last-login"].datetime +
              " ( " +
              singleData["last-login"].format +
              " ) "}
            <br />
            LoggedIn Status :{" "}
            {singleData.loggedIn === true ? <>True</> : <>False</>}
          </div>
          <hr />
          <div>Profile Images</div>
          <img
            src={singleData.user.picture.large}
            className="img-fluid"
            alt="No"
          />
          <img
            src={singleData.user.picture.medium}
            className="img-fluid"
            alt="No"
          />
          <img
            src={singleData.user.picture.thumbnail}
            className="img-fluid"
            alt="No"
          />
          <hr />
          <EditComponent data={singleData} />
        </>
      )}
      <hr/>
      <div className="row">
        <div className="h3">Chart</div>
        <ChartComponent UserData={data} />
      </div>
    </div>
  );
};

export default ProfilePage;
