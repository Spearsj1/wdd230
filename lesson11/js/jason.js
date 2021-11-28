const url = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const towns = jsonObject['towns'];
        towns.forEach((town) => {
            let area = document.createElement('section');
            let tname = document.createElement('h4');
            let motto = document.createElement('h5');
            let found = document.createElement('p');
            let pop = document.createElement('p');
            let rain = document.createElement('p');
            let image = document.createElement('img');

            tname.innerHTML = `${town.name}`;
            motto.innerHTML = `${town.motto}`;
            found.innerHTML = `Year Founded: ${town.yearFounded}`;
            pop.innerHTML = `Population: ${town.currentPopulation}`;
            rain.innerHTML = `Annual Rain Fall: ${town.averageRainfall}`;
            image.setAttribute('src' , town.photo);

            area.appendChild(tname);
            area.appendChild(motto);
            area.appendChild(found);
            area.appendChild(pop);
            area.appendChild(rain);
            area.appendChild(image);

            document.querySelector('div.jason').appendChild(area)
        });
    });