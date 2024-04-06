# crash test

This is a space to learn, crash, recover, and experiment without fear of punitive annihilation or destruction. But then again...
<img src='https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWhvN2FxaWZ1aXl5bTVxaW4xcGU4NzA3ZTZ3dnFqY2F0am9uN3lsZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l3mZepmuaiQrVYjGU/giphy.gif'>
To run the iTunes search, do the following (from the root directory):
```shell
npm i && npm start
```
To run tests (from the root directory):
```shell
npm test
```

## ItunesMedia class
#### Properties
- `name`: The name or title of the media item.
- `genre`: The genre of the media item.
- `previewUrl`: The URL for a media preview.
- `shortDescription`: A short description of the media item.
- `trackURL`: The URL to the full media item.

#### Methods
- `printInfo()`: Displays information about the iTunes media item to the console, iterating through each property and printing its name and value.
- `divider()`: Prints a divider in the console to improve readability.

## getItunesData() function

#### Parameters
- `name`: The search term to query the iTunes API.
- `media`: The type of media to search for (e.g., movie, music, etc.).

#### Behavior
- Constructs a URL using the search term and media type, then makes an HTTP GET request to the iTunes API.
- On success, processes the response to create an instance of `ItunesMedia` and calls `printInfo()` on it.
- On failure, logs the error to the console.

## promptItunesSearchTerm() function
#### Behavior
- Prompts the user to enter a search term for Apple Music.
- Prompts the user to select a media type from a list of options.
- After receiving user input, calls `getItunesData` with the provided search term and media type.


#### `ItunesMedia` Tests
- **Constructor Test**: Verifies that the `ItunesMedia` constructor correctly assigns values to its properties.
- **`printInfo` Method Test**: Ensures that `printInfo` correctly logs the media's details to the console.

#### `getItunesData` Tests
- **Data Fetching Test**: Checks that `getItunesData` correctly fetches data from the iTunes API and processes the response appropriately.
  - Mocks `axios.get` to simulate API calls and tests that the function handles the mock response as expected.
- **Error Handling Test**: Confirms that `getItunesData` properly logs errors when the API request fails.
  - Mocks `axios.get` to throw an error and verifies that the function catches and logs the error.
