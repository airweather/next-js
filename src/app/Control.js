"use client"
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

export const Control = () => {
  const params = useParams();
  const router = useRouter();
  const id = params.id;

  return (
    <ul>
      <li><Link href="/create">create</Link></li>
      {
        id ? <>
              <li><Link href={"/update/"+id}>update</Link></li>
              <li><input type="button" value="delete" onClick={()=>{
                fetch(`http://localhost:9900/topics/${id}`,{
                  method: 'DELETE'
                })
                .then(response => response.json())
                .then(data => {
                  router.push('/');
                  router.refresh();
                })
              }}/></li>
            </>
            :null
      }
    </ul>
  );
};
