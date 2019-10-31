const getServerUrl = () => process.env.SERVER_URL;

const getBaseUrl = () => `${getServerUrl()}/velasca/`;

const getApiUrl = () => `${getBaseUrl()}${process.env.API_URL}`;

const getApiGet = () => `${getApiUrl()}/collections/get/`;

const generateAxiosParams = params => ({ ...params, token: process.env.API_TOKEN });

export { getApiUrl, getApiGet, generateAxiosParams, getBaseUrl, getServerUrl };
