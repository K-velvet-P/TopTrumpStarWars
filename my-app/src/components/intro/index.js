
import React from 'react';




function Intro ({introVisible})
{


  if (introVisible === true) {

    return (
      
      <div class="star-wars-intro">
    
         {/* <!-- Blue Intro Text --> */}
        <p class="intro-text">A few days ago, during week 6 of Soc Hackathon,I made</p>
    
          {/* <!-- Logo Image or Text goes in here --> */}
        <h2 class="main-logo">
          {/* <img alt ="star wars" src="img/star-wars-intro.png"/> */}
        </h2>
    
          {/* <!-- All Scrolling Content Goes in here --> */}
      <div class="main-content">
    
      <div class="title-content">
        <p class="content-header">STAR WARS<br/>A Top Trump Game</p>
    
        <br></br>
    
        <p class="content-body">
          How to play the star wars Top Trump Game!  
          <br></br>
            1. instructions go here 
            <br></br>
            2. instructions go here 
            <br></br>
            3. instructions go here 
            <br></br>
            4. instructions go here 
            <br></br>
            5. instructions go here 
            <br></br>
            6. instructions go here 
            <br></br>
           </p>
    
        {/* <!-- button or link or whatever --> */}
        {/* <a href="./StarScroll.zip" class="space-button">Click Me To Play The Game Now!</a> */}
           
      </div>
          </div>
        </div>
    )    
  }
};



export default Intro;