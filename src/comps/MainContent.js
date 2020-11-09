import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { GlobalContext } from "../context/GlobalContext";
import { GlobalProvider } from "../context/GlobalContext";
import ImageGrid from "./ImageGrid";
import Logo from "./Logo";
import Modal from "./Modal";
import Title from "./Title";
import UploadForm from "./UploadForm";
import SignIn from "./SignIn";
import User from "./User";

function MainContent() {
  const user = useContext(UserContext);
  const uid = user.user.uid;
  const data = useContext(GlobalContext);
  const setData = useContext(GlobalContext);
  const setRating = useContext(GlobalContext);
  const rating = useContext(GlobalContext);
  const newRating = useContext(GlobalContext);

  if (uid) {
    return (
      <GlobalProvider>
      <div className="MainContent">
        <Logo />
        <User />
        <Title />
        <UploadForm />
        <ImageGrid />
        {data && (
          <Modal
            data={data}
            setData={setData}
            initRating={newRating}
            rating={rating}
            setRating={setRating}
          />
        )}
      </div>
      </GlobalProvider>
    );
  } else {
    return (
      <>
        <Logo />
        <Title />
        <SignIn />
      </>
    );
  }
}
export default MainContent;
