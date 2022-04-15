import { Fragment } from "react";
import "./App.css";
import Coluna from "./components/Coluna/Coluna";
import Main from "./components/Main/Main";
import Cards from "./components/Cards/Cards"

function App() {
  return (
    <Fragment>
      <Main>
        <Coluna name-column='To Do'>
          <Cards>Christmas Banners</Cards >
          <Cards>Redo Portfolio</Cards>
        </Coluna >
        <Coluna name-column='Inprogress'>
          <Cards>Coffee Break</Cards >
          <Cards>Updating Portfolio</Cards>
        </Coluna >
        <Coluna name-column='Review'>
          <Cards>Release to Figma Community</Cards >
          <Cards>User Feedback</Cards>
          <Cards>User Feedback</Cards>
          <Cards>Background images from humaaans.com</Cards>
        </Coluna >
        <Coluna name-column='Done'>
          <Cards>Style Guide</Cards >
          <Cards>Component Library</Cards>
          <Cards>Sticker Components</Cards>
        </Coluna >
      </Main>
    </Fragment>
  );
}

export default App;
