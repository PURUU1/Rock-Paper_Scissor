
function playgame() {
  console.log("User Made A Choice");
  compchoice();
  decision();
}
let userscore = 0;
let compscore = 0;

let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissor = document.querySelector(".scissor");
let choice = document.querySelector(".choices");
let msg = document.querySelector(".msg");
let uscore = document.querySelector(".u-score");
let cscore = document.querySelector(".c-score");

let userChoice = " ";
let computerchoice = " ";


// rocl
rock.addEventListener("click", function() {

  userChoice = "rock";
  console.log("-------------")
  console.log("userChoice =", userChoice);

});

paper.addEventListener("click", function() {

  userChoice = "paper";
  console.log("-------------")
  console.log("userChoice =", userChoice);
});

scissor.addEventListener("click", function() {

  userChoice = "scissor";
  console.log("-------------")
  console.log("userChoice =", userChoice);

});
// plagame

//compute choice    
function compchoice() {
  let no = Math.floor(Math.random() * 3);
  let cchoice = ["rock", "paper", "scissor"];
  computerchoice = cchoice[no];
  console.log("computer choice=", computerchoice);

}
//decison
function decision() {
  if (userChoice == computerchoice) {
    console.log("It's a draw");
    msg.innerHTML = "Its a Draw";
  } else {
    // console.log("Someone wins");
    let userwin = true;
    //rock//////
    if (userChoice == "rock") {
      //paper,scisor
      userwin = computerchoice == "paper" ? true : false
    }
    if (userChoice == "rock") {
      //paper,scisor
      userwin = computerchoice == "scissor" ? true : false
    }
    //paper//////
    if (userChoice == "paper") {
      //rock,scisor
      userwin = computerchoice == "rock" ? true : false
    }
    if (userChoice == "paper") {
      //rock,scisor
      userwin = computerchoice == "scissor" ? false : true
    }
    //scissor//////
    if (userChoice == "scissor") {
      //paper,rock
      userwin = computerchoice == "paper" ? true : false
    }
    if (userChoice == "scissor") {
      //paper,rock
      userwin = computerchoice == "rock" ? false : true
    }
    // result

    if (userwin == true) {
      console.log("User wins");

      msg.innerHTML = " you lose " + userChoice + " beats " + computerchoice;
      userscore++;
      uscore.innerHTML = userscore;
      msg.style.backgroundColor = "green";


    }
    if (userwin == false) {
      console.log("User lose");

      msg.innerHTML = " you lose " + computerchoice + " beats " + userChoice;


      compscore++;
      cscore.innerHTML = compscore;
      msg.style.backgroundColor = "red";

    }
    if (userscore == 10 || compscore == 10) {
      msg.innerHTML = "Match finished";
      userscore = 0;
      compscore = 0;
    }

  }
}




// allchoice
choice.addEventListener("click", () => {
  playgame();


});






