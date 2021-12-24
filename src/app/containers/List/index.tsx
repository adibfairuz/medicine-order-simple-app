import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../../components/Card'
import { OrderList } from '../../components/Card/types'
import Link from '../../components/Link'
import { getListFetch, Payload } from '../../slice/List'
import { RootState } from '../../store'
import { Wrapper } from './styles'

function List() {
    const dispatch = useDispatch()
    const {data, isLoading} = useSelector<RootState, Payload>(state => state.List)
    useEffect(() => {
        dispatch(getListFetch())    
    }, [])

    return (
        <Wrapper>
            {
                isLoading
                    ?
                    <div>Loading...</div>
                    :
                    data.map(item => {
                        return(
                            <Link key={item.id} to={`/${item.id}`} >
                                <Card data={item} />
                            </Link>
                        )
                    })
            }
        </Wrapper>
    )
}

export default List
