import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 380px;
  height: 460px;
  margin: 50px;
  //   left: 435px;
  //   top: 168px;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const ImageSection = styled.div``;

export const Logo = styled.img`
  position: absolute;
  width: 76px;
  height: 22px;
  left: 20px;
  top: 20px;
`;

export const Chat = styled.img`
  position: absolute;
  width: 308px;
  height: 168px;
  left: 36px;
  top: 28px;
`;

export const Line = styled.img`
  position: absolute;
  width: 380px;
  height: 8px;
  left: 0px;
  top: 214px;
`;

export const Avatar = styled.img`
  position: absolute;
  width: 80px;
  height: 80px;
  left: 150px;
  top: 178px;
`;

export const TextSection = styled.div`
  margin-top: 284px;
`;

export const Text = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px auto;
  color: #ebd8ff;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  margin: 26px auto 36px auto;
  gap: 6px;
  width: 196px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;

  border: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  background: ${(props) => (props.marked ? "#5CD3A8" : "#ebd8ff")};

  :hover {
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.75);
  }
`;
