let xaxis = []; 
let yaxis = []; 

for(let y = 1; y < 25; y++) 
{
    let x = Math.log(y); 

    //reminder y is vertical x is horisontal 
    xaxis.push(x); 
    yaxis.push(y); 
}

let datasets = {
    label: 'Log Formula', 
    backgroundColor: 'rgb(160, 32, 240)', 
    borderColor: 'rgb(160, 32, 240)', 
    data: xaxis, 
}

let data = {
    labels: yaxis, 
    datasets: [datasets], 
}; 

let config = {
    type: 'line', 
    data: data, 
    options: {}
}; 

const myChart = new Chart(
    document.getElementById('myChart'), 
    config 
); 