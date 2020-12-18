import React from 'react'
import styled from 'styled-components'
import BgImg from './images/background.jpg'

const App = () => {
  return (
    <AppWrapper>
      <AppMain>
        <MainWrapper>
          <MainCover>

          </MainCover>
        </MainWrapper>
      </AppMain>
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  flex: 1 1 auto;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    max-width: 100%;
    position: relative;
`

const AppMain = styled.main`
  display: flex;
  flex: 1 0 auto;
  max-width: 100%;
  transition: .2s cubic-bezier(.4,0,.2,1);
  padding: 0;
`

const MainWrapper = styled.div`
  flex: 1 1 auto;
  max-width: 100%;
  position: relative;
`

const MainCover = styled.div`
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
`

export default App;
