// Reusable code

import { TIMEOUT_SEC } from './config';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const getJSON = async function (url) {
  try {
    // Get a recipe by id
    const res = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]); // If user has really bad connection, timeout the fetch request
    const data = await res.json();

    // Error handling : If wrong ID
    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (err) {
    throw err; // Thrown to model error handling
  }
};

export const sendJSON = async function (url, uploadData) {
  try {
    const fetchPro = fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(uploadData),
    });
    // Get a recipe by id
    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]); // If user has really bad connection, timeout the fetch request
    const data = await res.json();

    // Error handling : If wrong ID
    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (err) {
    throw err; // Thrown to model error handling
  }
};
