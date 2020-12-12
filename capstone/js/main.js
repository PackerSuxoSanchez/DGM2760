fetch('https://api.covidtracking.com/v1/states/info.json')
    .then(response => response.json())
    .then(data => console.log(data));

    