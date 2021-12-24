import styled from "styled-components"
import { COLOR_DARK_GREY, COLOR_GREY } from "../../../styles/colors"

export const Wrapper = styled.div`
    border-radius: 8px;
    box-shadow: 0 2px 10px -2px rgb(0 0 0 / 20%);
    margin-bottom: 28px;
    padding: 12px;
`

export const Between = styled.div`
    display: flex;
    justify-content: space-between;
`

export const OrderStatus = styled.div<{ status: string }>`
    font-weight: 700;
    color: ${props  => {
        if (props.status === "Active") {
            return 'green'
        }else if(props.status === "In Review"){
            return 'orange'
        }else if(props.status === "Prescription Rejected"){
            return 'red'
        }
    }};
`

export const OrderName = styled.div`
    margin-top: 8px;
    
`

export const OrderDate = styled.div`
    font-size: 0.95em;
    color: ${COLOR_DARK_GREY};
    margin-top: 8px;
    
`

export const OrderNumberWrapper = styled.div`
    font-size: 0.95em;
    color: ${COLOR_DARK_GREY};
`

export const OrderNumberLabel = styled.div`
    margin-top: 8px;
    
`

export const OrderNumber = styled.div`
    margin-top: 8px;
    
`

export const OrderPrice = styled.div`
    margin-top: 8px;
    align-self: flex-end;
    
`