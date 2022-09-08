import React from "react";
import bannerImage from "./../img/yrzTruly.jpeg";
import styled from 'styled-components';

const BannerImgTamer = styled.img.attrs(props =>({
  src: props.Img|| bannerImage,
}))`
  max-width: 80%;
  height: auto;
`;

function Header(){
  return (
    <BannerImgTamer>
    </BannerImgTamer>
  );
}

export default Header;