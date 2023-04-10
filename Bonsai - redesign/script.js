const monthlyPlan = document.getElementById("monthly-switch");
const yearlyPlan = document.getElementById("yearly-switch");
if (monthlyPlan){
    monthlyPlan.addEventListener('click', () => {
        monthlyPlan.style.backgroundColor = 'black';
        monthlyPlan.style.color = 'white';
        yearlyPlan.style.backgroundColor = 'transparent';
        yearlyPlan.style.color = 'black';    
    })

}
if(yearlyPlan){
    yearlyPlan.addEventListener('click', () =>{
        yearlyPlan.style.backgroundColor = 'black';
        yearlyPlan.style.color = 'white';
        monthlyPlan.style.backgroundColor = 'transparent';
        monthlyPlan.style.color = 'black';
    })

}


