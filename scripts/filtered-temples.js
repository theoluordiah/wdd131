const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Panama City Panama",
        location: "Panama City, Panama",
        dedicated: "2008, August, 10",
        area: 18943,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/panama-city-panama/400x250/panama-city-temple-lds-569186-wallpaper.jpg"
    },
    {
        templeName: "Fukuoka Japan",
        location: "Fukuoka, Japan",
        dedicated: "2000, June, 11",
        area: 10700,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/fukuoka-japan/400x250/fukuoka-japan-temple-lds-306863-wallpaper.jpg"
    },
    {
        templeName: "Helsinki Finland",
        location: "Espoo, Finland",
        dedicated: "2006, October, 22",
        area: 16350,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/helsinki-finland/400x225/helsinki-finland-temple-lds-354498-wallpaper.jpg"
    },
    {
        templeName: "Logan Utah",
        location: "Logan, Utah, United States",
        dedicated: "1884, May, 17",
        area: 119619,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/logan-utah-temple/logan-utah-temple-40550-main.jpg"
    },
    {
        templeName: "Taipei Taiwan",
        location: "Taipei, Taiwan",
        dedicated: "1984, November, 23",
        area: 9945,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/taipei-taiwan-temple/taipei-taiwan-temple-8296-main.jpg"
    }
];

const templeContainer = document.getElementById("temple-container");
const pageTitle = document.getElementById("page-title");
const resultCount = document.getElementById("result-count");
const menuButton = document.getElementById("menu");
const nav = document.getElementById("nav");
const navLinks = document.querySelectorAll("#nav a[data-filter]");

const pageTitles = {
    home: "Home",
    old: "Old Temples",
    new: "New Temples",
    large: "Large Temples",
    small: "Small Temples"
};

const filters = {
    home: () => true,
    old: (temple) => new Date(temple.dedicated).getFullYear() < 1900,
    new: (temple) => new Date(temple.dedicated).getFullYear() > 2000,
    large: (temple) => temple.area > 90000,
    small: (temple) => temple.area < 10000
};

const createTempleDetail = (label, value) => {
    const detail = document.createElement("div");
    const term = document.createElement("dt");
    const description = document.createElement("dd");

    term.textContent = label;
    description.textContent = value;
    detail.append(term, description);

    return detail;
};

const createTempleCard = (temple) => {
    const card = document.createElement("article");
    const image = document.createElement("img");
    const content = document.createElement("div");
    const name = document.createElement("h2");
    const details = document.createElement("dl");

    card.className = "temple-card";
    image.src = temple.imageUrl;
    image.alt = `${temple.templeName} Temple`;
    image.loading = "lazy";
    image.decoding = "async";
    image.width = 400;
    image.height = 250;

    name.textContent = temple.templeName;
    details.className = "temple-details";
    details.append(
        createTempleDetail("Location", temple.location),
        createTempleDetail("Dedicated", temple.dedicated),
        createTempleDetail("Total area", `${temple.area.toLocaleString("en-US")} sq ft`)
    );

    content.className = "temple-card-content";
    content.append(name, details);
    card.append(image, content);

    return card;
};

const closeMenu = () => {
    nav.classList.remove("open");
    menuButton.textContent = "☰";
    menuButton.setAttribute("aria-expanded", "false");
};

const displayTemples = (filter) => {
    const selectedFilter = filters[filter] ? filter : "home";
    const filteredTemples = temples.filter(filters[selectedFilter]);
    const fragment = document.createDocumentFragment();

    filteredTemples.forEach((temple) => {
        fragment.append(createTempleCard(temple));
    });

    templeContainer.replaceChildren(fragment);
    pageTitle.textContent = pageTitles[selectedFilter];
    resultCount.textContent = `${filteredTemples.length} ${filteredTemples.length === 1 ? "temple" : "temples"} displayed`;

    navLinks.forEach((link) => {
        if (link.dataset.filter === selectedFilter) {
            link.setAttribute("aria-current", "page");
        } else {
            link.removeAttribute("aria-current");
        }
    });

    if (filteredTemples.length === 0) {
        const message = document.createElement("p");
        message.className = "no-results";
        message.textContent = "No temples match this filter.";
        templeContainer.append(message);
    }
};

menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuButton.textContent = isOpen ? "✖" : "☰";
    menuButton.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        displayTemples(link.dataset.filter);
        closeMenu();
    });
});

document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;

displayTemples("home");
