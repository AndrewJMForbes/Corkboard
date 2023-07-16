const newEventSubmit = document.getElementById('new-event-submit');

newEventSubmit.addEventListener('click', function (){
    console.log('why');
    // nice
    // if it worked maybe LOL
    const eventName = document.getElementById('new-event-name').value;
    const eventDescription = document.getElementById('new-event-description').value;
    const eventLocation = document.getElementById('new-event-location').value;
    const eventDate = document.getElementById('new-event-date').value;
    const eventTime = document.getElementById('new-event-time').value;

    const newEventPost = fetch('api/new-event/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            eventName, eventDescription, eventDate, eventTime, eventLocation
        })
    }).then(response => {
        // alerting for not being able to create the event, progress? maybe
        if (response.ok){
            alert('Event created successfully!');
            document.location.replace('/new-event');
        } else {
            alert('Could not add event. Please check all fields and try again, or try again later.')
        };
    });
});