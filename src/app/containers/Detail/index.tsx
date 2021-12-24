import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import Summary from "../../components/Summary"
import { getDetailFetch, Payload } from "../../slice/Detail"
import { RootState } from "../../store"
import { Wrapper } from "./styles"

type TypeParams = {id: string}

function Detail() {
  const params = useParams<TypeParams>() as TypeParams
  const dispatch = useDispatch()
    const {data, isLoading} = useSelector<RootState, Payload>(state => state.Detail)
    useEffect(() => {
        dispatch(getDetailFetch(params.id))    
    }, [])
    return (
        <Wrapper>
          {
            isLoading
              ?
              <div>Loading...</div>
              :
              <Summary data={data} />
          }
        </Wrapper>
    )
}

export default Detail
