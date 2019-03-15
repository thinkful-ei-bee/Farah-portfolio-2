'use strict';
/* global $ */

const STORE = {
  startPage: true,
};

function generateMainPageHTML(){
  return ` 
    <div id="main-page">
     <nav role="navigation" class="contact">
     <button class="js-contact-button" type="button">Contact me</button></nav>
   
     <header role="banner">
        <pre id="typewriter">
            <h1>Hello, </br> I'm Farah</h1>
        </pre>
        <div class="bio">
            <p>My name is Farah Gustafson, and I'm a web developer born and raised in Washington, D.C. I believe in collaborative work, big ideas, and open minds. </br></br>

            In addition to my love for coding, my passions include anything that involves the outdoors, yoga, and reading good books. You can often find me exploring the great outdoors with my dog. </p>
        </div>
        <div class="clear"></div>
        </header>

        <section class="section1">
          <div class="image-text">
            <div class="app-description">
              <h3>The Office Quiz</h3>
              <p>Enjoy a short, but fun quiz of my favorite show, The Office.</p>
              <p>Technical stack: JS, HTML, CSS</p>
            </div>
            <div class="see-code"><a href="https://github.com/thinkful-ei-bee/farah-donald-quiz-app">See code</div>
            <a class="project-link" href="https://thinkful-ei-bee.github.io/farah-donald-quiz-app/"></a>
           
          </div></section>
      </div>`;
}

function generateContactHTML(){
  return  `
    <div id="contact-page">
        <section class="left-pane">
              <button type="button" class="return"> < </button>
           
            <h1>Let's work together </h1>
        </section>

        <section class="right-pane">
            <div class="email"> 
                <p>Email me</p>
                <a class="email-link" href="mailto: farah.gus@hotmail.com">farah.gus@hotmail.com</a></div>
            <div class="linkedin">
              <p>Find me on Linkedin</p>
              <a class="linkedin-link" href="https://www.linkedin.com/in/farah-gustafson-824496132/">Linkedin</a></div>
            <div class=github>
              <p>Find me on GitHub</p>
              <a class="github-link" href="https://github.com/Farahgus10">GitHub</a></div>
        </section>
    </div>`;
}

function renderPortfolio(){
  // if startPage is true, then load main page html
  if (STORE.startPage){
    $('.container').html(generateMainPageHTML());
  }
  // else (if start page is false) load contact page html
  else {
    $('.container').html(generateContactHTML());
  }
}

function handleContactButton(){
  $('.container').on('click', '.js-contact-button', event => {
    event.preventDefault();
    console.log('contact button worked');
    STORE.startPage = !STORE.startPage;

    renderPortfolio();
  });
}

function handleReturnButton(){
  $('.container').on('mouseover', '.return', function () {
    $(this).append('Return to my projects');
  });

  $('.container').on('mouseout', '.return', function () {
    $(this).text('< ');
  });

  $('.container').on('click', '.return', event => {
    event.preventDefault();
    STORE.startPage = true;

    renderPortfolio();
  });
}

// code for an interactive arrow - taking it off my page for now, but might return to this so I'm keeping the code commented out 
// $(function() {
//   setTimeout('topArrow()');
// });
  
// function topArrow() {
//   $('#topArrow').animate({
//     marginBottom: '-=15px'
//   }, 800).animate({
//     marginBottom: '+=15px'
//   }, 800);
//   setTimeout('topArrow()', 1600);
// }

function main(){
  renderPortfolio();
  handleContactButton();
  handleReturnButton();
  //topArrow();
}

$(main);