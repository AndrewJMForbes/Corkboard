const newEventSubmit = document.getElementById('new-event-submit');

newEventSubmit.addEventListener('click', function (){
    const eventName = document.getElementById('new-event-name').value;
    const eventDescription = document.getElementById('new-event-description').value;
    const eventLocation = document.getElementById('new-event-location').value;
    const eventDate = document.getElementById('new-event-date').value;
    const eventTimeStart = convertTo12HrFormat(document.getElementById('new-event-time-start').value);
    const eventTimeEnd = convertTo12HrFormat(document.getElementById('new-event-time-end').value);
    const eventTime = `${eventTimeStart} - ${eventTimeEnd}`;


    const newEventPost = fetch('api/new-event/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            eventName, eventDescription, eventDate, eventTime, eventLocation
        })
    }).then(async (response) => {
        // alerting for not being able to create the event, progress? maybe
        if (response.ok){
            const newEvent = await response.json();
            document.location.replace(`/event/${newEvent.id}`);
        } else {
            alert('Could not add event. Please check all fields and try again, or try again later.')
        };
    });
});

function convertTo12HrFormat(time) {
    const [hours, minutes] = time.split(":");
    let period = "AM";
  
    if (hours >= 12) {
      period = "PM";
    }
  
    const hoursIn12HrFormat = hours % 12 || 12;
    return `${hoursIn12HrFormat}:${minutes} ${period}`;
  }