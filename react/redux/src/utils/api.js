import axios from 'axios';

export const jsonplaceholder = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});

// axios.get()
// jsonplaceholder.get()

// axios({ })
// jsonplaceholder({ method: 'patch' })
