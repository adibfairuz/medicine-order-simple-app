import React from 'react'
import { FieldWrapper, Image, Label, OrderDetailWrapper, PrescriptionWrapper, Status, StatusDetail, StatusWrapper, Value, Wrapper } from './styles'
import { OrderDetail } from './types'

function Summary(props: {data: OrderDetail}) {
    const { id, status, address, patient, prescription_image } = props.data;
    return (
        <Wrapper>
            <StatusWrapper>
                <Status>
                    {status}
                </Status>
                <StatusDetail>
                    We are currently reviewing your prescription
                </StatusDetail>
            </StatusWrapper>
            <OrderDetailWrapper>
                <FieldWrapper>
                    <Label>Order Number</Label>
                    <Value>#{id}</Value>
                </FieldWrapper>
                <FieldWrapper>
                    <Label>Patient Name</Label>
                    <Value>{patient.full_name}</Value>
                </FieldWrapper>
                <FieldWrapper>
                    <Label>Phone Number</Label>
                    <Value>{patient.phone_number}</Value>
                </FieldWrapper>
                <FieldWrapper>
                    <Label>Patient Address</Label>
                    <Value>{address.first_line}, {address.sub_district}, {address.district}, {address.province}, {address.postal_code}</Value>
                </FieldWrapper>
            </OrderDetailWrapper>
            <FieldWrapper>
                <Label>
                    Prescription
                </Label>
                <Image src={prescription_image} onClick={() => window.location.href = prescription_image} />
            </FieldWrapper>
        </Wrapper>
    )
}

export default Summary
