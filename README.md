# Hayley Taylor - Project One
### GA SEI FLEX - Git This Bread
***
## Artists A-Z: Random Song Generator
### Link to GitHub: [GitHub Hayley Taylor Project One](https://git.generalassemb.ly/HayleyTaylor/Project-One)
##### HTML, CSS, JavaScript, jQuery and AJAX 
##### API Used: https://rapidapi.com/brianiswu/api/genius
***
The perfect app for music lovers! <br>
Have you ever heard a song by an artist and wondered what other songs they sing? Ever been creating a playlist and wanted to find some random songs by an artist you love?

If so, this is definitely the app for you!

### Step 1:
* Enter an artist's name in the input box

### Step 2:
* Click "RANDOMIZE!"

### Step 3:
* Your random song is now populated! See the artist name, the name of the song, and the album art! Click the link below the image to navigate to Genius.com where you can listen to the song and view the lyrics.

### Step 4:
* Click the "ON TO THE NEXT" button to continue viewing up to 10 random songs by the artist of your choice. Refresh the page to start over!
***
### Strategy Used
1. After identifying which API I would use, I used the insomnia app to test out my url. This way I could make sure I was returning data properly prior to putting it into my code.
2. Next I started my jQuery and created a function that holds  my AJAX (as well as other variables & functions) call to retrieve the data based on the user's input, concatenating that into the url and api key.
3. Using a '.then' function using the data retrieved as my parameter, I created a variable for a random item in the "hits" array. I will use this variable later to populate the results.
4. Next I created an h1 and h2 html element that holds the name of the artist and the name of the song, that will be displayed after the ajax call is made. Variables for the image, instructive text, the link to view the lyrics on Genius.com as well as a "next" button with the click function for that button are also inside of this function.
5. At the very end, I have the function for the initial "RANDOMIZE!" button that takes the user's input and inserts it into the url used for the AJAX call. If the user does not input anything in the box and clicks the button, an alert will pop up telling the user to type in an artist's name to begin.

***
### Project One Challenges & Stretch Goals:
#### * One of the main things I would like to be able to accomplish would be to prevent duplicated results from populating. I tried doing this several different ways and was struggling with getting it work. I think the app would have a much more complete feel if I could prevent the duplicates and then after the 10 songs were displayed, have an alert tell the user that they have seen all the possible results. 
#### * I found that I was very limited with the API that I used in terms of how much data I could retrieve. In the future, I would love to be able to pull in more information, such as artist bio, genre, discography, etc. to make the app feel more complete with more useful features. Allow users to search for songs or artists based on mood/genre, other parameters.
#### * I would like to add a reset or start again button, rather than having the user refresh the page.
#### * After doing a lot of research and trying to find API's that offer a large amount of easily accessible information on music, I found that there were not as many resources as I thought there would be. In the future, maybe I can create my own music API that is easy to use and is full of useful information that would be accessible to anyone.



