import React from "react";
import styled from "styled-components";
import { Carousel } from "antd";

const Container = styled.div`
  padding-top: 100px;
  .ant-carousel .slick-slide {
    text-align: center;
    width: 100%;
    height: 100%;

    line-height: 160px;
    /* background: #364d79; */
    overflow: hidden;
  }
`;

const BgImg = styled.div`
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center center;
  filter: grayscale(70%);
  -webkit-filter: grayscale(70%);

  -moz-filter: grayscale(70%);

  -o-filter: grayscale(70%);
  width: 1920px;
  height: 430px;
`;

export default () => {
  return (
    <Container>
      <Carousel autoplay autoplaySpeed={2800} speed={1500}>
        {/* <BgImg url="${process.env.PUBLIC_URL}/water1.jpg" />
        <BgImg url="${process.env.PUBLIC_URL}/water2.jpg" />
        <BgImg url="${process.env.PUBLIC_URL}/water3.jpg" /> */}

        {/* <BgImg url="${process.env.PUBLIC_URL}/aircare.png" />
        <BgImg url="${process.env.PUBLIC_URL}/bodycare.png" />
        <BgImg url="${process.env.PUBLIC_URL}/watercare.png" /> */}

        <BgImg url={`${process.env.PUBLIC_URL}/water.png`} />
        <BgImg url={`${process.env.PUBLIC_URL}/water4.jpg`} />
        <BgImg url={`${process.env.PUBLIC_URL}/water7.jpg`} />
      </Carousel>
    </Container>
  );
};
