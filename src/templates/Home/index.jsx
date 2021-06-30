import React, { useCallback, useEffect, useState } from 'react';

import './styles.css';

import loadPosts from '../../utils/load-posts';
import Posts from '../../components/Posts';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';

export default function Home() {
  const [allPosts, setAllPosts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [searchValue, setSearchValue] = useState('');

  const postsPerPage = 10;

  const noMorePosts = page + postsPerPage >= allPosts.length;
  const filteredPosts = !!searchValue ? allPosts.filter(post => post.title.toLowerCase().includes(searchValue)) : posts;

  const handleLoadPosts = useCallback(async (page, postsPerPage) => {
    const postsAndPhotos = await loadPosts();
    setPosts(postsAndPhotos.slice(page, postsPerPage));
    setAllPosts(postsAndPhotos);
  }, [])

  useEffect(() => {
    handleLoadPosts(0, postsPerPage);
  }, [handleLoadPosts, postsPerPage]);

  const handleLoadMorePosts = () => {
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);  

    setPosts([...posts, ...nextPosts]);
    setPage(nextPage);
  }

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  }

  return (
    <section className="container">
        <TextInput onChange={handleChange} value={searchValue} />
        {filteredPosts.length > 0 ? <Posts posts={filteredPosts}/> : <p>{searchValue} não existe :(</p>}
        <div className="button-container">
          {!searchValue &&  <Button onClick={handleLoadMorePosts} text="Load More Posts" disabled={noMorePosts} />}
        </div>
    </section>
  );
}


