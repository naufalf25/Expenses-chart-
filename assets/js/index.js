
async function jsonData() {
    const requestURL = "../../data.json";
    const request = new Request(requestURL);

    const response = await fetch(request);
    const data = await response.json();

    chart(data);
}

function chart(obj) {
    const mondayData = obj[0];
    const mondayChart = document.getElementById("chartMon");
    mondayChart.style.height = mondayData.amount * 2 + "px";
    const mondayLabel = document.getElementById("labelMon");
    mondayLabel.innerText = "$" + mondayData.amount;
    mondayChart.addEventListener('mouseenter', () => {
        mondayLabel.style.opacity = '1';
    });
    mondayChart.addEventListener('mouseleave', () => {
        mondayLabel.style.opacity = '0';
    });

    const tuesdayData = obj[1];
    const tuesdayChart = document.getElementById("chartTue");
    tuesdayChart.style.height = tuesdayData.amount * 2 + "px";
    const tuesdayLabel = document.getElementById("labelTue");
    tuesdayLabel.innerText = "$" + tuesdayData.amount;
    tuesdayChart.addEventListener('mouseenter', () => {
        tuesdayLabel.style.opacity = '1';
    });
    tuesdayChart.addEventListener('mouseleave', () => {
        tuesdayLabel.style.opacity = '0';
    });

    const wednesdayData = obj[2];
    const wednesdayChart = document.getElementById("chartWed");
    wednesdayChart.style.height = wednesdayData.amount * 2 + "px";
    const wednesdayLabel = document.getElementById("labelWed");
    wednesdayLabel.innerText = "$" + wednesdayData.amount;
    wednesdayChart.addEventListener('mouseenter', () => {
        wednesdayLabel.style.opacity = '1';
    });
    wednesdayChart.addEventListener('mouseleave', () => {
        wednesdayLabel.style.opacity = '0';
    });

    const thursdayData = obj[3];
    const thursdayChart = document.getElementById("chartThu");
    thursdayChart.style.height = thursdayData.amount * 2 + "px";
    const thursdayLabel = document.getElementById("labelThu");
    thursdayLabel.innerText = "$" + thursdayData.amount;
    thursdayChart.addEventListener('mouseenter', () => {
        thursdayLabel.style.opacity = '1';
    });
    thursdayChart.addEventListener('mouseleave', () => {
        thursdayLabel.style.opacity = '0';
    });

    const fridayData = obj[4];
    const fridayChart = document.getElementById("chartFri");
    fridayChart.style.height = fridayData.amount * 2 + "px";
    const fridayLabel = document.getElementById("labelFri");
    fridayLabel.innerText = "$" + fridayData.amount;
    fridayChart.addEventListener('mouseenter', () => {
        fridayLabel.style.opacity = '1';
    });
    fridayChart.addEventListener('mouseleave', () => {
        fridayLabel.style.opacity = '0';
    });

    const saturdayData = obj[5];
    const saturdayChart = document.getElementById("chartSat");
    saturdayChart.style.height = saturdayData.amount * 2 + "px";
    const saturdayLabel = document.getElementById("labelSat");
    saturdayLabel.innerText = "$" + saturdayData.amount;
    saturdayChart.addEventListener('mouseenter', () => {
        saturdayLabel.style.opacity = '1';
    });
    saturdayChart.addEventListener('mouseleave', () => {
        saturdayLabel.style.opacity = '0';
    });

    const sundayData = obj[6];
    const sundayChart = document.getElementById("chartSun");
    sundayChart.style.height = sundayData.amount * 2 + "px";
    const sundayLabel = document.getElementById("labelSun");
    sundayLabel.innerText = "$" + sundayData.amount;
    sundayChart.addEventListener('mouseenter', () => {
        sundayLabel.style.opacity = '1';
    });
    sundayChart.addEventListener('mouseleave', () => {
        sundayLabel.style.opacity = '0';
    });
}

jsonData();