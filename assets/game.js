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

