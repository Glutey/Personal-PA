let dateTime = moment().format("ddd, D, MMM, YYYY, HH:mm:ss");
$("#time-display").text(dateTime);

$(function () {
    $('.hour-row').sortable({
      placeholder: 'ui-state-highlight',
    });
    // $('.hour-row').disableSelection();
  });
  

const timeblocks = [
    { start: '01:00:00', end: '01:59:59' },
    { start: '02:00:00', end: '02:59:59' },
    { start: '03:00:00', end: '03:59:59' },
    { start: '04:00:00', end: '04:59:59' },
    { start: '05:00:00', end: '05:59:59' },
    { start: '06:00:00', end: '06:59:59' },
    { start: '07:00:00', end: '07:59:59' },
    { start: '08:00:00', end: '08:59:59' },
    { start: '09:00:00', end: '09:59:59' },
    { start: '10:00:00', end: '10:59:59' },
    { start: '11:00:00', end: '11:59:59' },
    { start: '12:00:00', end: '12:59:59' },
    { start: '13:00:00', end: '13:59:59' },
    { start: '14:00:00', end: '14:59:59' },
    { start: '15:00:00', end: '15:59:59' },
    { start: '16:00:00', end: '16:59:59' },
    { start: '17:00:00', end: '17:59:59' },
    { start: '18:00:00', end: '18:59:59' },
    { start: '19:00:00', end: '19:59:59' },
    { start: '20:00:00', end: '20:59:59' },
    { start: '21:00:00', end: '21:59:59' },
    { start: '22:00:00', end: '22:59:59' },
    { start: '23:00:00', end: '23:59:59' },
    { start: '00:00:00', end: '00:59:59' }
    
  ];
  
  const presentColor = 'green';
  const pastColor = 'red';
  const futureColor = 'blue';
  
  const now = new Date();
  
  timeblocks.forEach(timeblock => {
    const start = new Date(timeblock.start);
    const end = new Date(timeblock.end);
    
    if (start < now && end > now) {
      timeblock.color = presentColor;
    } else if (start < now && end < now) {
      timeblock.color = pastColor;
    } else if (start > now && end > now) {
      timeblock.color = futureColor;
    }
  });
  
  console.log(timeblocks);
  