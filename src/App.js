import React from "react";
import styled from "styled-components";
import BgImg from "./images/background.jpg";
import Logo from "./images/hisocks-logo-circle.png";

const App = () => {
  return (
    <AppWrapper>
      <AppMain>
        <MainWrapper>
          <MainCover>
            <ContentWrapper>
              <Content>
                <AvatarWrapper>
                  <ProfilePicture>
                    <Avatar>
                      <div className="responsive-sizer" />
                      <div className="ava" />
                    </Avatar>
                  </ProfilePicture>
                  <TitleWrapper>
                    <h3 className="display-3">Hisocks</h3>
                    <p className="subtitle">Kaos Kaki Murah Jogja</p>
                  </TitleWrapper>
                </AvatarWrapper>
                <a
                  href="https://api.whatsapp.com/send?phone=6282223304969&text=Assalamualaikum%20Kak"
                  target="_block"
                >
                  <ButtonLink block>Order Via Whatsapp</ButtonLink>
                </a>
                <a href="https://shopee.co.id/shafnaaulia1" target="_block">
                  <ButtonLink block>Shopee</ButtonLink>
                </a>
                <a href="https://instagram.com/hisocks.co" target="_block">
                  <ButtonLink block>Instagram</ButtonLink>
                </a>
                <a
                  href="https://photos.app.goo.gl/pHm4M6LxPrZf5A5P8"
                  target="_block"
                >
                  <ButtonLink block>
                    Katalog Jempol Polos Tapak Hitam
                  </ButtonLink>
                </a>
                <a
                  href="https://photos.app.goo.gl/yrHdaMhHTNm2A3NK7"
                  target="_block"
                >
                  <ButtonLink block>Katalog Jempol Nilon Motif</ButtonLink>
                </a>
                <a
                  href="https://photos.app.goo.gl/V2Szj6zyiga6NheN6"
                  target="_block"
                >
                  <ButtonLink block>Katalog Jempol Printing</ButtonLink>
                </a>
                <a
                  href="https://photos.app.goo.gl/CG7NqDUJFiCVwmPy9"
                  target="_block"
                >
                  <ButtonLink block>Katalog Panjang Motif</ButtonLink>
                </a>
                <a
                  href="https://photos.app.goo.gl/TbbcFrzQSxVgqh1s6"
                  target="_block"
                >
                  <ButtonLink block>Katalog Panjang Polos</ButtonLink>
                </a>
              </Content>
            </ContentWrapper>
          </MainCover>
        </MainWrapper>
      </AppMain>
    </AppWrapper>
  );
};

const AppWrapper = styled("div")`
  flex: 1 1 auto;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 100%;
  position: relative;
`;

const AppMain = styled("main")`
  display: flex;
  flex: 1 0 auto;
  max-width: 100%;
  transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0;
`;

const MainWrapper = styled("div")`
  flex: 1 1 auto;
  max-width: 100%;
  position: relative;
`;

const MainCover = styled("div")`
  background-image: url(${BgImg});
  padding: 0;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  position: relative;
  max-width: 100%;
  height: 100%;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

const ContentWrapper = styled("div")`
  padding-top: 16px;
  margin: 0 auto;
  justify-content: center;
  flex-basis: 100%;
  flex-grow: 0;
  display: flex;
  flex: 1 1 auto;
  flex-wrap: nowrap;
  min-width: 0;
  max-width: 100%;
  @media (max-width: 1024px) {
    padding-left: 24px;
    padding-right: 24px;
  }
`;

const Content = styled("div")`
  max-width: 100%;
  width: calc(512px + 24px * 2);
`;

const AvatarWrapper = styled("div")`
  color: #fff;
  text-align: center;
  margin-top: 0;
  margin-bottom: 20px;
  align-items: center;
  flex-direction: column;
  position: relative;
  display: flex;
  flex: 1 1 auto;
  flex-wrap: nowrap;
  min-width: 0;
`;

const ProfilePicture = styled("div")`
  border-radius: 50%;
  height: 48px;
  width: 48px;
  line-height: 48px;
  font-size: 40px;
  font-weight: 300;
  @media (max-width: 1263px) {
    height: 64px;
    width: 64px;
    line-height: 64px;
  }
`;

const Avatar = styled.div`
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  flex: 1 0 auto;
  max-width: 100%;
  display: flex;
  z-index: 0;
  .responsive-sizer {
    transition: padding-bottom 0.2s cubic-bezier(0.25, 0.8, 0.5, 1);
    flex: 1 0 0px;
    padding-bottom: 100%;
  }
  .ava {
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${Logo});
    background-position: center center;
    background-color: rgba(0, 0, 0, 0.1);
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

const TitleWrapper = styled("div")`
  .display-3 {
    margin-top: 12px;
    text-align: center;
    font-size: 24px;
    line-height: 28px;
    word-break: break-word;
  }
  .subtitle {
    margin-top: 8px;
    font-size: 16px;
    line-height: 18px;
    text-align: center;
  }
`;

const ButtonLink = styled("button")`
  background-color: #fbeff0;
  border-color: #fbeff0;
  height: 48px;
  min-width: 85px;
  padding: 0 20px;
  margin-bottom: 16px;
  color: rgba(0, 0, 0, 0.8);
  will-change: box-shadow;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.18);
  cursor: pointer;
  align-items: center;
  border-radius: 8px;
  display: flex;
  flex: 0 0 auto;
  font-size: 500;
  font-size: 14px;
  letter-spacing: 0;
  justify-content: center;
  outline: 0;
  position: relative;
  text-decoration: none;
  text-indent: 0;
  transition-duration: 0.28s;
  transition-property: box-shadow, transform, opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  :hover {
    filter: brightness(85%);
  }
  ${(props) =>
    props.block && {
      display: "flex",
      flex: "1 0 auto",
      minWidth: "100%!important",
      maxWidth: "auto",
    }}
`;

export default App;
