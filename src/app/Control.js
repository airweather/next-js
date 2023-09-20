"use client"
import Link from 'next/link';
import { useParams } from 'next/navigation';

export const Control = () => {
  const params = useParams();
  const id = params.id;

  return (
    <ul>
      <li><Link href="/create">create</Link></li>
      {
        id ? <>
              <li><Link href={"/update/"+id}>update</Link></li>
              <li><input type="button" value="delete" /></li>
            </>
            :null
      }
    </ul>
  );
};
