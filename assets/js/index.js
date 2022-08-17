
var amount = [];
console.log(data);

const displayChart = document.getElementById('displayChart');

for(let i = 0; i < data.length; i++) {
    amount.push(data[i].amount);
}
const amountMax = Math.max.apply(null, amount);

for(const dataItem of data) {
    const dataElement = makeChart(dataItem, amountMax);
    displayChart.append(dataElement);
}

function makeChart(dataObject, dataMax) {
    const labelChart = document.createElement('span');
    labelChart.classList.add('label');
    labelChart.innerText = '$' + dataObject.amount;

    const chart = document.createElement('span');
    chart.classList.add('charts');
    chart.style.height = dataObject.amount * 2 + 'px';
    chart.addEventListener('mouseenter', () => {
        labelChart.style.opacity = '1';
    });
    chart.addEventListener('mouseleave', () => {
        labelChart.style.opacity = '0';
    });

    const dayLabel = document.createElement('p');
    dayLabel.innerText = dataObject.day;

    const chartContainer = document.createElement('div');
    chartContainer.classList.add('chart');
    chartContainer.append(labelChart, chart, dayLabel);

    if(dataObject.amount == dataMax) {
        chart.classList.add('highest');
    }

    return chartContainer;
}