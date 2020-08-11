import { StormGlass } from '@src/clients/stormGlass'
import axios from 'axios'

jest.mock('axios')

describe('StromGlass', () => {
  
  it('Should return the normalized forecast from the StormGlass service', async () => {
    const lat = -33.792726
    const lng = 151.289824

    axios.get = jest.fn().mockResolvedValue({})

    const stormGlass = new StormGlass(axios)
    const response = await stormGlass.fetchPoints(lat, lng)

    expect(response).toEqual({})
  })

});