import "./style.css"
import { movies } from "./movie_list"

// type TMovies = {
//   Name: String,
//   Year: Number,
//   Director: String,
//   Length: String,
//   Genre: String[],
//   Rating: Number,
// }

// # ---------- Movie-Liste in HTML ausgeben ----------

function movieList(movieArrays: [string, string, string, string, string[], string][]) {
  const outputCollection = document.getElementById("music_collection") as HTMLElement

  outputCollection.innerHTML = ""

  if (outputCollection) {
    movieArrays.forEach((element) => {
      const movieElement = document.createElement("div") as HTMLDivElement
      movieElement.textContent = String(element)
      outputCollection.appendChild(movieElement)
    })
  } else {
    console.log("Collection nicht gefunden.")
  }
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
    console.log(movieArrays.length - 1)
    return Number(movieB[movieB.length - 1]) - Number(movieA[movieA.length - 1])
  })
  return sortedRate
}

// function sortMovieRate(movieArrays: [string, string, string, string, string[], string][]) {
//   const sortedRate = movieArrays.sort((movieA, movieB) => {
//     return Number(movieB[5]) - Number(movieA[5])
//   })
//   return sortedRate
// }

// ? ------------ AddEventListener anwenden ------------

const bestRateBtn = document.querySelector("#best_rate") as HTMLButtonElement

bestRateBtn.addEventListener("click", () => {
  const outputSortMovieRate = sortMovieRate(movies)
  movieList(outputSortMovieRate)
})
