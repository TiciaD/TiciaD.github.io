import React, {useEffect, useState} from 'react';
import Pagination from '../components/Pagination';
import BlogPost from '../components/BlogPost';
import axios from 'axios';


function Blog(props) {
    console.log({posts: props.posts});

    return (
        <div>
            {/* {posts.map((item) => (
                <BlogPost 
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    post={item.description}
                    />
            ))
            } */}
            blogs
        </div>
    )
}

export default Blog
