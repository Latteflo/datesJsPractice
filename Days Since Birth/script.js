document.getElementById('calculate').addEventListener('click', function() {
    let birthDate = new Date(document.getElementById('birthdate').value);
    let now = new Date();

    let diffInTime = now.getTime() - birthDate.getTime();
    let diffInDays = Math.floor(diffInTime / (1000 * 3600 * 24));

    document.getElementById('daysSinceBirth').textContent = `You have been alive for ${diffInDays} days.`;
});
