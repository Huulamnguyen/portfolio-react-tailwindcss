import React from 'react';

function ArticleItem({article}){
    return (
        <div className="font-primary mb-6 lg:mb-0">
            <div>
                <div className="relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg mb-6" data-mdb-ripple="true" data-mdb-ripple-color="light">
                    <img src={article.img} className="w-full h-80 object-cover object-center" alt={article.title}/>
                    <a href={article.link}>
                        <div className="bg-gray-800 absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-50 transition duration-300 ease-in-out"></div>
                    </a>
                </div>
                <div className="flex space-x-2 justify-center">
                    {article.tags.map(tag => <span class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-[#FF725E] text-white rounded">{tag}</span>)}
                </div>
                <h5 className="text-lg font-bold mb-3">{article.title}</h5>
                <p className="text-gray-500 mb-6">
                    <small>Published <u>{article.date}</u> by <a href="" className="text-gray-900">LiamDev</a></small>
                </p>
                <p className="text-gray-500">{article.description}</p>
            </div>
        </div>
    )
}
export default ArticleItem;