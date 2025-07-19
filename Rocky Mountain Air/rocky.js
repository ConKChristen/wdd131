// Array of airplane objects
    const airplanes = [
      {
        name: "Cirrus SR22",
        image: "Airplane Pic 1.jpeg",
        description: "Popular short to medium range jet."
      },
      {
        name: "Airbus A320",
        image: "Airplane Pic 2.jpg",
        description: "Extensively used for regional routes."
      },
      {
        name: "Piper PA-31 Navajo",
        image: "Airplane Pic 3.webp",
        description: "Iconic supersonic passenger airliner."
      },
      {
        name: "Concorde",
        image: "Airplane Pic 4.jpg",
        description: "It's all about speed and prestige"
      },
      {
        name: "Super King Air",
        image: "Airplane Pic 5.webp",
        description: "Known for it flexability and long lasting reliability"
      },
      {
        name: "Pilatus PC-24",
        image: "Airplane Pic 6.jpg",
        description: "A medium corporate jet with its spacious cabin space"
      }
    ];

    const container = document.getElementById('airplaneContainer');

    // Build and insert HTML for each airplane
    let html = '';
    airplanes.forEach((plane, idx) => {
      html += `
        <div class="card" id="card-${idx}">
          <h2>${plane.name}</h2>
          <img src="${plane.image}" alt="${plane.name}" id="img-${idx}">
          <p>${plane.description}</p>
        </div>
      `;
    });
    container.innerHTML = html;

    // Attach click listeners for enlarging images
    airplanes.forEach((_, idx) => {
      const img = document.getElementById(`img-${idx}`);
      img.addEventListener('click', () => {
        img.classList.toggle('enlarged');
      });
    });

    // Dark mode toggle logic
    const toggle = document.getElementById('darkModeToggle');
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    });