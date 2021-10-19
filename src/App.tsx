import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import { getPosts } from './store/actions';
import { RootState } from './store/reducers';
import './scss/main.scss';

function App() {
  const dispatch = useDispatch();
  const posts = useSelector((state: RootState) => state.posts);

  const [pageIndex, setPageIndex] = useState(0);

  const handleScroll = (event: React.UIEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;

    const bottom =
      target.scrollHeight - target.scrollTop === target.clientHeight;

    if (bottom) {
      setPageIndex(pageIndex + 1);
    }
  };

  useEffect(() => {
    dispatch(getPosts(pageIndex));
    console.log(pageIndex);
  }, [pageIndex]);

  return (
    <div className="App">
      <div className="inner" onScroll={handleScroll}>
        {posts.length && posts.map((post) => <p>{post.owner.firstName}</p>)}
      </div>
    </div>
  );
}

export default App;
