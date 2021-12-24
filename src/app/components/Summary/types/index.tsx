export interface OrderDetail{
    id: string,
    prescription_image: string,
    status: string,
    patient: {
      id: number,
      full_name: string,
      phone_number: string
    },
    address: {
      id: string,
      postal_code: string,
      latitude: number,
      longitude: number,
      first_line: string,
      second_line: string,
      note: string,
      province: string,
      district: string,
      sub_district: string
    }
}