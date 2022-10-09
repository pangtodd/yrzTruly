import React from "react";
import bannerImage from "./../img/yrzTruly.jpeg";
import styled from 'styled-components';

const BannerImgTamer = styled.img.attrs(props =>({
  src: props.Img|| bannerImage,
}))`
  display: block;
  max-width: 70%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
`;

function Header(){
  return (
    <React.Fragment>
      <BannerImgTamer>
      </BannerImgTamer>
    </React.Fragment>
  );
}

export default Header;