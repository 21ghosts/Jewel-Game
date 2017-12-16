var random_result;
var loss = 0;
var win = 0;
var previous = 0;



var resetAndStart = function()
{   
    $(".crystals").empty();

    var images = [
                  'https://vignette.wikia.nocookie.net/marvel-contestofchampions/images/c/c4/Crystal_weekly_event.png/revision/latest?cb=20151122000423',
                  'http://vignette2.wikia.nocookie.net/marvel-contestofchampions/images/e/e4/4-Star_Crystal.png/revision/latest?cb=20151122000344',
                  'https://vignette.wikia.nocookie.net/marvel-contestofchampions/images/2/29/Crystal_generic5.png/revision/latest?cb=20151121235154',
                  'https://vignette.wikia.nocookie.net/marvel-contestofchampions/images/a/ad/Crystal_generic4.png/revision/latest?cb=20151121235143']

    random_result = Math.floor(Math.random() * 111 ) + 19;
    
    
    $("#result").html('Random Result: ' + random_result);
    
    for(var i = 0; i < 4; i++)
    {   
        var random = Math.floor(Math.random() * 11) + 1;
        //console.log(random);

        var crystal = $("<div>");
            crystal.attr({
                "class": 'crystal',
                "data-random": random,
            });
            crystal.css
            ({
                "background-image":"url('" + images[i] + "')",
                "background-size":"cover"
            });
    
        $(".crystals").append(crystal);
        
    }

    $("#previous").html("Total Score: " +  previous);

}



resetAndStart();


// Event delegation
$(document).on('click',".crystal", function()
{
    var num = parseInt($(this).attr('data-random'));

    previous += num;

    $("#previous").html("Total Score: " + previous);

    console.log(previous);

    if(previous > random_result)
    {
        loss++;

        $("#loss").html("You Lost:"+ loss);

        previous = 0;

        resetAndStart();
    }
    else if(previous === random_result)
    {
        win++;

        previous = 0;

        $("#win").html("You Win:" + win);

        resetAndStart();
    }

});

// speudo Coding

// a game with 4 jewels and Random Result
// every crystal needs to have a random number between 1-12
// a new random number should generate every single time we win or lose
// to those 4 jewels
// when clicking any crystal, it sjould add with the previous Result
// until it equals the total score
// if it is not eqaul, decrement a loss
// if it is equal, the we increment a win