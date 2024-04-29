document.addEventListener('DOMContentLoaded', function() {
        const calculateBtn = document.querySelector('.calculatebtn button');
calculateBtn.addEventListener('click', function() {
        const dobInput = document.getElementById('birthdayinput').value;
const currentDateInput = document.getElementById('currentage').value;
     if (dobInput && currentDateInput) {
const dob = new Date(dobInput);
         const currentDate = new Date(currentDateInput);
 const age = calculateAgeFromDateOfBirth(dob, currentDate);
      const resultElement = document.querySelector('.result');
            resultElement.textContent = `Your Current Age is: ${age} years`;
        } else {
             const resultElement = document.querySelector('.result');
            resultElement.textContent = 'Please enter both date of birth and current date.';
        }
    });
 function calculateAgeFromDateOfBirth(dob, currentDate) {
        const dobYear = dob.getFullYear();
        const dobMonth = dob.getMonth();
        const dobDay = dob.getDate();

        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth();
        const currentDay = currentDate.getDate();

        let age = currentYear - dobYear;

        // Check if the current date is before the birthday this year
        if (currentMonth < dobMonth || (currentMonth === dobMonth && currentDay < dobDay)) {
            age--;
        }

        return age;
    }
});
