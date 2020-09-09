  
import { useRouter } from 'next/router'
import Header from '../../../../components/header'
import Link from 'next/link'

const Comment = () => {
  const router = useRouter()
  const { id, comment } = router.query
  const likes = Math.floor(Math.random()*10+1)

  return (
    <>
      <Header />
      <h1>Post: {id}</h1>
      <h1>Comment: {comment}<Link href="/post/[id]/[comment]/[likes]" as={`/post/${id}/${comment}/${likes}`}><a>See Likes</a></Link></h1>
    </>
  )
}

export default Comment