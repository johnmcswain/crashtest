// make sure to add this to your package.json
// "type": "module", identical to the one in the package.json
// on line 6 in order to use import/export

import {ItunesMedia} from './classes.js'
import axios from 'axios' // back-end JS library
import inquirer from 'inquirer'
try {
  if (process.env.NODE_ENV !== 'test') {
    main();
  }
} catch (e) {
  console.log(e)
}

function main () {
  promptItunesSearchTerm()
  // Avengers: Endgame', 'movie'
  // Interstellar','movie'
  // Inception','movie'
  // 'Fell in Love With a Girl White Stripes','musicVideo'
  // Smells like teen spirit Nirvana','musicVideo'

  // promptNASASearchTerm()
  // sun
  // gas giant
  // dwarf star
}

/**
 * Searches the NASA image API for the given search term.
 *
 * @param {string} term - The search term to look for.
 */
function getNASAData (term = '') {
  // set default parameter values for JavaScript functions
  // https://www.w3schools.com/howto/howto_js_default_parameters.asp

  // https://www.w3schools.com/jsref/jsref_isnan.asp
  console.log(`is '${term}' Not a Number? ${isNaN(term)}`)

  // https://www.w3schools.com/jsref/jsref_encodeURIComponent.asp
  // https://api.nasa.gov/#nasa-image-and-video-library

  const url = `https://images-api.nasa.gov/search?q=${encodeURIComponent(term)}`
  console.log(`NASA Image/Video Search API URL: ${url}`)

  axios.get(url)
    .then(function (response) { // https://www.w3schools.com/js/js_promise.asp
      console.log(response.data.collection.items[0])
      if (response.data.collection.items.length > 0) {
        const MATCH = new NASAMedia( // creates an instance of the NASAMedia class
          response.data.collection.items[0].href,
          response.data.collection.items[0].data,
          response.data.collection.items[0].links
        )
        MATCH.printInfo()
      }
    })
    .catch(error => {
      // print the error (e.g., console.error())
      // https://www.w3schools.com/jsref/met_console_error.asp
      console.error('API request failed', error)
    })
}
function promptNASASearchTerm () {
  // run in the console: npm install --save inquirer@^8.0.0
  // https://www.npmjs.com/package/inquirer
  inquirer
    .prompt([
      /* Pass your questions in here */
      // {
      //   type: 'input',
      //   name: 'searchTerm',
      //   message: "Enter a NASA Image search term: ",
      // }
      {
        type: 'list',
        message: 'Select a NASA Image search term',
        name: 'searchTerm',
        choices: [
          new inquirer.Separator(' = Astronomical Choices = '),
          {
            name: 'Magnetar'
          },
          {
            name: 'Dark Nebula'
          },
          {
            name: 'Brown Dwarf'
          },
          {
            name: 'Supernova'
          },
          {
            name: 'Gas Giant'
          }
        ]
      }
    ])
    .then((answers) => {
      getNASAData(answers.searchTerm)
    })
    .catch(error => {
      // print the error (e.g., console.error())
      // https://www.w3schools.com/jsref/met_console_error.asp
      console.error('Prompt failed', error)
    })
}
export function getItunesData (name = '', media = '') {
  // APIs
  // iTunes Search
  // https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/Searching.html

  // https://www.w3schools.com/jsref/jsref_encodeURIComponent.asp
  const url = `https://itunes.apple.com/search?term=${(encodeURIComponent(name)).replace('%20', '+')}&media=${encodeURIComponent(media)}`
  console.info(`Apple Music Search API URL: ${url}`)
  axios.get(url)
    .then(function (response) {
      console.log(JSON.stringify(response.data.results))
      if (response.data.results.length > 0) {
        const media = response.data.results[0]
        const MATCH = new ItunesMedia( // uses a class declared below
          media.trackName,
          media.primaryGenreName,
          media.previewUrl,
          media.shortDescription,
          media.trackViewUrl
        )
        MATCH.printInfo()
      }
    })
    .catch(error => {
      console.log(error)
    })
}
export function promptItunesSearchTerm () {
  // run in the console: npm install --save inquirer@^8.0.0
  // https://www.npmjs.com/package/inquirer
  inquirer
    .prompt([
      /* Pass your questions in here in order they should appear */
      {
        type: 'input',
        name: 'searchTerm',
        message: 'Enter an Apple Music search term: '
      },
      {
        type: 'list',
        message: 'Select an Apple Music media type: ',
        name: 'media',
        choices: [
          new inquirer.Separator(' = Media Choices = '),
          {
            name: 'movie'
          },
          {
            name: 'podcast'
          },
          {
            name: 'music'
          },
          {
            name: 'musicVideo'
          },
          {
            name: 'tvShow'
          },
          {
            name: 'all'
          }
        ]
      }
    ])
    .then((answers) => {
      getItunesData(answers.searchTerm, answers.media)
    })
    .catch(error => {
      // print the error (e.g., console.error())
      // https://www.w3schools.com/jsref/met_console_error.asp
      console.error('Search Term Prompt Failed', error)
    })
}
