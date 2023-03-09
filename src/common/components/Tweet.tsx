export default function NewTweetForm(tweet: any) {

    return (
        <a href="#"
           className="block border-b border-gray-200 dark:border-gray-600 w-full px-4 py-3 transition hover:bg-gray-100 dark:hover:bg-white/5">
            <div className="flex space-x-2 py-2">
                <div className="w-14 shrink-0">
                    <img className="w-12 h-12 rounded-full" src="{tweet?.author?.picture}"></img>
                </div>
                <div className="flex-grow">
                    <p className="text-gray-600 dark:text-gray-400 font-normal text-sm"><span
                        className="font-bold text-black dark:text-white text-base">{tweet?.author?.name}</span> {tweet?.author?.id} &middot; {tweet?.date}
                    </p>
                    <p className="text-[15px] dark:text-white">{tweet?.message}</p>
                </div>
                <div className="shrink-0">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                        <g>
                            <circle cx="5" cy="12" r="2"></circle>
                            <circle cx="12" cy="12" r="2"></circle>
                            <circle cx="19" cy="12" r="2"></circle>
                        </g>
                    </svg>
                </div>
            </div>
        </a>
    );

}
