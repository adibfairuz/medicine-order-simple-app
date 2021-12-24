import { Wrapper } from './styles'
import { PageProps } from './types'

function Page(props: PageProps) {
    return (
        <Wrapper>
            {props.children}
        </Wrapper>
    )
}

export default Page
