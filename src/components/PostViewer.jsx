import React, { useEffect, useState } from 'react';

const PostViewer = () => {
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState('');

    // Fetching posts from API
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => setPosts(data));  // Store the full data array in state
    }, []);

    // Filtering posts by title or id
    const filteredPosts = posts.filter((post) => 
        post.title.toLowerCase().includes(search.toLowerCase()) || 
        post.id.toString() === search
    );

    return (
        <div className='flex flex-col justify-center items-center  bg-gray-100'>
            <h1 className='text-4xl font-bold mb-6'>Post Viewer</h1>
            
            <input
                className='px-4 py-2 mb-5 border border-gray-300 rounded-lg w-1/3'
                type="text"
                placeholder="Search by ID or title..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            
      <ul className='bg-white p-5 rounded-lg shadow-lg w-1/2'>
            {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                   <li key={post.id} className='p-3 border-b last:border-none'>
                     <h2 className='font-semibold'>{post.title}</h2>
                        <p className='text-gray-600'>{post.body}</p>
                        </li>
                    ))
                ) : (
                    <li className='text-center text-gray-500'>No posts found</li>
                )}
            </ul>
        </div>
    );
};

export default PostViewer;
