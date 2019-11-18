//display or hide instructions
$('a.instructions').on('click', function () {
    $('nav a').css('color', '#9c6b00').animate(1000);
    $('header h2').animate({ 'height': 'toggle' });

    //smooth scroll
    $('html, body').animate({
        scrollTop: $('#heading').offset().top
    }, 500)

});

// set up name space
const puzzle = {};

//array of images for puzzle pieces
//this is the answer key

puzzle.leaves = [ // beginning of leaves puzzle images

    {
        url: "<img src='assets/plantImageSmall01.jpg' alt='1' title='1'>",
        answer: 1,
        currentPosition: "",
        credit: 'Photo by <A href="https://unsplash.com/@ghog">Lawrence Kayku</a> on Unsplash'


    }
    ,
    {
        url: "<img src='assets/plantImageSmall02.jpg' alt='2' title='2'>",
        answer: 2,
        currentPosition: ""
    }
    ,
    {
        url: "<img src='assets/plantImageSmall03.jpg' alt='3' title='3'>",
        answer: 3,
        currentPosition: ""
    }
    ,
    {
        url: "<img src='assets/plantImageSmall04.jpg' alt='4' title='4'>",
        answer: 4,
        currentPosition: ""
    }
    ,
    {
        url: "<img src='assets/plantImageSmall05.jpg' alt='5' title='5'>",
        answer: 5,
        currentPosition: ""
    }
    ,
    {
        url: "<img src='assets/plantImageSmall06.jpg' alt='6' title='6'>",
        answer: 6,
        currentPosition: ""
    }
    ,
    {
        url: "<img src='assets/plantImageSmall07.jpg' alt='7' title='7'>",
        answer: 7,
        currentPosition: ""
    }
    ,
    {
        url: "<img src='assets/plantImageSmall08.jpg' alt='8' title='8'>",
        answer: 8,
        currentPosition: ""
    }
    ,
    {
        url: "<img src='assets/plantImageSmall09.jpg' alt='9' title='9'>",
        answer: 9,
        currentPosition: ""
    }
    ,
    {
        url: "<img src='assets/plantImageSmall10.jpg' alt='10' title='10'>",
        answer: 10,
        currentPosition: ""
    }
    ,
    {
        url: "<img src='assets/plantImageSmall11.jpg' alt='11' title='11'>",
        answer: 11,
        currentPosition: ""
    }
    ,
    {
        url: "<img src='assets/plantImageSmall12.jpg' alt='12' title='12'>",
        answer: 12,
        currentPosition: ""
    }
    ,
    {
        url: "<img src='assets/plantImageSmall13.jpg' alt='13' title='13'>",
        answer: 13,
        currentPosition: ""
    }
    ,
    {
        url: "<img src='assets/plantImageSmall14.jpg' alt='14' title='14'>",
        answer: 14,
        currentPosition: ""
    }
    ,
    {
        url: "<img src='assets/plantImageSmall15.jpg' alt='15' title='15'>",
        answer: 15,
        currentPosition: ""
    }
    ,
    {
        url: "<img src='assets/plantImageSmall16.jpg' alt='16' title='16'>",
        answer: 16,
        currentPosition: ""
    }
]; // end of leaves puzzle images

puzzle.ocean = [ // beginning of ocean puzzle images

    {
        url: "<img src='assets/oceanImage01.jpg' alt='1' title='1'>",
        answer: 1,
        currentPosition: "",
        credit: 'Photo by <A href="https://unsplash.com/@hamann">Niklas Hamann</a> on Unsplash'
    }
    ,
    {
        url: "<img src='assets/oceanImage02.jpg' alt='2' title='2'>",
        answer: 2,
        currentPosition: ""
    }
    ,
    {
        url: "<img src='assets/oceanImage03.jpg' alt='3' title='3'>",
        answer: 3,
        currentPosition: ""
    }
    ,
    {
        url: "<img src='assets/oceanImage04.jpg' alt='4' title='4'>",
        answer: 4,
        currentPosition: ""
    }
    ,
    {
        url: "<img src='assets/oceanImage05.jpg' alt='5' title='5'>",
        answer: 5,
        currentPosition: ""
    }
    ,
    {
        url: "<img src='assets/oceanImage06.jpg' alt='6' title='6'>",
        answer: 6,
        currentPosition: ""
    }
    ,
    {
        url: "<img src='assets/oceanImage07.jpg' alt='7' title='7'>",
        answer: 7,
        currentPosition: ""
    }
    ,
    {
        url: "<img src='assets/oceanImage08.jpg' alt='8' title='8'>",
        answer: 8,
        currentPosition: ""
    }
    ,
    {
        url: "<img src='assets/oceanImage09.jpg' alt='9' title='9'>",
        answer: 9,
        currentPosition: ""
    }
    ,
    {
        url: "<img src='assets/oceanImage10.jpg' alt='10' title='10'>",
        answer: 10,
        currentPosition: ""
    }
    ,
    {
        url: "<img src='assets/oceanImage11.jpg' alt='11' title='11'>",
        answer: 11,
        currentPosition: ""
    }
    ,
    {
        url: "<img src='assets/oceanImage12.jpg' alt='12' title='12'>",
        answer: 12,
        currentPosition: ""
    }
    ,
    {
        url: "<img src='assets/oceanImage13.jpg' alt='13' title='13'>",
        answer: 13,
        currentPosition: ""
    }
    ,
    {
        url: "<img src='assets/oceanImage14.jpg' alt='14' title='14'>",
        answer: 14,
        currentPosition: ""
    }
    ,
    {
        url: "<img src='assets/oceanImage15.jpg' alt='15' title='15'>",
        answer: 15,
        currentPosition: ""
    }
    ,
    {
        url: "<img src='assets/oceanImage16.jpg' alt='16' title='16'>",
        answer: 16,
        currentPosition: ""
    }
]; // end of ocean puzzle images

puzzle.tiles = [ // beginning of tiles puzzle images
    {
        url: "<img src='assets/tilesImage01.jpg' alt='1' title='1'>",
        answer: 1,
        currentPosition: "",
        credit: 'Photo by <A href="https://unsplash.com/@aridley88">Andrew Ridley</a> on Unsplash'
    }
    ,
    {
        url: "<img src='assets/tilesImage02.jpg' alt='2' title='2'>",
        answer: 2,
        currentPosition: ""
    }
    ,
    {
        url: "<img src='assets/tilesImage03.jpg' alt='3' title='3'>",
        answer: 3,
        currentPosition: ""
    }
    ,
    {
        url: "<img src='assets/tilesImage04.jpg' alt='4' title='4'>",
        answer: 4,
        currentPosition: ""
    }
    ,
    {
        url: "<img src='assets/tilesImage05.jpg' alt='5' title='5'>",
        answer: 5,
        currentPosition: ""
    }
    ,
    {
        url: "<img src='assets/tilesImage06.jpg' alt='6' title='6'>",
        answer: 6,
        currentPosition: ""
    }
    ,
    {
        url: "<img src='assets/tilesImage07.jpg' alt='7' title='7'>",
        answer: 7,
        currentPosition: ""
    }
    ,
    {
        url: "<img src='assets/tilesImage08.jpg' alt='8' title='8'>",
        answer: 8,
        currentPosition: ""
    }
    ,
    {
        url: "<img src='assets/tilesImage09.jpg' alt='9' title='9'>",
        answer: 9,
        currentPosition: ""
    }
    ,
    {
        url: "<img src='assets/tilesImage10.jpg' alt='10' title='10'>",
        answer: 10,
        currentPosition: ""
    }
    ,
    {
        url: "<img src='assets/tilesImage11.jpg' alt='11' title='11'>",
        answer: 11,
        currentPosition: ""
    }
    ,
    {
        url: "<img src='assets/tilesImage12.jpg' alt='12' title='12'>",
        answer: 12,
        currentPosition: ""
    }
    ,
    {
        url: "<img src='assets/tilesImage13.jpg' alt='13' title='13'>",
        answer: 13,
        currentPosition: ""
    }
    ,
    {
        url: "<img src='assets/tilesImage14.jpg' alt='14' title='14'>",
        answer: 14,
        currentPosition: ""
    }
    ,
    {
        url: "<img src='assets/tilesImage15.jpg' alt='15' title='15'>",
        answer: 15,
        currentPosition: ""
    }
    ,
    {
        url: "<img src='assets/tilesImage16.jpg' alt='16' title='16'>",
        answer: 16,
        currentPosition: ""
    }
]; // end of tiles puzzle images




//function to randomize the array order
//this creates a copy of the original array, but in random order
//  Durstenfeld shuffle from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
puzzle.randomizer = function (array) {

    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

//insert images from the randomized array to each button in the grid

puzzle.placeImages = function (array) {
    for (let i = array.length - 1; i >= 0; i--) {
        $('.puzzleContainer.' + (i + 1) + ' button').html(array[i].url);
        array[i].currentPosition = i + 1;
    }
}

//check if puzzle has been solved
puzzle.score = 0;
puzzle.status = function () {
    //checks if answer key value matches current position key value in image array
    // each piece in correct spot is worth 1 point
    puzzle.randomArray.forEach(function (element) {
        if (element.answer === element.currentPosition) {
            puzzle.score++;
        }
    })
    //if score equals array length, tell player they've won and  disable controls,
    // if not, clear the score for the next turn

    if (puzzle.score === puzzle.randomArray.length) {
        $('h2.win').html("You've Won!!!");
        $('div.win').fadeIn(500);
        $('.puzzleContainer button').on('click', function () {
            null;
        })
        puzzle.score = 0;
    } else (puzzle.score = 0);
}

// User controls for selecting a piece and styling it so user can tell it's active

puzzle.active = "";
puzzle.secondChoice = "";

puzzle.selectPiece = function () {
    //when an image is clicked, if 'active' does not equal nothing, store value of img to let 'secondChoice'
    $('.puzzleContainer button').on('click', function () {
        if ($('button.active').length !== 0 && $(this).attr('class') !== 'active') {

            //store secondChoice in variable
            puzzle.secondChoice = parseInt($(this)[0].value);

            //clear active class on button
            $(puzzle.activeButton).removeClass('active');

            //swap position of two selected items in array
            a = puzzle.active - 1;
            b = puzzle.secondChoice - 1;

            [puzzle.randomArray[a], puzzle.randomArray[b]] = [puzzle.randomArray[b], puzzle.randomArray[a]];

            //move puzzle pieces to new spots
            puzzle.placeImages(puzzle.randomArray);
            //check if puzzle is solved
            puzzle.status();
        }

        else {
            //add class of active to selection and store its value in variable
            //store the button reference so class can be removed from it later
            $(this).addClass('active');
            puzzle.activeButton = $(this);
            puzzle.active = parseInt($(this)[0].value);
        }
    })
}

//reset button

puzzle.reset = function () {
    puzzle.randomizer(puzzle.randomArray);
    puzzle.placeImages(puzzle.randomArray);
    puzzle.score = 0;
    if ($('div.win').css('display') === 'block') {
        $('div.win').fadeOut(500);
    }
}

$('button.reset').on('click', function (e) {
    e.preventDefault();
    puzzle.reset();
})


// randomly choose a puzzle image array and post image credit to html

puzzle.designPicker = function () {
    i = Math.floor(Math.random() * 3 + 1);
    if (i === 1) {
        puzzle.randomArray = puzzle.leaves.slice(0);
        $('.credit').html(puzzle.leaves[0].credit);
    }
    else if (i === 2) {
        puzzle.randomArray = puzzle.ocean.slice(0);
        $('.credit').html(puzzle.ocean[0].credit);
    }
    else {
        puzzle.randomArray = puzzle.tiles.slice(0);
        $('.credit').html(puzzle.tiles[0].credit);
    }
}

// initialize everything

puzzle.init = function () {
    puzzle.designPicker();
    puzzle.randomizer(puzzle.randomArray);
    puzzle.placeImages(puzzle.randomArray);
    puzzle.status();
    puzzle.selectPiece();
}

$(function () {
    puzzle.init();
});

