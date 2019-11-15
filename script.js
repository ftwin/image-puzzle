//picture puzzle

const puzzle = {};

// 2. Create array of 4 image tags for different pieces of an image 
//this is the answer key in order by index number

puzzle.pieces = [
    "<img src='assets/plantImage01.jpg' alt='1' title='1'>",
    "<img src='assets/plantImage02.jpg' alt='2' title='2'>",
    "<img src='assets/plantImage03.jpg' alt='3' title='3'>",
    "<img src='assets/plantImage04.jpg' alt='4' title='4'>"
];

//3. create function to get random numberimage
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
        $('.puzzleContainer.' + (i + 1) + ' button').html(array[i]);
        // $('.puzzleContainer.' + (i + 1) + ' button').attr('id', $('img').attr('title'));
    }
}




//4. check if random array matches the correct answer

puzzle.status = function() {
    //checks if the two arrays match
    if (puzzle.pieces === puzzle.randomArray) {
        console.log('the puzzle pieces are in the right spot')

        //tell them they've won
        $('h2.win').html("You've Won!!!");

    } else console.log('puzzle pieces are out of order');
    
    // puzzle.pieces.forEach(element => {
    //     console.log(element);
    //     // if (element === puzzle.randomArray) {
    //     //     console.log('it works');
    //     // } else console.log('nope')      
    // });
    
    // for (i = 0; i < $('.gameBoard > div > button.each').length; i++) {
    //     console.log($('.gameBoard > div > button.each').attr('class'));
    // }

    // $('button').each(function() {
    //     // console.log($(this).attr('class'));
    // })

    // $('button').each(function() {
    //     console.log($(this > 'img').attr('class'));
    // })
}

//6. If user clicks on img store index#(class#) to let 'active' add class of active


puzzle.active = "";
puzzle.secondChoice = "";

puzzle.selectPiece = function() {
    $('.puzzleContainer button').on('click', function() {
        if ($('button.active').length !== 0 && $(this).attr('class') !== 'active') {
            // $(this).removeClass();
            // $('button').removeClass();
            //add class of secondChoic
            $(this).addClass('secondChoice');
            puzzle.secondChoice = $(this)[0].firstChild;
            console.log(puzzle.secondChoice);

            //find array index of selection

            puzzle.secondChoiceLocation = $.inArray(`"${puzzle.secondChoice}"`, puzzle.randomArray);
            console.log(`second choice is at ${puzzle.secondChoiceLocation}`)

            //clear active and secondChoice class
            $(puzzle.active).removeClass('active');
            $(puzzle.secondChoice).removeClass('secondChoice');

            //fin
            //swap position of two selected items in array
            // a = parseInt(puzzle.active.firstChild.title) - 1;
            // b = parseInt(puzzle.secondChoice.firstChild.title) - 1;

            
            // [puzzle.randomArray[a], puzzle.randomArray[b]] = [puzzle.randomArray[b], puzzle.randomArray[a]];

            //move puzzle pieces to new spots
            puzzle.placeImages(puzzle.randomArray);
            //check if puzzle is solved
            puzzle.status();

            console.log(puzzle.randomArray);
            

        }
        // else if {

        // }
        else {
            // $('button').removeClass();
            $(this).addClass('active');
            puzzle.active = $(this)[0].firstChild;
            console.log(puzzle.active);
        }
    } )
}

//7. when an image is clicked, if 'active' does not equal nothing, store value of img to let '2ndimg' add class of '2ndimg'



//8. then put value of active replace 2nd and 2nd will replace active, then remove active and 2nd classes

//3. run function to check if div id matches image index #

//4. if correct, image is completed, player wins

//display "You've won" over the game grid
//if not correct, nothing happens

//7. assign active class to change border styling 

puzzle.init = function () {
    puzzle.randomArray = puzzle.pieces.slice(0);
    puzzle.randomizer(puzzle.randomArray);
    puzzle.placeImages(puzzle.randomArray);
    console.log(puzzle.randomArray);
    puzzle.status();
    puzzle.selectPiece();
}

$(function () {
    puzzle.init();
});

//accessibility-------
// tab between the 2 moveable game pieces
// space key to move them

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