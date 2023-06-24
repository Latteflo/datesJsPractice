// Using timestamps, find the exact time and date we will be in 80000 hours.
// Write a function to display the time and date for any amount of hours given in the future.


document.getElementById('calculate').addEventListener('click', function() {
    let hours = document.getElementById('hoursInput').value;
    let now = new Date();
    let futureDate = new Date(now.getTime() + hours * 3600000);

    document.getElementById('futureDate').textContent = `In ${hours} hours, the date and time will be ${futureDate.toString()}.`;
});
