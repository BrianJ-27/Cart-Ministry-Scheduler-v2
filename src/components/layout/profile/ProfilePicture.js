// import { makeStyles } from '@material-ui/styles';
import React from "react";
import styled from "styled-components";

export default function ProfilePicture({ profilePicture }) {
  return (
    <div>
      <Image src={profilePicture} alt="publisher logo picture" />
    </div>
  );
}

const Image = styled.img`
  border-radius: 50%;
  background-color: #fff;
  width: 50px;
  @media only screen and (min-width: 768px) {
    width: 55px;
  }
`;
