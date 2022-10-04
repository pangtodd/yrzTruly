import React from "react";
import bannerImage from "./../img/yrzTruly.jpeg";
import styled from 'styled-components';
import { Link } from "react-router-dom";

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
      <p> <Link to="/"> Home </Link> 
          <Link to="/sign-in"> Sign In </Link>
      </p>
      {/* figure out how to space/stylize later, please. */}
      <hr/>
    </React.Fragment>
  );
}

export default Header;