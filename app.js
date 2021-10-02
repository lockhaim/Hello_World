console.log('we linked')
//players/$account_id

// The above is the openDota API which i have filtered into my personal recent matches

//players/{account_id}/matches

//nav bar to select player (top) or perhaps just icon
//when you click on player it pulls recent games, win loss,
// on click - set ajax call to /players/{account_id}
// on submit - prompt for how many matches to get
//loads

//function to call api for players
//function to call api for specific match

$(() => {
  // [the match]
  // [call api for player]

  $('.icon-link').on('click', (e) => {
      userInput = prompt('How many matches would you like to find?','# of Matches')
      $player_id = $(e.currentTarget)[0].id //Lo helped me get this to correct pull the player id from the hardcoded html id
      $('.main-page').empty()
      $.ajax({
        url: `https://api.opendota.com/api/players/${$player_id}/matches/?limit=${userInput}`,
        type: 'GET',
      })
      .then((data) => {
        console.log(data)
        for(let i=0; i < data.length; i++){
          $matchDiv = $('<div>').appendTo($('.main-page'))
          $matchLink = $('<a>').attr(`href`,`https://api.opendota.com/api/matches/${data[i].match_id}`).text(`Match: ${data[i].match_id}`).appendTo($matchDiv)
        }
      }),
      () => {
        console.log('Error: Bad Request')
      }
    })
  })
        // $.ajax({
        //   url: `https://api.opendota.com/api/${$queryType[0]}/${$account_id[0]}/${$queryPlayerFor[2]}/?limit=50`,
        //   type: 'GET',
        // })
        // .then((data) => {
        //   console.log(data)
        //   for(let i=0; i < data.length; i++){
        //     $matchDiv = $('<div>').appendTo($('.main-page'))
        //     $matchLink = $('<a>').attr(`href`,`https://api.opendota.com/api/matches/${data[i].match_id}`).text(`Match: ${data[i].match_id}`).appendTo($matchDiv)
        //   }
        // }),
        // () => {
        //   console.log('Error: Bad Request')
        // }
