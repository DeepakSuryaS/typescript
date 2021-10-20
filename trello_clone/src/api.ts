import { AppState } from './AppStateContext';

export const save = (payload: AppState) => {
  return fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/save`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then(response => response.json())
    .catch(error => console.error('Error saving data:', error));
};

export const load = () => {
  return fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/load`)
    .then(response => {
      return response.json() as Promise<AppState>;
    })
    .catch(error => console.error('Error loading data:', error));
};
