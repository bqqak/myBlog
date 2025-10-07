import {useParams} from "react-router-dom";
import top from "../../data/top.js";

function DisplayTops() {
    const id = Number(useParams().id);
    const information = top.find(e => e.id === id);
    if(!information) return <div className={'text-xl'}>Post not found</div>
    return (
        <div className={'flex flex-col justify-center items-center gap-10'}>
            <div className={'flex flex-col justify-center items-center gap-2 w-full'}>
                <p className={'text-2xl text-center px-4'}>{information.title}</p>
                <p className={'text-base text-gray-400 text-center max-w-2xl px-4'}>{information.description}</p>
                <div className={'text-sm text-gray-500'}>
                    <span>{information.time}</span>
                    <span> • </span>
                    <span>{information.name}</span>
                </div>
                <div className={'h-0.5 bg-gray-200 w-full max-w-2xl'}></div>
            </div>

            <p className={'max-w-2xl w-full px-4 sm:px-6 text-base sm:text-lg leading-relaxed text-gray-800 whitespace-pre-line'}>{information.text}</p>

        </div>
    )
}
export default DisplayTops