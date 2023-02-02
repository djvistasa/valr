import React from 'react';
import { ReactComponent as Bitcoin } from '../assets/svgs/bitcoin.svg';
import { ReactComponent as BitcoinCash } from '../assets/svgs/bitcoin-cash.svg';
import { ReactComponent as Ethereum } from '../assets/svgs/ethereum.svg';
import axios from 'axios';
import { Assets } from '../enums';
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

export const iconDictionary = () => {
  return {
    [Assets.Bitcoin]: Bitcoin,
    [Assets.Ethereum]: Ethereum,
    [Assets.BitcoinCash]: BitcoinCash,
  };
};

const formatter = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'BTC',
  minimumFractionDigits: 0,

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

export {
  calculateRem,
  makeApiCall,
  generateUniqueId,
  hexToRGB,
  truncate,
  formatter,
};
