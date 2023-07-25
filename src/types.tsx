export interface UserProps {
    user_name: string | null;
    full_name: string | null;
    balance: number | null;
}

export interface ProductProps {
    id: string;
    name: string;
    quantity: number;
    price: number;
}
