document.addEventListener("DOMContentLoaded", function () {
  const storedData = sessionStorage.getItem("fetchedData");
  const rawData = JSON.parse(storedData);
  const graphTitle = sessionStorage.getItem("graphTitle");
  const chartIndex = sessionStorage.getItem("chartIndex");
  console.log (rawData)
  const titleElement = document.querySelector(".data-visualization h2");
  titleElement.textContent = graphTitle;
  let chartIndex2 = parseInt(chartIndex)
  let chartConfig;

  switch (chartIndex2) {
    case 1:
      chartConfig = function1(rawData);
      break;
    case 2:
      chartConfig = function2(rawData);
      break;
    case 3:
      chartConfig = function3(rawData);
      break;
    case 4:
      chartConfig = function4(rawData);
      break;
    // Add additional cases for other chart indices
    default:
      console.error("Invalid chart index:", chartIndex);
  }

  const chartCanvas = document.getElementById('myChart');
  const myChart = new Chart(chartCanvas, chartConfig);
});

function function1(data) {
  // Extract labels and values from the data
  const chartData = data.products.map((item) => ({
    x: item.product_name,
    y: item.nutriments["energy-kcal"]
  }));
  const chartLabels = chartData.map((item) => item.x);
  const chartValues = chartData.map((item) => item.y);

  const chartConfig = {
    type: 'bar',
    data: {
      labels: chartLabels,
      datasets: [
        {
          label: 'Products with the highest calorie content (kcal/100g)',
          data: chartValues,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  };

  return chartConfig;
}

function function2(data) {
  // Extract the 10 products with the highest sugar content
  const top10 = data.products.sort((a, b) => {
    return b.nutriments.sugars_100g - a.nutriments.sugars_100g;
  }).slice(0, 10);

  // Extract labels and values from the top 10 products
  const chartData = top10.map((item) => ({
    x: item.product_name,
    y: item.nutriments.sugars_100g
  }));
  const chartLabels = chartData.map((item) => item.x);
  const chartValues = chartData.map((item) => item.y);

  const chartConfig = {
    type: 'bar',
    data: {
      labels: chartLabels,
      datasets: [
        {
          label: 'Products with the highest sugar content (g/100g)',
          data: chartValues,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            stepSize: 5
          }
        }]
      }
    }
  };
  

  return chartConfig;
}


function function3(data) {
  // Extract the 10 products with the highest sugar content
  const top10 = data.products.sort((a, b) => {
    return b.nutriments.sugars_100g - a.nutriments.sugars_100g;
  }).slice(0, 10);

  // Extract labels and values from the top 10 products
  const chartData = top10.map((item) => ({
    x: item.product_name,
    y: item.nutriments.proteins
  }));
  const chartLabels = chartData.map((item) => item.x);
  const chartValues = chartData.map((item) => item.y);

  const chartConfig = {
    type: 'bar',
    data: {
      labels: chartLabels,
      datasets: [
        {
          label: 'Products with the highest sugar content (g/100g)',
          data: chartValues,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            stepSize: 5
          }
        }]
      }
    }
  };
  

  return chartConfig;
}


function function4(data) {
  // Extract the 10 products with the highest sugar content
  const top10 = data.products.sort((a, b) => {
    return b.nutriments.sugars_100g - a.nutriments.sugars_100g;
  }).slice(0, 10);

  // Extract labels and values from the top 10 products
  const chartData = top10.map((item) => ({
    x: item.product_name,
    y: item.nutriments.fat
  }));
  const chartLabels = chartData.map((item) => item.x);
  const chartValues = chartData.map((item) => item.y);

  const chartConfig = {
    type: 'bar',
    data: {
      labels: chartLabels,
      datasets: [
        {
          label: 'Products with the highest fat content (g/100g)',
          data: chartValues,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            stepSize: 5
          }
        }]
      }
    }
  };
  

  return chartConfig;
}
