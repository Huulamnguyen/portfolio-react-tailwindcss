import React, {useState} from 'react';
import Articles from '../data/Articles';
import ArticleItem from './ArticleItem';
import Search from './Search';

function Blogs(){
    const [search, setSearch] = useState("")

    const displayedArticles = [...Articles].filter(article => article.title.toLowerCase().includes(search.toLowerCase()))

    return (
        <div className="container my-24 px-6 mx-auto">
            <Search search={search} setSearch={setSearch}/>
            <section className="mb-32 text-gray-800 text-center">
                <h2 className="text-3xl font-bold font-primary mb-12 text-center">Latest articles</h2>
                <div className="grid lg:grid-cols-3 gap-6 xl:gap-x-12">
                    {displayedArticles.map(article => <ArticleItem key={article.id} article={article} />)}
                </div>
            </section>
        </div>
    )
}
export default Blogs;