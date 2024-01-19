
function checkName() {
    var name = document.getElementById('input').value;
    var resultDiv = document.getElementById('result');

    var videoPathThala = './thala.mp4';
    var videoPathNotThala = './notthala.mp4';

    if (name.length === 7) {
      resultDiv.innerHTML = '<h1>Thala for a reason!</h1>' +
        '<video width="300" height="300" autoplay>' +
          '<source src="' + videoPathThala + '" type="video/mp4">' +
          'Your browser does not support the video tag.' +
        '</video>';
    } else {
      resultDiv.innerHTML = '<h1>Not a Thala!</h1>' +
        '<video width="300" height="300" autoplay>' +
          '<source src="' + videoPathNotThala + '" type="video/mp4">' +
          'Your browser does not support the video tag.' +
        '</video>';
    }
  }
