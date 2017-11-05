/* global $ */
$(document).ready(function(){
    $.getJSON('/api/boardgames')
    .then(addGames)
    
}) // end document.ready

function addGames(games){
    games.forEach(function(game){
      addGame(game)
    })
  } // end add games
  
function addGame(game){
    let newGame = $('<li class="game">' + game.title + '</li>')
    $('.list').append(newGame)
}