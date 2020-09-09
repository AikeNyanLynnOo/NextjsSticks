import {useRouter} from 'next/router'
import Header from '../../../components/header'

const CatchAll = () => {
    const router = useRouter()
    const params = router.query.params || []
    return (
        <>
        <Header/>
        <h1>Params: {params.join('/')}</h1>
        </>
    )
}

export default CatchAll