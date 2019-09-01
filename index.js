// add solution here
function theBeatlesPlay(musiciansArray, instrumentsArray){
  var mixUp = []
  for (var i = 0; i < musiciansArray.length; i++){
    mixUp.push(`${musiciansArray[i]} plays ${instrumentsArray[i]}`)
  }
  return mixUp
}

function johnLennonFacts(array){
  var i = 0
  var newArray = []
  while (i < array.length){
    newArray.push(`${array[i]}!!!`)
    i = ++i
  }
  return newArray
}

function iLoveTheBeatles(num){
  var newArray = []
  do {
    newArray.push('I love the Beatles!')
    num = ++num
  } while (num < 15)
  return newArray
}
