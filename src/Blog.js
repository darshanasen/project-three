import { Outlet } from 'react-router-dom';

const Blog = () => {
    return (
        <>
            <h1>Blog</h1>

            <Outlet />
        </>
    )
}

export default Blog;