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
  // console.log(timeBlock)
  // console.log(eventText)
  // localStorage.setItem(timeBlock, eventText);
for (var i = 0; i < timeBlocks.length; i++){
  var timeBlock = timeBlocks[i];
  var slot = timeBlock.attr('hour');
  var text = timeBlock.find('textarea').val();
  // console.log(slot)
  // console.log(text)
  // console.log(timeBlock);
  timeBlock.find('button').on('click', function(){
    saveText(slot, text);
  });
  
}}

// cannot figure out why this causes the local storage to retun 17... 

