// alert('Use KG and CM!');

document.getElementById('btn').onclick = function() {

    function CalculateBMI(weightKG, heightCM) {
        const m = heightCM / 100;
        const m2 = m ** 2;
    
        const BMI = weightKG / m2;
        return BMI;
    }
    
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    var Result = document.getElementById('bmiResult');
    
    const bmi = CalculateBMI(weight, height);
    Result.textContent = Math.round(bmi * 10) / 10;

    if (bmi > 18.5 && bmi < 25) {
        var status = document.getElementById('healthStatus');
        status.textContent = 'Normal';
    } else if (bmi <= 18.5) {
        var status = document.getElementById('healthStatus');
        status.textContent = 'Underweight';
    } else if (bmi => 25) {
        var status = document.getElementById('healthStatus');
        status.textContent = 'Overweight';
    } else {
        var status = document.getElementById('healthStatus');
        status.textContent = 'NaN';
    }

}

// BMI = weight(kg) / (height(m))^2