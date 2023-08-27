// export interface Currency {
//   statusCode: number;
//   data: Data[];
// }

// export interface Data {
//   code: string;
//   name: string;
//   url: string;
// }

// export dropDown{

// }

export interface Currency {
  number: number;
  data: Data[];
}

export interface Data {
  code: string;
  url: string;
  name: string;
}

export interface ConvCurrency{
  base: string;
  target: string;
  amount: number;
}
