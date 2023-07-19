const viewEvents = document.getElementById('display-events');
const meetTeam = document.getElementById('meet-team');

viewEvents.addEventListener('click', () => {
    document.location.replace('/browse-events')
})

meetTeam.addEventListener('click', () => {
    document.location.replace('/meet-team');
})