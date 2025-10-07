function FirstDiscussions({ post }) {
    return (
        <div className={'flex flex-col justify-center items-center mt-10'}>
            <p className={'text-xl font-semibold text-center px-4'}>{post.title}</p>
            <p className={'text-gray-600 text-center max-w-2xl px-4'}>{post.description}</p>
            <div className={'text-sm text-gray-500'}>
                <span>{post.date}</span>
                <span> • </span>
                <span>{post.name}</span>
            </div>
            <div className={'h-0.5 bg-gray-200 w-full max-w-2xl mt-5'}></div>
        </div>
    )
}
export default FirstDiscussions;