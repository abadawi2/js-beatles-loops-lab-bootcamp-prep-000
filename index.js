function theBeatlesPlay(musicians, instruments){
  var newArr = [];
for (var i = 0; i < musicians.length; i++) {
  newArr.push (musicians[i] + " plays " + instruments[i]);
}
return newArr;
}

function johnLennonFacts (facts){
  const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
var end = [];
  var i = 0;
  while(i < end.length) {
    end.push(facts[i] + '!!!')
    i++;
  }
  return end;
}
