import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

// const name = "Abhishek Tiwari";
const date=new Date().toDateString();
const time =new Date().toLocaleTimeString();
const img1="https://picsum.photos/200/300";
const img2="https://picsum.photos/250/300";
const img3="https://picsum.photos/300/300";

const img4="https://picsum.photos/270/300";
const img5="https://picsum.photos/290/300";
const img6="https://picsum.photos/320/300";

const img7="https://picsum.photos/310/300";
const img8="https://picsum.photos/350/300";
const img9="https://picsum.photos/370/300";

ReactDOM.render(
  <div>
    <header>
      <h1 className="header">{`My Random Image Gallery`}</h1>
      <br/>
      <p>Current date: {date}</p>
      <br/>
      <p>Current time: {time}</p>
    </header>
    <br/>
    <div className="img">
      <div className="row">
        <img src={img1} alt="kuch bhi" />
        <img src={img2} alt="kuch bhi" />
        <img src={img3} alt="kuch bhi" />
      </div>
      <div className="row">
        <img src={img4} alt="kuch bhi" />
        <img src={img5} alt="kuch bhi" />
        <img src={img6} alt="kuch bhi" />
      </div>
      <div className="row">
        <img src={img7} alt="kuch bhi" />
        <img src={img8} alt="kuch bhi" />
        <img src={img9} alt="kuch bhi" />
      </div>
    </div>
    <br/>
    <footer>
      <h2>Copyright &copy; fillopfy</h2>
    </footer>

  </div>,
  document.getElementById('root')
);