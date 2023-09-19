"use client"

import { useRouter } from "next/navigation";

export default function Create () {
  const router = useRouter();

  return (
    <form onSubmit={(e)=>{
      e.preventDefault();
      const title = e.target.title.value;
      const body = e.target.body.value;
      const option = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({title, body})
      }
      fetch('http://localhost:9900/topics', option).then(res => res.json()).then(data => {
        console.log(data)
        const lastId = data.id;
        router.push(`/read/${lastId}`)
      });
    }}>
    <p>
      <input type="text" name="title" placeholder="title" />
    </p>
    <p>
      <textarea name="body" placeholder="body"></textarea>
    </p>
    <p>
      <input type="submit" value="create" />
    </p>
  </form>
  )
}
