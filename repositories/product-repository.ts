import { AxiosClient } from "../helpers/clients";

export type Product = {
    _id: string,
    title: string,
    desc: string,
    img: string,
    prices: [],
    extraOptions: [][],
    createdAt: string,
    updatedAt: string,
};

export default class ProductRepository {
  client: AxiosClient;
  constructor(client: AxiosClient) {
    this.client = client;
  }

  async getProducts(): Promise<{
    data: Product[];
  }> {
    return this.client.get(`api/products`);
  }

}
