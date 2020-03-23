import React from "react";

const AccountInfo = ({ user }) => {
  return (
    <>
      <h5 className="account-page-tile">Account settings</h5>
      <h6 className="account-page-tile">Email address</h6>
      <span className="smaller-text">{user.email}</span>
      <h6 className="account-page-tile">Name</h6>
      <span className="smaller-text">{user.name}</span>
      <span className="like-comment-badges"></span>
      <h5 className="account-page-tile">Location</h5>
      <h6 className="account-page-tile">City</h6>
      <span className="smaller-text">{user.city}</span>
      <h6 className="account-page-tile">State</h6>
      <span className="smaller-text">{user.state}</span>
      <h6 className="account-page-tile">Country</h6>
      <span className="smaller-text">{user.country}</span>
    </>
  );
};

export default AccountInfo;
