let movies = [
  {
    name: "Falcon and the Winter Soldier",
    des: "In the aftermath of 'Avengers: Endgame,' Sam Wilson and Bucky Barnes face new challenges and adversaries, grappling with legacy and partnership in a world seeking stability.",
    image: "images/slider 2.PNG",
  },
  {
    name: "WandaVision",
    des: "A blend of classic sitcom and Marvel Cinematic Universe storytelling, 'WandaVision' follows Wanda Maximoff and Vision as they attempt to live an idyllic suburban life, only to realize that not everything is as it seems.",
    image: "images/slider 3.PNG",
  },
  {
    name: "Raya and the Last Dragon",
    des: "In a reimagined Earth inhabited by an ancient civilization, a lone warrior named Raya is determined to find the legendary last dragon to restore the fractured land and its divided people.",
    image: "images/slider 4.PNG",
  },
  {
    name: "Luca",
    des: "Set in a beautiful seaside town on the Italian Riviera, 'Luca' is a coming-of-age story about one young boy experiencing an unforgettable summer filled with gelato, pasta, and endless scooter rides.",
    image: "images/slider 5.PNG",
  },
  {
    name: "Loki",
    des: "The mercurial villain Loki resumes his role as the God of Mischief in a new series that takes place after the events of 'Avengers: Endgame.' Loki finds himself called before the Time Variance Authority after stealing the Tesseract.",
    image: "images/slider 1.PNG",
  },
];

// const carousel = document.querySelector(".carousel");
// let sliders = [];

// let slideIndex = 0;

// const createSlide = () => {
//   if (slideIndex >= movies.length) {
//     slideIndex = 0;
//   }

//   //create dom elements
//   let slide = document.createElement("div");
//   var imgElement = document.createElement("img");
//   let content = document.createElement("div");
//   let h1 = document.createElement("h1");
//   let p = document.createElement("p");

//   // attachng all the lelements
//   imgElement.appendChild(document.createTextNode(""));
//   h1.appendChild(document.createTextNode(movies[slideIndex].name));
//   p.appendChild(document.createTextNode(movies[slideIndex].des));
//   content.appendChild(h1);
//   content.appendChild(p);
//   slide.appendChild(imgElement);
//   carousel.appendChild(slide);

//   //setting up the images
//   imgElement.src = movies[slideIndex].image;
//   slideIndex++;

//   //setting elements class names
//   slide.className = "slider";
//   content.className = "slide-content";
//   h1.className = "movie-title";
//   p.className = "movie-des";

//   sliders.push(slide);

//   if (slide.length) {
//     sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
//       30 * (sliders.length - 2)
//     }px)`;
//   }
// };

const imageSlider = document.getElementById("image-slider");
const titleSlider = document.getElementById("slider-title");
const descSlider = document.getElementById("slider-desc");
let i = 0;
setInterval(() => {
  imageSlider.setAttribute("src", movies[i].image);
  titleSlider.innerHTML = movies[i].name;
  descSlider.innerHTML = movies[i].des;
  i++;
  if (i === movies.length) {
    i = 0;
  }
}, 2000);
