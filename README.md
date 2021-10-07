## Hello_World

##LIVE LINK: https://dota2-stat-tracker-poc.netlify.app/

## DOTA 2 Stats Tracker ##

The First thing I did when approaching this project was determine what functionality I wanted.

I wanted to make sure that any code I wrote would run correctly, so I set up
using an on load function.

I wrote the basic wire-frame to the html first with a few of the players hardcoded
just because searching the account ID was not something I wanted for this specific proof
of concept.

I wanted this to be more about the ability to pull player and match data so I just
used my own player ID, a friends, and a pro players. When an icon is clicked it
empties the div where the match data will be stored so that you don't have to
reload the page if you want to switch players.

I started by allowing the user to click one of the player icons in the top sticky nav bar.
On click, it is then going to prompt the user on how many matches to pull of the selected
players and then making an ajax request with the number of matches specified by
the limit query to the api.

It then runs a for loop logging all the data retrieved and stores a number of variables
like player kills, deaths, assists, duration, etc. and uses jQuery to append those to a modal,
with each modal a sibling of the button.

When a match id is clicked, it then opens the modal that was created in the for
loop and displays it. When another match is selected it tells the computer to
hide that modal and then open the one selected so that all of them are not opening at once.

///INSTRUCTIONS TO RUN///
1. Download the program form git hub.
2. Open index.html.
3. Click a player icon in the top.
4. Specify the number of games to pull.
5. Click on whichever match you would like to see the stats for!


//unsolved problems//

So the biggest thing here would be pulling info for the total match and/or each player.
That would require multiple querys to the api, for each player as well as a seperate
pull for the match itself, and then would need more conditionals to determine what team
each player was on, if they won, etc. By the time I got done with a viable product I didn't
want to risk breaking it. Although since this is something I play I am going to work on this
on the side for my own benefit and understanding.
