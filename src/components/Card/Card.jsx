// https://www.figma.com/file/iTdOshbZvvsDMlQz8Nh4X9/Test-(Copy)?node-id=0%3A1&t=66u5ZoHFd5WRroHu-0

import React, { useState } from "react";
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

const mainBase = {
  folowers: 100500,
};

const Card = () => {
  const [follow, setfollow] = useState(false);
  const [count, setCount] = useState(mainBase.folowers);

  const HandleButton = () => {
    if (!follow) {
      setfollow(true);
      setCount(count + 1);
    }
    if (follow) {
      setfollow(false);
      setCount(count - 1);
    }
  };

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
