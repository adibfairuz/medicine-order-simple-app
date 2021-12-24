export interface OrderList{
    id: number,
    status: string,
    full_name: string,
    total_price: number | null,
    currency: string | null,
    updated_at: string
}