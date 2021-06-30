import React, { Component } from 'react';

import './styles.css';

import loadPosts from '../../utils/load-posts';
import Posts from '../../components/Posts';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';


export default class Home extends Component {
    state = {
      posts: [],
      allPosts: [],
      page: 0,
      postsPerPage: 6,
      searchValue: ''
    };
    
    async componentDidMount() {
      await this.loadPosts();
    }

    loadPosts = async () => {
      const {page, postsPerPage} = this.state;
      const postsAndPhotos = await loadPosts();
      this.setState({
        posts: postsAndPhotos.slice(page, postsPerPage),
        allPosts: postsAndPhotos
      });
    }

    loadMorePosts = () => {
      const {
        page,
        postsPerPage,
        allPosts,
        posts
      } = this.state;

      const nextPage = page + postsPerPage;
      const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);  

      posts.push(...nextPosts);

      this.setState({
        posts,
        page: nextPage
      });
    }

    handleChange = (e) => {
      const { value } = e.target;

      this.setState({
        searchValue: value
      });
    }

  render() {
      const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
      const noMorePosts = page + postsPerPage >= allPosts.length;

      const filteredPosts = !!searchValue ? allPosts.filter(post => post.title.toLowerCase().includes(searchValue)) : posts;

      return (
            <section className="container">
                <TextInput onChange={this.handleChange} value={searchValue} />
                {filteredPosts.length > 0 ? <Posts posts={filteredPosts}/> : <p>{searchValue} não existe :(</p>}
                <div className="button-container">
                  {!searchValue &&  <Button onClick={this.loadMorePosts} text="Load More Posts" disabled={noMorePosts} />}
                </div>
            </section>
          );
    }
  }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


