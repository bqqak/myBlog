import { useParams, Link } from 'react-router-dom';
import data from '../../data/fullPosts.js'
function FullPost(){
    const id = Number(useParams().id);
    const information = data.find(e => e.id === id);

    if (!information) {
        return (
            <div className={'flex flex-col items-center justify-center mt-10 gap-4'}>
                <p className={'text-lg font-medium'}>Post not found</p>
                <Link className={'text-blue-600 underline'} to={'/'}>Back to Archive</Link>
            </div>
        );
    }

    return (
        <div className={'flex flex-col justify-center items-center gap-10'}>
            <div className={'flex flex-col justify-center  mt-5 gap-2'}>
                <p className={'text-4xl '}>{information.title}</p>
                <p className={'text-xl text-gray-400'}>{information.description}</p>
                <div className={'text-sm text-gray-500'}>
                    <span>{information.time}</span>
                    <span> • </span>
                    <span>{information.name}</span>
                </div>
                <div className={'h-0.5 bg-gray-200'}></div>
            </div>

            <p className={'max-w-2xl w-full px-4 sm:px-6 text-base sm:text-lg leading-relaxed text-gray-800 whitespace-pre-line'}>{information.text}</p>

        </div>
    )
}
export default FullPost;