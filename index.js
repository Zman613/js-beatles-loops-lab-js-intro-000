// add solution here
function theBeatlesPlay(musiciansArray, instrumentsArray){
  var mixUp = []
  for (var i = 0; i < musiciansArray.length; i++){
    mixUp.push(`${musiciansArray[i]} plays ${instrumentsArray[i]}`)
  }
  return mixUp
}

function johnLennonFacts(array){
  var countdown = array.length
  var i = 0
  var newArray
  while (countdown > 0){
    newArray.push(`${array[i]}!!!`)
    i = i++
    countdown = --countdown
  }
  return newArray
}
