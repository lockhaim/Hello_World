console.log('we linked')
//players/$account_id

// The above is the openDota API which i have filtered into my personal recent matches

const steamAPIKey = '4D137358374ADCEC09D5D78416DDFFA8'

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
        for(let i=0; i < data.length; i++){      //runs a for loop equal to the specified number of matches
          $playerKills = data[i].kills           //stores a number of stats in a variable
          $playerDeaths = data[i].deaths
          $playerAssists = data[i].assists
          $gameWin = data[i].radiant_win
        //  $playerStats = $('<span>').addClass('playerStats').text(`${$playerKills} / ${$playerDeaths} / //${$playerAssists}`)

          $matchDiv = $('<div>').addClass('flexContainer').appendTo($('.main-page'))

          $matchModal = $('<button>').addClass('matchModal').text(`Match: ${data[i].match_id}`).appendTo($matchDiv)
          //$matchDiv.append($playerStats)

          $makeModal = $('<div>').addClass('modal').appendTo($matchDiv)
          $gameDuration = (data[i].duration / 60)
          $gameDuration = $gameDuration.toFixed(2)
          $modalWin = $('<p>').text(`Win: ${$gameWin}`).appendTo($makeModal)
          $modalContentKills = $('<p>').text(`Kills: ${$playerKills} `).appendTo($makeModal)
          $modalContentDeaths = $('<p>').text(`Deaths: ${$playerDeaths} `).appendTo($makeModal)
          $modalContentAssists = $('<p>').text(`Assists: ${$playerAssists} `).appendTo($makeModal)
          modalContentDuration = $('<p>').text(`Duration: ${$gameDuration} minutes`).appendTo($makeModal)     //these are all appending the results, divs, buttons, etc. to the dom.
          $modalH1 = $('<h1>').text(`Match: ${data[i].match_id}`).prependTo($makeModal)
          $modalCloseButton = $('<a>').attr('Class','close').attr('href','#').text('Close').appendTo($makeModal)

        }
        const $openMatch = $('.matchModal');  //listens to all things with the matchModal class

        const $closeButton = $('.close');

        const openModal = (e) => {
          const $button = $(e.target);    //tells the computer which button is being clicked
          const $modal = $button.siblings() //selects the sibling of the button clicked (the modal)
          const $allModals = $('.modal');
          $allModals.css('display','none')  //clears all modals from showing
          $modal.css('display','block')    //only displays the modal selected
        }
        const closeModal = () => {    //closes the modal via display none
          const $modal = $('.modal');
          $modal.css('display','none')

        }
        $openMatch.on('click', openModal)
        $closeButton.on('click', closeModal)
      }),
      () => {
        console.log('Error: Bad Request')
      }
      // $('matchModal').on('click', (e) => {
      //   $.ajax({
      //     url: 'https://api.steampowered.com/IEconDOTA2_570/GetHeroes/v0001/?key=4D137358374ADCEC09D5D78416DDFFA8'
      //
      //   })
      // })
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
