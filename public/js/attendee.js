const invitationBtn = document.getElementById('attendee-submit');
const joinBtn = document.getElementById('joinEvent');

const addAttendee = async (event) => {    
    // document.location.replace('/');
    event.preventDefault();

    let email;
    const addEmail = document.getElementById('email-input').value.trim();

    if (!addEmail){
        email = "session";
    } else {
        email = addEmail;
    }

    const eventId = document.getElementById('eventName').getAttribute('eventId');

    const response = await fetch(`/event/${eventId}`, {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: { 'Content-Type': 'application/json' },
      });
      location.reload();
  };


  invitationBtn.addEventListener("click", addAttendee) 

  joinBtn.addEventListener("click", addAttendee)


