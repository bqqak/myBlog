import './App.css'
import { Link } from 'react-router-dom';
import Archive from "./components/Archive/Archive.jsx";
import posts from "./data/posts.js"
import top from "./data/top.js"
import discussions from "./data/discussions.js";
import {useState} from "react";
import FirstTop from "./components/Top/FirstTop.jsx";
import FirstDiscussions from "./components/discussions/FirstDiscussions.jsx";

function App() {
    const [currentFilter, setCurrentFilter] = useState('latest');
    const selectedButton = (name) => {
        if(name === currentFilter) return 'bg-gray-200 text-gray-800 p-1 rounded-md'
        else return 'bg-white text-gray-400 hover:bg-gray-200 p-1 rounded-md'
    }
  return (
    <div>
        <div className={'flex gap-2 justify-center items-center w-full border-b h-12 flex-shrink-0'}>
            <button className={`${selectedButton('latest')} mr-5 text-lg`} onClick={() => setCurrentFilter('latest')}>Latest</button>
            <button className={`${selectedButton('top')} mr-5 text-lg`} onClick={() => setCurrentFilter('top')}>Top</button>
            <button className={`${selectedButton('discussions')} mr-5 text-lg`} onClick={() => setCurrentFilter('discussions')}>Discussions</button>
        </div>
        <div className={'flex flex-col justify-center items-center gap-5'}>
            {currentFilter === 'latest' &&
            posts.map(post => (
                <Link to={`/posts/${post.id}`} key={post.id}>
                    <Archive post={post} />
                </Link>
            ))
            }
            {currentFilter === 'top' &&
                top.map(post => (
                    <Link to={`/top/${post.id}`} key={post.id}>
                        <FirstTop post={post} />
                    </Link>
                ))
            }
            {currentFilter === 'discussions' &&
            discussions.map(post => (
                <Link to={`/discussions/${post.id}`} key={post.id}>
                    <FirstDiscussions post={post} />
                </Link>
            ))}
        </div>


    </div>
  )
}

export default App
