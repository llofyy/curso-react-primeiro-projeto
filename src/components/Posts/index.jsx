import PostCard from "../PostCard"

import './styles.css';

export default function Posts({posts = []}) {
    return (
        <div className="posts">
            {posts.map(post => {
            return (
                <PostCard 
                    title={post.title} 
                    body={post.body} 
                    cover={post.cover} 
                    key={post.id}
                />
                )
            })}
        </div>
    )
}