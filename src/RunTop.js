import { useState, useEffect } from 'react';



const titles = [
  'posts',
  'todos',
  'photos',
  'users'
]


function RunTop() {
  const [type, setType] = useState('posts')
  const [posts, setPosts] = useState([])
  const [turn, setTurn] = useState(true)

  
  useEffect( () => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then( response => response.json())
      .then( users => setPosts(users) )
  }
  , [type])

  



  return (
    <div style={{ margin: 50, fontSize: 40}}>
      <button onClick={ () => setTurn(!turn) }>
        toggle
      </button>
      { turn &&
        <div>
          {
            titles.map( title =>
              <button
                key={title}
                onClick={() => setType(title)}
                style={
                  (title === type) ?
                  {
                    backgroundColor: '#000',
                    color: '#fff',
                  } : {}
                }
              >
                {title}
              </button>
            )
          }
          <ul style={{ listStyleType: 'circle' }}>
            {
              posts.map( post =>
                <li key={post.id}
                  style={{ fontSize: 20  }}
                >
                  {post.title || post.name}
                </li>
              )
            }
          </ul>
        </div>
      }
    </div>

  )
}


export default RunTop;