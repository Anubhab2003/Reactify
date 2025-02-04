import React, { useState, useEffect } from 'react';
import { Container, PostCard } from '../components';
import appwriteService from "../appwrite/config";

function AllPosts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await appwriteService.getPosts();
                if (response) {
                    const fetchedPosts = response.documents;
                    
                    // Fetch file previews for each post
                    const postsWithImages = await Promise.all(
                        fetchedPosts.map(async (post) => {
                            if (post.featuresImage) {
                                const imageUrl = appwriteService.getFilePreview(post.featuresImage).href;
                                return { ...post, imageUrl };
                            }
                            return post;
                        })
                    );

                    setPosts(postsWithImages);
                }
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        }

        fetchPosts();
    }, []);

    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} imageUrl={post.imageUrl} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default AllPosts;
