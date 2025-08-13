import "./style.css"
import { movies } from "./movie_list"

export type TMovies = {
  Title: String
  Year: String
  Director: String
  Length: String
  Genre: String[]
  Rating: String
}

// # ---------- Movie-Liste in HTML ausgeben ----------

function movieList(movieArrays: [string, string, string, string, string[], string][]) {
  const outputCollection = document.getElementById("music_collection") as HTMLElement

  movieArrays.forEach(([title, year, director, duration, genre, rating]) => {
    // * ------ Spacing für das Genre-Array -----

    genre.forEach((element: string, index) => {
      genre[index] = " " + element
    })

    // * ------- Movie-Boxen erstellen in HTML -------
    const movieElement = document.createElement("div") as HTMLDivElement
    movieElement.className = "movie_box"
    movieElement.innerHTML = `<h3>${title}</h3>
    <p>Release year: <span>${year}</span></p>
    <p>Director: <span>${director}</span></p>
    <p>⏳ ${duration}</p>
    <p>🎞️ ${genre}</p>
    <p>⭐️ ${rating}</p>`

    // * ----- Movie-Boxen Styling -----
    movieElement.style.width = "24rem"
    movieElement.style.height = "22rem"
    movieElement.style.backgroundColor = "#C8DE90"
    movieElement.style.borderRadius = "1.5rem"

    outputCollection.appendChild(movieElement)
  })
}

movieList(movies)

// # ---------- Mit YEAR UP sortieren ----------

function sortMovieYearUp(movieArrays: [string, string, string, string, string[], string][]) {
  const sortedYears = movieArrays.sort((movieA, movieB) => {
    return Number(movieA[1]) - Number(movieB[1])
  })
  return sortedYears
}

// ? ------------ AddEventListener anwenden ------------

const yearUpBtn = document.querySelector("#year_up") as HTMLButtonElement

yearUpBtn.addEventListener("click", () => {
  const outputSortMovieYearUp = sortMovieYearUp(movies)
  movieList(outputSortMovieYearUp)
})

// # ---------- Mit YEAR DOWN sortieren ----------

function sortMovieYearDown(movieArrays: [string, string, string, string, string[], string][]) {
  const sortedYears = movieArrays.sort((movieA, movieB) => {
    return Number(movieB[1]) - Number(movieA[1])
  })
  return sortedYears
}

// ? ------------ AddEventListener anwenden ------------

const yearDownBtn = document.querySelector("#year_down") as HTMLButtonElement

yearDownBtn.addEventListener("click", () => {
  const outputSortMovieYearDown = sortMovieYearDown(movies)
  movieList(outputSortMovieYearDown)
})

// # ---------- Mit BEST RATE sortieren ----------

function sortMovieRate(movieArrays: [string, string, string, string, string[], string][]) {
  const sortedRate = movieArrays.sort((movieA, movieB) => {
    return Number(movieB[movieB.length - 1]) - Number(movieA[movieA.length - 1])
  })
  return sortedRate
}

// ? ------------ AddEventListener anwenden ------------

const bestRateBtn = document.querySelector("#best_rate") as HTMLButtonElement

bestRateBtn.addEventListener("click", () => {
  const outputSortMovieRate = sortMovieRate(movies)
  movieList(outputSortMovieRate)
})

// # --------- Mit Search-Feld suchen und finden ---------

const searchInput = document.querySelector("#input_text") as HTMLInputElement
const searchBtn = document.querySelector("#btn_search") as HTMLButtonElement

function filterMovies(input: string) {
  const inputLowerCase = input.toLowerCase()
  const genresArray = Array.from(new Set(movies.flatMap(([, , , , Genres]) => Genres))).sort()

  // * ----- Mit Search-Feld Genres suchen -----

  // const genreElement = genresArray.forEach((genre) => {
  //   const genreString = genresArray[Number(genre)]
  //   return genreString.toString()
  // })

  return movies.filter(
    ([Title, Year, Director, genreElement]) =>
      Title.toLowerCase().includes(inputLowerCase) ||
      Year.includes(inputLowerCase) ||
      Director.toLowerCase().includes(inputLowerCase) ||
      genreElement.toLowerCase().includes(inputLowerCase)
  )
}

// ? ------------ AddEventListener anwenden ------------

searchBtn.addEventListener("click", () => {
  const inputValue = searchInput.value
  const filterResult = filterMovies(inputValue)
  movieList(filterResult)
})
