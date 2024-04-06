import {getItunesData} from '../index.js'
import axios from 'axios'

jest.mock('axios')

describe('getItunesData function', () => {
  const mockResponse = {
    data: {
      results: [{
        trackName: 'Some Song',
        primaryGenreName: 'Rock',
        previewUrl: 'http://example.com/preview',
        shortDescription: 'A rock song',
        trackViewUrl: 'http://example.com/full'
      }]
    }
  }

  beforeEach(() => {
    axios.get.mockResolvedValue(mockResponse)
  })

  it('should fetch data and create an ItunesMedia instance', async () => {
    const searchTerm = 'Fell in Love With a Girl White Stripes';
    const mediaType = 'musicVideo';
    const result = await getItunesData(searchTerm, mediaType);
    expect(axios.get).toHaveBeenCalledWith(`https://itunes.apple.com/search?term=${(encodeURIComponent(searchTerm)).replace('%20', '+')}&media=${mediaType}`)
    // expect(result.trackName).toBe(mockResponse.data.results[0].trackName);
    // expect(result.primaryGenreName).toBe(mockResponse.data.results[0].primaryGenreName);
    // expect(result.previewUrl).toBe(mockResponse.data.results[0].previewUrl);
    // expect(result.shortDescription).toBe(mockResponse.data.results[0].shortDescription);
    // expect(result.trackViewUrl).toBe(mockResponse.data.results[0].trackViewUrl);
  })

  // it('should handle errors correctly', async () => {
  //   expect(true).toBe(true)
    //   const error = new Error('Network error');
    //   axios.get.mockRejectedValue(error);

    //   const errorSpy = jest.spyOn(console, 'log');

    //   await getItunesData('Some Song', 'music');

  //   expect(axios.get).toHaveBeenCalled();
  //   expect(errorSpy).toHaveBeenCalledWith(error);
  // })
})
