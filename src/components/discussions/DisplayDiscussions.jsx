import { useParams, Link } from 'react-router-dom';
import data from '../../data/discussions.js'
function DisplayDiscussions(){
    const id = Number(useParams().id);
    const information = data.find(e => e.id === id);

    if (!information) {
        return (
            <div className={'flex flex-col items-center justify-center mt-10 gap-4'}>
                <p className={'text-lg font-medium'}>Post not found</p>
            </div>
        );
    }

    return (
        <div className={'flex flex-col justify-center items-center gap-10'}>
            <div className={'flex flex-col justify-center items-center gap-2 w-full'}>
                <p className={'text-2xl text-center px-4'}>{information.title}</p>
                <p className={'text-base text-gray-400 text-center max-w-2xl px-4'}>{information.description}</p>
                <div className={'text-sm text-gray-500'}>
                    <span>{information.date}</span>
                    <span> • </span>
                    <span>{information.name}</span>
                </div>
                <div className={'h-0.5 bg-gray-200 w-full max-w-2xl'}></div>
            </div>

            <p className={'max-w-2xl w-full px-4 sm:px-6 text-base sm:text-lg leading-relaxed text-gray-800 whitespace-pre-line'}>{information.text}</p>

        </div>
    )
}
export default DisplayDiscussions;