
function calculateAge() {
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);

    if (!day || !month || !year) {
        document.getElementById('result').textContent = "Please enter valid values.";
        return;
    }

    const today = new Date();
    let ageYears = today.getFullYear() - year;
    let ageMonths = today.getMonth() - (month - 1);
    let ageDays = today.getDate() - day;

    if (ageDays < 0) {
        ageMonths -= 1;
        ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (ageMonths < 0) {
        ageYears -= 1;
        ageMonths += 12;
    }

    if (ageYears < 0) {
        document.getElementById('result').textContent = "Invalid date. Please enter a date in the past.";
        return;
    }

    document.getElementById('result').textContent = 
        `Your age is ${ageYears} years, ${ageMonths} months, and ${ageDays} days.`;
}
