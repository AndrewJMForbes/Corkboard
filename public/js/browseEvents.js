const eventViewHandler = () => {
    const eventCards = document.getElementsByClassName('card');
    console.log(eventCards.length+1);
    for (let i = 1; i < eventCards.length+1; i++) {
        let eventBtn = document.getElementById(`eventViewBtn${i}`);
        console.log(eventBtn);
        eventBtn.addEventListener('click', () => {
            document.location.replace(`/event/${i}`);
        })
    }
};

// eventViewHandler();