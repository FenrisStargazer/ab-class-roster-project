// My Scripts

const url = "https://v1.nocodeapi.com/pmanikoth/webflow/wtzODovSIJsRXhZg";

fetch(url)
  .then( response  => response.json())
  .then( data  => {

    const roster = document.querySelector(".roster");

    data.items.forEach( student => {
      
      const temp = `
          <figure>
            <figcaption>${student.name}</figcaption>
            <img src="${student.image.url}" alt="Student Image" />
          </figure>
       `;

      roster.insertAdjacentHTML("afterbegin", temp);
    });
  });