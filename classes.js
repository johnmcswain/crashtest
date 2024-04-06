/**
 * CLASSES
 * https://www.w3schools.com/js/js_class_intro.asp
 * https://www.w3schools.com/js/js_classes.asp
 * Avoid repeating object declarations with reusable declarations
 */

/**
 * Represents NASA media data.
 */
export class NASAMedia {
  /**
   * Create a NASA media item.
   * @param {string} href - The URL of the media item.
   * @param {object[]} data - The array containing media's metadata.
   * @param {object[]} links - The array containing links to media files.
   */
  constructor (href, data, links) {
    this.href = href
    this.title = data[0].title
    this.description = data[0].description
    this.image = links[0].href
  }

  /**
   * Display information about the NASA media.
   */
  printInfo () {
    for (const item in this) {
      console.log(`${item}: ${this[item]}`)
    }
    this.divider()
  }

  /**
   * Print a divider to the console for readability.
   */
  divider () {
    console.log(`
----------------------`)
  }
}

/**
 * Represents an iTunes media item.
 */
export class ItunesMedia {
  /**
   * Create an iTunes media item.
   * @param {string} name - The name or title of the media item.
   * @param {string} genre - The genre of the media item.
   * @param {string} previewURL - The URL for a media preview.
   * @param {string} shortDescription - A short description of the media item.
   * @param {string} trackURL - The URL to the full media item.
   */
  constructor (name, genre, previewURL, shortDescription, trackURL) {
    this.name = name
    this.genre = genre
    this.previewUrl = previewURL
    this.shortDescription = shortDescription
    this.trackURL = trackURL
  }

  /**
   * Display information about the iTunes media item.
   */
  printInfo () {
    for (const item in this) {
      console.log(`${item}: ${this[item]}`)
    }
    this.divider()
  }

  /**
   * Print a divider to the console for readability.
   */
  divider () {
    console.log(`
----------------------`)
  }
}
export default ItunesMedia