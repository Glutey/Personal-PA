let dateTime = moment().format("ddd, D, MMM, YYYY, HH:mm:ss");
$("#time-display").text(dateTime);

let timeBlocks = [
  $('#nine-am'),
  $('#ten-am'),
  $('#eleven-am'),
  $('#twelve-pm'),
  $('#one-pm'),
  $('#two-pm'),
  $('#three-pm'),
  $('#four-pm'),
  $('#five-pm')
];

var now = moment().format('HH');

for (var i = 0; i < timeBlocks.length; i++){
  var timeBlock = timeBlocks[i];
  var hour = timeBlock.attr('hour');
  if (hour < now) {
    timeBlock.find('textarea').addClass('past');
  } 
  if (hour === now) {
    timeBlock.find('textarea').addClass('present');
  } 
  if (hour > now) {
    timeBlock.find('textarea').addClass('future');
  } 
}

function saveText(timeBlock, eventText){
  localStorage.setItem(timeBlock, eventText);
}

for (var i = 0; i < timeBlocks.length; i++){
  var timeBlock = timeBlocks[i];
  console.log(timeBlock.find('button')[0])
  timeBlock.find('button').get(0).addEventListener('click', function(){
    var slot = timeBlock.attr('hour');
    var text = timeBlock.find('textarea').val();
    console.log(slot)
    console.log(text)
    // saveText(slot, text);
  })
  
}
