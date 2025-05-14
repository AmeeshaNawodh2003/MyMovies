const upcomingMovies = [
  {
    title: "Mission: Impossible ",
    releaseDate: "2025-05-23",
    type: "Movie",
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoKHu-xLvMe7RZsUD3pD0-UXczpAgPjWUpyQ&s",
  },
  {
    title: "How to Train Your Dragon",
    releaseDate: "2025-06-13",
    type: "Movie",
    poster: "https://posterspy.com/wp-content/uploads/2025/02/httyd-resize.jpg",
  },
  {
    title: "Materialists",
    releaseDate: "2025-06-13",
    type: "Movie",
    poster:
      "https://static1.colliderimages.com/wordpress/wp-content/uploads/2024/06/materialists-ewksf-pedro-pascal_dakota-johnson_chris-evans.jpg",
  },
  {
    title: "28 Years Later",
    releaseDate: "2025-06-20",
    type: "Movie",
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpahi-vPpccdAzB3QM-Bu6OhJQ5YSSkuhOIw&s",
  },
  {
    title: "M3GAN 2.0",
    releaseDate: "2025-06-27",
    type: "Movie",
    poster:
      "https://movies.universalpictures.com/media/02-m3g2-dm-mobile-banner-1080x745-rr-f01-033125-67eea339b4406-1.jpg",
  },
  {
    title: "Jurassic World Rebirth",
    releaseDate: "2025-07-02",
    type: "Movie",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/a/a5/Jurassic_World_Rebirth_poster.jpg", // Example poster, may not be official
  },
  {
    title: "Superman",
    releaseDate: "2025-07-11",
    type: "Movie",
    poster:
      "https://m.media-amazon.com/images/M/MV5BZmM0YTI5YzMtNzlhYS00YTg2LTk3MWQtZGM0MDY0ZTQyOTQ5XkEyXkFqcGc@._V1_.jpg",
  },
  {
    title: "The Fantastic Four: First Steps",
    releaseDate: "2025-07-25",
    type: "Movie",
    poster: "https://i.redd.it/t6hvafq56uwe1.jpeg",
  },
  {
    title: "The Bad Guys 2",
    releaseDate: "2025-08-01",
    type: "Movie",
    poster:
      "https://static1.squarespace.com/static/5c95f8d416b640656eb7765a/t/674506473589f446cbb4a592/1732576839197/The+Bad+Guys+2+l.jpg?format=1500w",
  },
  {
    title: "The Naked Gun",
    releaseDate: "2025-08-01",
    type: "Movie",
    poster: "https://i.ytimg.com/vi/_8-N8IIq_8I/maxresdefault.jpg",
  },
  {
    title: "Nobody 2",
    releaseDate: "2025-08-15",
    type: "Movie",
    poster:
      "https://img.etimg.com/thumb/width-1200,height-900,imgsize-105582,resizemode-75,msid-115460128/news/international/us/nobody-2-see-release-date-cast-plot-and-production.jpg",
  },
  {
    title: "Tron: Ares",
    releaseDate: "2025-10-10",
    type: "Movie",
    poster: "https://gizmodo.com/app/uploads/2025/04/tron-ares-hed.jpg",
  },
  {
    title: "Zootopia 2",
    releaseDate: "2025-11-26",
    type: "Movie",
    poster: "https://images.thedirect.com/media/article_full/zootopias.jpg",
  },

  {
    title: "Avatar: Fire and Ash",
    releaseDate: "2025-12-19",
    type: "Movie",
    poster:
      "https://m.media-amazon.com/images/M/MV5BYjE0OWZmYWMtZjBhMi00YzM5LTkzOTctOTZhMTIwNDcxY2U0XkEyXkFqcGc@._V1_.jpg",
  },
  {
    title: "Ironheart",
    releaseDate: "2025-06-24",
    type: "TV Series",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNzNmYmVhYTYtOGVhYi00OGY0LWExYmItNmQ5MDJmZDRjNzM3XkEyXkFqcGc@._V1_.jpg",
  },
  {
    title: "Marvel Zombies",
    releaseDate: "2025-10-03",
    type: "TV Series",
    poster:
      "https://cdn.marvel.com/content/1x/marvel_zombies_dawn_of_decay_1_cover.jpg",
  },
  {
    title: "The Sandman",
    releaseDate: "2025-07-03",
    type: "TV Series",
    poster:
      "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/11/untitled-design-2-2.jpg",
  },
  {
    title: "Fountain of Youth",
    releaseDate: "2025-05-23",
    type: "TV Series",
    poster:
      "https://cdn.cultofmac.com/wp-content/uploads/2025/04/Fountain_of_Youth-film-2.jpg",
  },
];

// Function to calculate countdown
function getCountdown(releaseDate) {
  try {
    const release = new Date(releaseDate).getTime();
    const now = new Date().getTime();
    const distance = release - now;

    if (distance < 0) {
      return "Released!";
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    // const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return `${days}d ${hours}h ${minutes}m `;
  } catch (error) {
    console.error(`Error in getCountdown for ${releaseDate}:`, error);
    return "Invalid date";
  }
}

// Function to render favorite movies

// Function to render upcoming movies
// Function to render upcoming movies
function renderUpcomingMovies() {
  const upcomingList = document.getElementById("upcoming-movies-list");
  if (!upcomingList) {
    console.error("Upcoming movies list element not found");
    return;
  }
  upcomingList.innerHTML = "";

  if (upcomingMovies.length === 0) {
    upcomingList.innerHTML =
      '<p class="text-gray-400">No upcoming movies added yet.</p>';
    return;
  }

  // Sort upcomingMovies by releaseDate in ascending order
  const sortedUpcomingMovies = [...upcomingMovies].sort((a, b) => {
    return new Date(a.releaseDate) - new Date(b.releaseDate);
  });

  sortedUpcomingMovies.forEach((movie) => {
    try {
      const movieCard = document.createElement("div");
      movieCard.className = "movie-card bg-gray-800 rounded-lg overflow-hidden";
      movieCard.innerHTML = `
                <img src="${movie.poster}" alt="${
        movie.title
      }" class="w-full h-64 object-cover">
                <div class="p-4">
                    <h3 class="text-lg font-semibold text-white">${
                      movie.title
                    }</h3>
                    <p class="text-gray-400">${movie.type}</p>
                    <p class="text-yellow-400 font-semibold">Release: ${
                      movie.releaseDate
                    }</p>
                    <p id="countdown-${movie.title.replace(
                      /\s+/g,
                      "-"
                    )}" class="text-gray-300"></p>
                </div>
            `;
      upcomingList.appendChild(movieCard);
    } catch (error) {
      console.error(`Error rendering upcoming movie ${movie.title}:`, error);
    }
  });
}

// Function to update countdown timers without re-rendering cards
function updateCountdowns() {
  upcomingMovies.forEach((movie) => {
    try {
      const countdownElement = document.getElementById(
        `countdown-${movie.title.replace(/\s+/g, "-")}`
      );
      if (countdownElement) {
        countdownElement.textContent = ` ${getCountdown(movie.releaseDate)}`;
      } else {
        console.warn(`Countdown element not found for ${movie.title}`);
      }
    } catch (error) {
      console.error(`Error updating countdown for ${movie.title}:`, error);
    }
  });
}

// Function to render watch later movies/series

// Initial render with error handling
try {
  renderUpcomingMovies();

  // Update countdown every second
  setInterval(updateCountdowns, 1000);
} catch (error) {
  console.error("Error during initial render:", error);
}
