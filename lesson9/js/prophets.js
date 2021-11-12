const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const prophets = jsonObject['prophets'];
        prophets.forEach((prophet) => {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let birthplace = document.createElement('p');
            let birthdate = document.createElement('p');
            let image = document.createElement('img');
            
            h2.innerHTML = `${prophet.name} ${prophet.lastname}`;
            birthdate.innerHTML = `Date of Birth: ${prophet.birthdate}`;
            birthplace.innerHTML = `Place of Birth: ${prophet.birthplace}`;
            image.innerHTML = `${prophet.imageurl}`;
            image.setAttribute('src', prophet.imageurl);

            card.appendChild(h2);
            card.appendChild(birthdate);
            card.appendChild(birthplace);
            card.appendChild(image);

            document.querySelector('div.cards').appendChild(card);
        });
    });