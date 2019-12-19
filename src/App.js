import React from "react";
import PictureInfo from "./components/PictureInfo";
import logo from "./assets/logo.png";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import PageTitle from "./components/PageTitle";
// import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className='logo-container'>
        <img className='logo' src={logo} alt='nasa logo' />
      <PageTitle/>
      {/* <h1>NASA Pic of the Day</h1> */}
      <PictureInfo />
      </div>
    </div>
  );
}

export default App;
