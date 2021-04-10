// console.log("let's get it")
    const baseURL = "https://genius.p.rapidapi.com/search?"
    const appKey = "rapidapi-key=dc32dd95f0mshad932f5f6087ab6p120eb8jsn94b96fa202d6"
    const queryInput = "q="
    let titleQuery = ""
    
//start of jquery
$(() => { 
//main function
const getInfo = () => {
    //ajax function and order of url to correctly pull info from API
    $.ajax({
        url:  baseURL + queryInput + titleQuery + "&" + appKey
    }).then((data) => {
        //create a variable for a random item in the 'data'array and return that as our result
        //stretch goal would be to figure out how to not repeat the same result twice, having a lot of trouble
        //with this!!
        const $random = Math.floor(Math.random()*data.response.hits.length)
        // console.log(queryURL);
        // console.log(data.response.hits[$random]);
  
        //create h1 and h2 elements to display our results, creating html in our class of container
        $('.container').html(`
            <h1 class="artistName"> ${data.response.hits[$random].result.primary_artist.name} </h1>
            <h2 class="songName"> ${data.response.hits[$random].result.full_title} </h2>      
        `)
            //create a variable for our image
            const $img = $('<img>').attr('src', data.response.hits[$random].result.header_image_thumbnail_url)
            .attr('alt', data.response.hits[$random].result.full_title)
            $('.container').append($img);
            console.log(data)

            //create a variable for our link to the lyrics
            const $lyrics = $('<a target="_blank">').attr('href', data.response.hits[$random].result.url)
            .text(data.response.hits[$random].result.full_title);
            $('.lyrics').append($lyrics)

            //text to inform the user to follow the link below to view the lyrics and listen to the song
            $('.text').html('Check out the lyrics and listen to the song below!');
           
            //create a variable for our next button
            const $nextBut = $('<button>').addClass('nextBut').text('ON TO THE NEXT')
            $('.next').append($nextBut)
            
             //createa a function for the click of the 'next' button.
            $('.nextBut').on('click', function (event) {
                event.preventDefault();
                // console.log('test')
                // console.log(titleQuery);
                //clear the div's with the classes "next" and "lyrics" for each time we click "next"
                $('.next').empty();
                $('.lyrics').empty();
                getInfo();
            })
            
        })
    }       
        //when the user enters an artist name and clicks the button, the getInfo function runs and returns
        //a random song from that artist
        $('.button').on('click', function(event) {
            event.preventDefault();
            // console.log('test')
            titleQuery = $('input[type="text"]').val();
            console.log(titleQuery);
            if(titleQuery === ""){
                alert('Enter an artist name to begin!')
            }
            getInfo();
        })  
    })