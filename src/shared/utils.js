import React, { useEffect, useRef } from 'react';

const getServerUrl = () => process.env.SERVER_URL;

const getBaseUrl = () => `${getServerUrl()}/velasca/`;

const getApiUrl = () => `${getBaseUrl()}${process.env.API_URL}`;

const getApiGet = () => `${getApiUrl()}/collections/get/`;

const generateAxiosParams = params => ({ ...params, token: process.env.API_TOKEN });

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

export { getApiUrl, getApiGet, generateAxiosParams, getBaseUrl, getServerUrl };
