const element = document.querySelector(".live-time");
const optionsDate = { day: 'numeric', month: 'short' };
// const optionsDate = { day: 'numeric', month: 'long' };
const optionsTime = { hour: 'numeric', minute: 'numeric' };
// const optionsTime = { hour: 'numeric', minute: 'numeric', second: "numeric" };

setDateAndTime();

function setDateAndTime () {
    element.textContent = `
        ${new Date().toLocaleDateString("en", optionsDate)} - 
        ${new Date().toLocaleTimeString("ru", optionsTime)}
    `;
}

(
    function() {
        setInterval(() => {
            setDateAndTime();
        }, 1000);
    }
)();