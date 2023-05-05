async function fetchData(query, graphTitle, chartIndex) {
    try {
      const url = `https://world.openfoodfacts.org/category/${query}/1.json`;
      const response = await fetch(url);
      const data = await response.json();
      const targetPage = "./visualisation1.html";
      // Save data, graph title, and chart index to session storage
      sessionStorage.setItem('fetchedData', JSON.stringify(data));
      sessionStorage.setItem('graphTitle', graphTitle);
      sessionStorage.setItem('chartIndex', chartIndex);
  
      // Navigate to the target visualization page
      window.location.href = targetPage;
  
      // Log the data to the console
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  