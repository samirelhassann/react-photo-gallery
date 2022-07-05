import axios from "axios";
import axiosRetry from "axios-retry";
import { PexelsPhoto, PexelsResponse } from "./PexelsResponse";

const BASE_URL = "https://api.pexels.com";
const AUTH = "563492ad6f91700001000001769d695fad8b4cddb8a086879458854b";

axiosRetry(axios, {
  retries: 3,
  retryDelay: () => {
    return 1500;
  },
  retryCondition: (error: any) => {
    if (error) {
      return error.response?.status === 400 || error.response?.status === 401;
    }

    return false;
  },
});

export const PexelsService = {
  getCuratedPhotos: (page: number = 1, per_page: number = 20) => {
    return axios
      .get<PexelsResponse>(
        `${BASE_URL}/v1/curated?page=${page}&per_page=${per_page}`,
        {
          headers: { Authorization: AUTH },
        }
      )
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error;
      });
  },
  getPhoto: (id: number = 1) => {
    return axios
      .get<PexelsPhoto>(`${BASE_URL}/v1/photos/${id}`, {
        headers: { Authorization: AUTH },
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error;
      });
  },
};
