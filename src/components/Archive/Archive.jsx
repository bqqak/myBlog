function Archive({post}) {
    console.log(post)
    return (
        <div className={'flex flex-col justify-center items-center mt-10'}>

            <p className={'text-xl font-semibold'}>{post.title}</p>
            <p className={'text-gray-600'}>{post.description}</p>
            <div className={'text-sm text-gray-500'}>
                <span>{post.time}</span>
                <span> • </span>
                <span>{post.name}</span>
            </div>

            <div className={'h-0.5 bg-gray-200 w-full mt-5'}></div>

        </div>
    )
}

export default Archive