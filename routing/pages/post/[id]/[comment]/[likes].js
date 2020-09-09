import {useRouter} from 'next/router'
import Header from '../../../../components/header'
import Link from 'next/link'
const Likes = ()=>{
    const router = useRouter()
    const {id,comment,likes} = router.query
    const commenters = [
        "aung","min","hla","sein","kyaw","thu","aye","su","htet","htun","swe","zin","myat","thein","si","pyae","phoo"
    ]
    return (
        <>
            <Header />
      <h1>Post: {id}</h1>
      <h1>Comment: {comment}</h1>
      <h1>Likes : {likes}</h1>
      <h2><Link href="/post/[id]/[comment]" as={`/post/${id}/${comment}`}><a>Back to Home</a></Link></h2>
      <ul>
          {commenters.slice(0,likes).map(commenter=>(
              <li key={commenter}>{commenter}</li>
          ))
          }
      </ul>
        </>
    )
} 
export default Likes