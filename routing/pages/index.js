import Link from 'next/link'
class Index extends React.Component{
    render (){
        return (
            <Link href="post/[id]/[comment]" as={`post/${100}/${"hello"}`}><a>Go to see post home page</a></Link>
        )
    }
}
export default Index