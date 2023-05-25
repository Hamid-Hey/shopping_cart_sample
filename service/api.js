import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'https://mocki.io/v1/a03f4c39-409c-4302-9b5e-e5078ed44434',
  })
}
