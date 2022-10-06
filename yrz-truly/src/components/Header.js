import React from "react";
import bannerImage from "./../img/yrzTruly.jpeg";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const BannerImgTamer = styled.img.attrs(props =>({
  src: props.Img|| bannerImage,
}))`
  max-width: 100%;
  height: auto;
`;

function Header(){
  return (
    <React.Fragment>
      <BannerImgTamer>
      </BannerImgTamer>
      <hr/>
      <Navbar />
      <hr/>
    </React.Fragment>
  );
}

export default Header;