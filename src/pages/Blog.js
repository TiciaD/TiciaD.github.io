import React from 'react';
import axios from 'axios';

function Blog() {
    // useEffect(() => {
    //  async function getBlog() {
    //     try {await axios.get(`blog.json`)
    //         .then(function (res) {
    //             // handle success;
    //             console.log(res.data)
    //             // if request successful, create new class with data from API assigned to Weather objects
    //             let blogPosts = res.data
    //         })
    //         console.log(response.data);
    //     } catch (error) {
    //     console.error(error);
    //     }
    // }

    //     getBlog();
    //     console.log(blogPosts);
    // }, []);

    // axios.get(`blog.json`)
    //     .then(function (res) {
    //         // handle success;
    //         console.log(res)
    //         // if request successful, create new class with data from API assigned to Weather objects

    //     })
    //     .catch(function (error) {
    //         // handle error
    //         alert('Error occurred, refresh!');
    //         console.log(error);
    //     })

    return (
        <div>
            This is my Blog
        </div>
    )
}

export default Blog
