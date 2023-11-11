import React from 'react';
import Header from "./component/header/Header";
import Navbar from "./component/navbar/Navbar";
import video from "./assets/videos/balls.mp4";
import Main from "./component/main/Main";

const App = () => {
return (
    <div>
        <Header />
        <Navbar />
        <div className="App">
            <Main />
        </div>
    </div>
);
}

export default App;
