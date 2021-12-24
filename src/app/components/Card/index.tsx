import React from 'react'
import { Between, OrderDate , OrderName, OrderNumber, OrderNumberLabel, OrderNumberWrapper, OrderPrice, OrderStatus, Wrapper } from './styles'
import { OrderList } from './types'
import {rupiah} from '../../../utils/currency'

function Card(props: { data: OrderList }) {
    const { id, full_name, currency, updated_at, total_price, status } = props.data;
    return (
        <Wrapper>
            <OrderStatus status={status}>{status}</OrderStatus>
            <Between>
                <OrderName>{full_name}</OrderName>
                <OrderDate>{updated_at}</OrderDate>
            </Between>
            <Between>
                <OrderNumberWrapper>
                    <OrderNumberLabel>Order Number</OrderNumberLabel>
                    <OrderNumber>#{id}</OrderNumber>
                </OrderNumberWrapper>
                <OrderPrice>{rupiah(total_price?.toString() || null)}</OrderPrice>
            </Between>
        </Wrapper>
    )
}

export default Card
