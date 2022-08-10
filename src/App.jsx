import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import styles from './App.module.css'

import './global.css'

const posts = [
  {
    id: 1,
    author:{
      avatarUrl: "https://avatars.githubusercontent.com/u/98197660?v=4",
      name: "Natália Campos",
      role: "Web Developer"
    },
    content: [
      {type: 'paragraph', content: 'Oi Amor!'},
      {type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi autem rem libero tempore. Aliquid autem laudantium excepturi asperiores iure nesciunt fugiat quidem! Repellendus repellat eaque molestias inventore veritatis maxime provident.'},
      {type: 'link', content: 'https://github.com/NataliaNCCS'}
    ],
    publishedAt: new Date('2022-06-10 14:35:00')
  },

  {
    id: 2,
    author:{
      avatarUrl: "https://static.imasters.com.br/wp-content/uploads/2019/02/20112325/person05-300x300.jpg",
      name: "Fulano de Tal",
      role: "Cientista de Dados"
    },
    content: [
      {type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi autem rem libero tempore. Aliquid autem laudantium excepturi asperiores iure nesciunt fugiat quidem! Repellendus repellat eaque molestias inventore veritatis maxime provident.'},
    ],
    publishedAt: new Date('2022-06-09 12:29:00')
  }
]


export function App() {
  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
            return (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />)
          })}
        </main>
      </div>
    </>
  )
}
