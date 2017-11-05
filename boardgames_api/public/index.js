/* global $ */
$(document).ready(function(){
    $.getJSON('/api/boardgames')
    .then(addGames)
    
    $('#gameInput').keypress(function(event){
        if (event.which === 13) {
            createGame()
        }
    })
    
    $('.list').on('click', 'span', function(e){
      e.stopPropagation()
      deleteGame($(this).parent())
    })
  
    $('.list').on('click', 'li', function(){
      updateGame($(this))
    })  
    
}) // end document.ready

function addGames(games){
    games.forEach(function(game){
      addGame(game)
    })
  } // end add games
  
function addGame(game){
    let newGame = $('<li class="game">' + game.title + '<span>X</span></li>')
    $('.list').append(newGame)
}

function createGame(game){
    const userInput = $('#gameInput').val()
    $.post('/api/boardgames', {title: userInput})
      .then(function(newGame){
        addGame(newGame)
        $('#gameInput').val('')
      })
      .catch(function(err){
        console.log(err)
      })
}

function updateGame(game){

}

function deleteGame(game){
  let clickedId = game.data('id')
  let clickedUrl = '/api/boardgames/' + clickedId
  
  $.ajax({
    method: 'DELETE',
    url: clickedUrl
  })
  .then(function(data){
    game.remove()
  })
  .catch(function(err){
    console.log(err)
  })
}