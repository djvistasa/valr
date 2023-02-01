import axios from 'axios';
import { IApiCall, IApiResponse } from '../interfaces';

const getRandomNumber = () => {
  return Math.floor(Math.random() * Math.floor(10));
};

const generateUniqueId = () => {
  const firstRandomNumber = Math.floor(Math.random() * (90 - 65 + 1)) + 65;
  const secondRandomNumber = Math.floor(Math.random() * (122 - 97 + 1)) + 97;
  const firstLetter = String.fromCharCode(firstRandomNumber).toUpperCase();
  const secondLetter = String.fromCharCode(secondRandomNumber).toUpperCase();

  return `${firstLetter}${secondLetter}${getRandomNumber()}${getRandomNumber()}${getRandomNumber()}${getRandomNumber()}`;
};

export const handleApiError = (error: Error): IApiResponse => ({
  ok: false,
  result: null,
  error,
});

const handleApiSuccess = (result: object): IApiResponse => ({
  ok: true,
  result,
  error: undefined,
});

const calculateRem = (size: number): string => `${(size / 16) * 1}rem`;

const makeApiCall = async (params: IApiCall): Promise<IApiResponse> => {
  try {
    const { data: response } = await axios({
      ...params,
      headers: {
        accepts: 'application/json',
      },
    });

    if (params.callBack) {
      params.callBack.apply(response);
    }

    return handleApiSuccess(response);
  } catch (error: any) {
    return handleApiError(error);
  }
};

const hexToRGB = (hex: string, alpha: string): string => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  return `rgb(${r}, ${g}, ${b})`;
};

const truncate = (input: string, limit: number) =>
  input.length > limit ? `${input.substr(0, limit)}...` : input;

export { calculateRem, makeApiCall, generateUniqueId, hexToRGB, truncate };
