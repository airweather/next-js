// "use client"
// react hooks는 client component 에서만 사용 가능
import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({ children }) {
  
  // revalidate
  
  const resp = await fetch('http://localhost:9900/topics', { next: { revalidate: 0 } });
  const topics = await resp.json();

  return (
    <html>
      <body>
        <h1><Link href="/">WEB</Link></h1>
        <img src="/vercel.svg" alt="Vercel Logo" className="logo" style={{width:"100px", height:"100px"}}/>
        <ol>
          {topics.map((topic) => (
            <li key={topic.id}><Link href={`/read/${topic.id}`}>{topic.title}</Link></li>
          ))}
        </ol>
          {children}
          <ul>
            <li><Link href="/create">create</Link></li>
            <li><Link href="/update">update</Link></li>
            <li><input type="button" value="delete"/></li>
          </ul>
      </body>
    </html>
  )
}
