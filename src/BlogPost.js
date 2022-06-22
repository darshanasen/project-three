// import the useParams Hook
import { useParams } from 'react-router-dom';

const BlogPost = () => {

    // save whatever the useParams hook returns to you within a variable
    const urlData = useParams();
    console.log(urlData);

    return (

        // extract the info from the returned params object and render it to the page
        <h3>Blog post #{ urlData.postNumber }</h3>
    )
}

export default BlogPost;