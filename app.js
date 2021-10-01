console.log('we linked')

account_id = 72780937

//https://api.opendota.com/api/players/72760937/recentMatches
// The above is the openDota API which i have filtered into my personal recent matches

$(() => {

  $.ajax({
    url: `https://api.opendota.com/api/players/72780937`,
    type: 'GET',
  })
  .then((data) => {
    console.log(data)
  }),
  () => {
    console.log('Error: Bad Request')
  }

})
