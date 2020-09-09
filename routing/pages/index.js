import Link from 'next/link'
import Header from '../components/ManualLinkWithinHeader'
class Index extends React.Component{
    render (){
        return (
            <>
            <Header/>
            <Link href="post/[id]/[comment]" as={`post/${100}/${"hello"}`}><a>Go to see post home page</a></Link>
            </>
        )
    }
}
export default Index