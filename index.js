$(document).ready(function() {
let no = document.getElementById('no');
var yes = $("#yes");
var envelope = $("#envelope");

function updateDays() {
    const startDate = new Date('2025-11-03'); // Replace with your actual start date (YYYY-MM-DD)
    const today = new Date();
  
    if (today < startDate) {
      document.getElementById('days').textContent = "Our journey hasn't started yet!";
      return;
    }
  
    const totalMilliseconds = today.getTime() - startDate.getTime();
    const totalDays = Math.floor(totalMilliseconds / (1000 * 3600 * 24));
  
    const years = Math.floor(totalDays / 365.25); // Account for leap years
    const remainingDaysAfterYears = totalDays % 365.25;
    const months = Math.floor(remainingDaysAfterYears / 30.44); // Average days in a month
    const days = Math.floor(remainingDaysAfterYears % 30.44);
  
    let resultText = '';
    if (years > 0) {
      resultText += `${years} year${years > 1 ? 's' : ''}, `;
    }
    if (months > 0) {
      resultText += `${months} month${months > 1 ? 's' : ''}, `;
    }
    resultText += `${days} day${days > 1 ? 's' : ''}`;
  
    document.getElementById('days').textContent = resultText;
  }
  
  updateDays(); // Update immediately when the page loads
  setInterval(updateDays, 1000 * 60 * 60 * 24); // Update every day

envelope.click(function(){
    open();
})

yes.click (function(){
    open();
})

no.addEventListener('mouseover', function(){
    let randX = Math.random() * 60;
    let randY = Math.random() * 80;

    no.style.left = randX + '%';
    no.style.top = randX + '%';
})

function open() {
    envelope.addClass("open")
        .removeClass("close");
}

function close() {
    envelope.addClass("close")
        .removeClass("open");
}

})
