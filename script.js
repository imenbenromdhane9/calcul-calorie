function calculateCalories() {
    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const weight = parseInt(document.getElementById('weight').value);
    const height = parseInt(document.getElementById('height').value);
    const activity = document.getElementById('activity').value;
  
    let bmr = 0;
  
    if (gender === 'male') {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else if (gender === 'female') {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }
  
    let activityFactor = 0;
  
    switch (activity) {
      case 'sedentary':
        activityFactor = 1.2;
        break;
      case 'light':
        activityFactor = 1.375;
        break;
      case 'moderate':
        activityFactor = 1.55;
        break;
      case 'active':
        activityFactor = 1.725;
        break;
      case 'veryActive':
        activityFactor = 1.9;
        break;
      default:
        activityFactor = 1.2;
        break;
    }
  
    const totalCalories = Math.round(bmr * activityFactor);
  
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Besoin calorique quotidien : <strong>${totalCalories} calories</strong>`;
  }
  
  