import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import ImageGrid from "./ImageGrid/ImageGrid";
import Logo from "./Logo/Logo";
import Modal from "./Modal/Modal";
import Title from "./Title/Title";
import UploadForm from "./Forms/UploadForm";
import SignIn from "./User/SignIn";
import User from "./User/User";
import { WhiskyProvider } from "../context/WhiskyContext";

function MainContent() {
  const newRating = (data) => {
    if (data) {
      setRating(data);
    }
  };

  const [data, setData] = useState(null);
  const [rating, setRating] = useState(newRating);
  const user = useContext(UserContext);
  const uid = user.user.uid;

  if (uid) {
    return (
      <div className="MainContent">
        <Logo />
        <User />
        <Title />
        <UploadForm />
        <ImageGrid
          data={data}
          setData={setData}
          rating={rating}
          setRating={setRating}
        />
        <WhiskyProvider>
          {data && (
            <Modal
              data={data}
              setData={setData}
              initRating={newRating}
              rating={rating}
              setRating={setRating}
            />
          )}
        </WhiskyProvider>
      </div>
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
