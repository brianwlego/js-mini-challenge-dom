/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
header.style.color = "red"

/***** Deliverable 3 *****/
const outerDiv = document.getElementsByClassName('player-container')[0]
PLAYERS.forEach(function(player){
  const newDiv = document.createElement('div')
  newDiv.classList = "player"
  newDiv.dataset.number = `${player.number}`
  newDiv.innerHTML = `
    <h3>${player.name} (<em>${player.nickname}</em>)
    </h3>
    <img src="${player.photo}" alt="${player.name}">
    `
  outerDiv.insertAdjacentElement('afterbegin', newDiv)
})



/***** Deliverable 4 *****/

document.querySelector("div.player[data-number='7']").remove()

