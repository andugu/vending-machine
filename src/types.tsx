export interface UserProps {
    id: string | null;
    user_name: string | null;
    balance: number | string | null;
}

export interface ProductProps {
    id: string;
    name: string;
    quantity: number;
    price: number;
}

export interface RechargeOptionsType {
  [key: string]: number;
}
