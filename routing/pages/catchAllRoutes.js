import Link from 'next/link'
import Header from '../components/header'
export default class CatchAllRoutes extends React.Component{
    
    render (){
        const myInfo = ["ANLO","finalyear","TNT-722","SE"]
        return (
            <>
            <Header/>
            <Link href="/post/catch/[...params]" as="/post/catch/aikenyanlynnoo/finalyear/TNT-722/SE"><a>Aike Nyan Lynn Oo</a></Link>
            <Link href="/post/catch/[...params]" as={`/post/catch/${myInfo.join('/')}`}><a>ANLO</a></Link>
            
            {/* optional slug */}
            <Link href="/post/catch/[[...params]]" as={`/post/catch/${myInfo.join('/')}`}><a>ANLO</a></Link>
            </>
        )
    }
}