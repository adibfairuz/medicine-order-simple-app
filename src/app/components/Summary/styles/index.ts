import styled from "styled-components";
import { COLOR_DARK_GREY, COLOR_GREY } from "../../../styles/colors";

export const Wrapper = styled.div`
    
`

export const StatusWrapper = styled.div`
    border-bottom: 1px solid ${COLOR_GREY};
    border-top: 1px solid ${COLOR_GREY};
    padding-bottom: 14px;
    padding-top: 18px;
    margin-bottom: 12px;
`

export const Status = styled.div`
    font-weight: 600;
    color: orange;
    margin-bottom: 8px;
`

export const StatusDetail = styled.div`
    color: ${COLOR_DARK_GREY};
`

export const FieldWrapper = styled.div`
    border-bottom: 1px solid ${COLOR_GREY};
    padding: 14px 0px;
    margin-bottom: 12px;
`
export const OrderDetailWrapper = styled.div`

`

export const Label = styled.div`
    margin-bottom: 8px;
    font-weight: 600;
`

export const Value = styled.div`
    color: ${COLOR_DARK_GREY};
`

export const PrescriptionWrapper = styled.div`

`

export const Image = styled.img`
    width: 90px;
    cursor: pointer;
`