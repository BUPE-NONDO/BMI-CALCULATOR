function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters
    const resultDiv = document.getElementById('result');

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        resultDiv.style.display = 'block';
        resultDiv.style.color = 'red';
        resultDiv.textContent = 'Please enter valid weight and height values.';
        return;
    }

    const bmi = weight / (height * height);
    let category = '';
    let color = '';

    if (bmi < 18.5) {
        category = 'Underweight';
        color = '#ffc107';
    } else if (bmi >= 18.5 && bmi < 25) {
        category = 'Normal weight';
        color = '#28a745';
    } else if (bmi >= 25 && bmi < 30) {
        category = 'Overweight';
        color = '#fd7e14';
    } else {
        category = 'Obese';
        color = '#dc3545';
    }

    resultDiv.style.display = 'block';
    resultDiv.style.color = color;
    resultDiv.textContent = `Your BMI is ${bmi.toFixed(1)} (${category})`;
}