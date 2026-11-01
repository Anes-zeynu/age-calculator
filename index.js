let birthdate = document.getElementById("birthdate");

let result = document.getElementById("result");

function calculateAge(){
    let birthdateValue = birthdate.value;
   
    if(birthdateValue === ""){
        result.innerHTML = `<span class="error">please enter a birth date</span>`;
        return;
    }

       let today = new Date();
    let dob = new Date(birthdateValue);

    if(dob > today){
        result.innerHTML = `<span class="error">
        date of birth cannot be in future
        </span>`;

        return;
    }

  let years = today.getFullYear() - dob.getFullYear();

  let month = today.getMonth() - dob.getMonth();

  let days = today.getDate() - dob.getDay();

  let hours = today.getHours() - dob.getHours();
  

if(hours < 0){
    days--;
    hours+=24;
}

if(days < 0){
    month--;

    let previousMonth = new Date(
        today.getFullYear(),
        today.getMonth(),
        0
    );

    days+= previousMonth.getDate();
}

result.innerHTML = `
You are ${years} Years<br>
${month} Months ,
${days} Days ,
${hours} Hours`;

}

document.getElementById("calculate").addEventListener("click",calculateAge);
