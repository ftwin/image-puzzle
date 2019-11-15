//picture puzzle

const puzzle = {};

//Create array of images for different pieces of a puzzle 
//this is the answer key

puzzle.pieces = [
    {url: "<img src='assets/plantImage01.jpg' alt='1' title='1'>",
    answer: 1,
    currentPosition: ""}
    ,
    { url: "<img src='assets/plantImage02.jpg' alt='2' title='2'>",
    answer: 2,
    currentPosition: ""}
    ,
    {url: "<img src='assets/plantImage03.jpg' alt='3' title='3'>",
    answer: 3,
    currentPosition: ""}
    ,
    {url: "<img src='assets/plantImage04.jpg' alt='4' title='4'>",
    answer: 4,
    currentPosition: ""}
];

//function to randomize the array order
//this creates a copy of the original array, but in random order

//  Durstenfeld shuffle from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
// to get the array of images in random order


puzzle.randomizer = function(array) {
    
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

//insert images from the randomized array to each button in the grid and assign a class to the button

puzzle.placeImages = function(array) {
    for (let i = array.length -1; i >= 0; i--) {
        $('.puzzleContainer.' + (i + 1) + ' button').html(array[i].url);
        array[i].currentPosition = i+1;
    }
}


//4. check if random array matches the correct answer
puzzle.score = 0;
puzzle.status = function() {
    //checks if the two arrays match
    // each piece in correct spot is worth 1 point
    puzzle.randomArray.forEach(function(element) {
        if (element.answer === element.currentPosition) {
             puzzle.score++;
        }
    })
    //if score equals array length, tell player they've won, if not, clear the score for the next turn
    
    if (puzzle.score === puzzle.randomArray.length) {
        $('h2.win').html("You've Won!!!");
    } else (puzzle.score = 0);
}

//6. If user clicks on img store index#(class#) to let 'active' add class of active


puzzle.active = "";
puzzle.secondChoice = "";

puzzle.selectPiece = function() {
    //7. when an image is clicked, if 'active' does not equal nothing, store value of img to let '2ndimg' add class of '2ndimg'
    $('.puzzleContainer button').on('click', function() {
        if ($('button.active').length !== 0 && $(this).attr('class') !== 'active') {

            //add class of secondChoice
            $(this).addClass('secondChoice');
            puzzle.secondChoice = parseInt($(this)[0].value);           

            //clear active class on button
            $(puzzle.activeButton).removeClass('active');

            //swap position of two selected items in array
            a = puzzle.active -1;
            b = puzzle.secondChoice -1;
            
            [puzzle.randomArray[a], puzzle.randomArray[b]] = [puzzle.randomArray[b], puzzle.randomArray[a]];

            //move puzzle pieces to new spots
            puzzle.placeImages(puzzle.randomArray);
            //check if puzzle is solved
            puzzle.status();
        }

        else {
            // $('button').removeClass();
            $(this).addClass('active');
            puzzle.activeButton = $(this);
            puzzle.active = parseInt($(this)[0].value);
        }
    } )
}

puzzle.init = function () {
    puzzle.randomArray = puzzle.pieces.slice(0);
    puzzle.randomizer(puzzle.randomArray);
    puzzle.placeImages(puzzle.randomArray);
    puzzle.status();
    puzzle.selectPiece();
}

$(function () {
    puzzle.init();
});

//accessibility-------
// tab through the game pieces
// space key to select them

//stretch goals-------------------------
// add a timer
//imgs don't start in correct spot
// reset button
// multiple images
//larger grid













//---------------------------------------------------------------------------------------------
//STRETCH GOALS
//---------------------------------------------------------------------------------------------


// object of 4 image urls (each is a piece of a larger image) numbered 1 - 8
// 1. assign one image to 4 image tags out of 4 in a grid
// user must move the images into the right order to complete the image


//2. when user clicks on an image, it slides to the empty space
//if no empty space, nothing happens (div could animate in some way to show it is stuck)

//3. check if order of images correct

//4. if correct, image is completed, player wins
//display "You've won" over the game grid
//if not correct, nothing happens


//accessibility-------
// tab between the 2 moveable game pieces
// space key to move them

//stretch goals-------------------------
// add a timer
// reset button
// multiple images
//larger grid

