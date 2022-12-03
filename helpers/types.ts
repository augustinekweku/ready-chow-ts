import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
  isAuth?: boolean;
};
export type ID = string;


export type CartArrayType = {
  id: ID;
  updatedAt: string;
  title: string;
  quantity: number;
  prices: [];
  price: number,
  img: string;
  extras: {text:string}[];
  extraOptions:  {
    name: string;
  }[];
  time: string;
}

