import React from 'react'

function Search({search, setSearch}){
    return (
        <div className="flex justify-center">
            <div className="mb-3 xl:w-96">
                <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
                    <input value={search} onChange={(e) => setSearch(e.target.value)} type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#FF725E] focus:outline-none" placeholder="Search" />
                </div>
            </div>
        </div>
    )
}
export default Search;