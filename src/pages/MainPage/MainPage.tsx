import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { getPosts } from '../../store/actions';
import { RootState } from '../../store/reducers';

import { Post, MainPageHeader } from '../../components';

const MainPage = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state: RootState) => state.posts);
  const history = useHistory();

  const [pageIndex, setPageIndex] = useState(0);

  const handleScroll = (event: React.UIEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;

    const bottom =
      target.scrollHeight - target.scrollTop === target.clientHeight;

    if (bottom) {
      setPageIndex(pageIndex + 1);
    }
  };

  const onButtonClick = () => {
    history.push(`/create`);
  };

  useEffect(() => {
    dispatch(getPosts(pageIndex));
  }, [pageIndex]);

  return (
    <div className="main_page__wrapper" onScroll={handleScroll}>
      <MainPageHeader onButtonClick={onButtonClick} />
      <div className="posts_wrapper">
        {posts.length
          ? posts.map((post, index) => <Post key={index} post={post} />)
          : null}
      </div>
    </div>
  );
};

export default MainPage;
