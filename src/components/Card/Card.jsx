// https://www.figma.com/file/iTdOshbZvvsDMlQz8Nh4X9/Test-(Copy)?node-id=0%3A1&t=66u5ZoHFd5WRroHu-0
// https://drive.google.com/file/d/1YJuJ1nhaJv7SRlJLH05OTw08dxW2TQGK/view
// test

import React, { useState, useEffect } from "react";
import {
  Button,
  Text,
  ImageSection,
  TextSection,
  Logo,
  Chat,
  Line,
  Avatar,
} from "./Card.styled";

import logoGoit from "../../images/logo-m@2x.png";
import chat from "../../images/chat-m@2x.png";
import line from "../../images/line-m@2x.png";
import avatar from "../../images/avatar-m@2x.png";

const initial = {
  folowers: 100500,
  follow: false,
};

const Card = () => {
  const [follow, setfollow] = useState(() => {
    return JSON.parse(window.localStorage.getItem("follow")) || initial.follow;
  });
  const [count, setCount] = useState(() => {
    return JSON.parse(window.localStorage.getItem("count")) || initial.folowers;
  });

  useEffect(() => {
    window.localStorage.setItem("count", count);
    window.localStorage.setItem("follow", follow);
  }, [count]);

  function HandleButton() {
    if (count === initial.folowers) {
      setCount(count + 1);
      setfollow(true);
    }
    if (count > initial.folowers) {
      setCount(count - 1);
      setfollow(false);
    }
  }

  function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  return (
    <>
      <ImageSection>
        <Logo src={logoGoit} alt="GOIT Logo"></Logo>
        <Chat src={chat} alt="Chat Icons"></Chat>
        <Line src={line} alt="line"></Line>
        <Avatar src={avatar} alt="Avatar"></Avatar>
      </ImageSection>
      <TextSection>
        <Text> 777 TWEETS</Text>
        <Text>{formatNumber(count)} FOLLOWERS</Text>
      </TextSection>
      <Button marked={follow} type="button" onClick={HandleButton}>
        {!follow ? "FOLLOW" : "FOLLOWING"}
      </Button>
    </>
  );
};

export default Card;
