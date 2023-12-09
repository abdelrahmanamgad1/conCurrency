export interface Currency {
  statusCode: number;
  data: Country[];
}

export interface Country {
  code: string;
  url: string;
  name: string;
  selected?: boolean;
  rate?: number;

}
export interface CountryFav extends Country{
  checked:boolean;
}

export interface ConvCurrency {
  base: string;
  target: string;
  amount: number;
}
