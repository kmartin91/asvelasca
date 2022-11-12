import React, { useEffect, useRef } from 'react';

const getServerUrl = () => process.env.SERVER_URL;

const getApiUrl = () => `${getServerUrl()}${process.env.API_URL}`;

const getApiGet = () => `${getApiUrl()}/collections/get/`;

const getApiToken = () => process.env.API_TOKEN;

const getTutoCampiToken = () => process.env.TUTOCAMPI_TOKEN;

const getCurrentYear = () => process.env.CURRENT_YEAR;

export function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const getRouteWithLocale = (route) => {
  if (
    window.location.href.indexOf(window.LOCALE_VELASCA) < 0 ||
    window.location.href.split('/').pop() === window.LOCALE_VELASCA
  ) {
    return `${window.LOCALE_VELASCA || 'en'}/${route}`;
  }
  return route;
};

export {
  getApiUrl,
  getApiGet,
  getServerUrl,
  getRouteWithLocale,
  getTutoCampiToken,
  getApiToken,
  getCurrentYear,
};
