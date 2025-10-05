import './App.css'
import { Link } from 'react-router-dom';
import Archive from "./components/Archive/Archive.jsx";
import posts from "./data/posts.js"

function App() {

  return (
    <div>

        <div className={'flex flex-col justify-center items-center gap-5'}>
            {posts.map(post => (
                <Link to={`/posts/${post.id}`} key={post.id}>
                    <Archive post={post} />
                </Link>
            ))}
        </div>

    </div>
  )
}

export default App
