var weight;
var height;
var bmi;
var heightFeet;
var weightLB;
function calculateBMI() {
    console.clear();
    const metric = document.getElementById('metric');
    const english = document.getElementById('english');
  
    if (metric.className === "tabcontent active") {
      
        console.log('hello');
        weight = document.getElementById('weight');
        height = document.getElementById('height');

        console.log(height.value);
        console.log(weight.value);

        if (validation()) {
            bmi = (weight.value / Math.pow((height.value / 100), 2)).toFixed(2);
            console.log(bmi);
        } else {
            return false;
        }
        showResult();
    }
    else {
       
        weightLB = document.getElementById('weight-lb');
        const heightInches = document.getElementById('height-inches').value;
        heightFeet = document.getElementById('height-feet');
 

        const feetToInches = Number(heightFeet.value) * 12;
        const totalInches = feetToInches + Number(heightInches);
        console.log('Total inches: ' + totalInches);


        console.log(weightLB.value);

        if (validation()) {
            bmi = ((weightLB.value / (totalInches * totalInches)) * 703).toFixed(2)
            console.log(bmi);
        } else {
            return false;
        }
        console.log(bmi);
        showResult();
    }

};
function validation() {
    if (metric.className === "tabcontent active") {
        if (height.value === '' || isNaN(height.value) || height.value < 1 || height.value > 600) {
            alert('fill your height');
            return false;
        } else if (weight.value === '' || isNaN(weight.value) || weight.value < 1 || weight.value > 600) {
            alert('fill your weight');
            return false;
        } else {
            return true;
        }

    } 

   else{
        console.log(weightLB.value)
        if (weightLB.value === '' || weightLB.value < 1 || weightLB.value > 600) {
            alert('fill your weight');
            return false;
        }
        else if (heightFeet.value === '' || isNaN(heightFeet.value) || heightFeet.value < 1 || heightFeet.value > 600) {
            alert('fill your height');
            return false;
        }
        else {
            return true;
        }
    }
}

const trs = document.querySelectorAll('#range-data tr');
function showResult() {
    const result = document.getElementById('result');
    
 
    for (var i = 0; i < trs.length; i++) {

        trs[i].classList.remove('active2')

        if (bmi <= 18.5) {
            result.innerHTML = `<h1>${bmi} </h1> 
                       <h4>kg/m2</h4> `;
                       trs[0].classList.add("active2");
        } else if (bmi > 18.5 && bmi <= 24.9) {
            result.innerHTML = `<h1>${bmi}</h1>  <h4>kg/m2</h4> `;
            trs[1].classList.add("active2");
        }else if (bmi >= 25.0 && bmi <= 29.9) {
            result.innerHTML = `<h1>${bmi}</h1>  <h4>kg/m2</h4> `;
            trs[2].classList.add("active2");
        }else if (bmi >= 30.0 && bmi <= 34.9) {
            result.innerHTML = `<h1>${bmi}</h1>  <h4>kg/m2</h4> `;
            trs[3].classList.add("active2");
        }
        else if (bmi >= 35.0 && bmi <= 39.9) {
            result.innerHTML = `<h1>${bmi}</h1>  <h4>kg/m2</h4> `;
            trs[4].classList.add("active2");
        }
       else if (bmi >= 40.0 && bmi <= 49.9) {
            result.innerHTML = `<h1>${bmi}</h1>  <h4>kg/m2</h4> `;
            trs[5].classList.add("active2");
        }
       else{
            result.innerHTML = `<h1>${bmi} </h1> <h4>kg/m2</h4> `;
            trs[6].classList.add("active2");
        }
    }

};




document.getElementById('bmi-form').addEventListener('submit', calculateBMI);

