import React, { useEffect, useState } from 'react';
import { RouteComponentProps, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getPost } from '../../apiService';
import { formatPostContent } from '../../util/functions';

import backButtonImg from '../../assets/images/back_button.png';

import { IPost } from '../../util/types';

const PostPage = ({ match }: RouteComponentProps<{ id: string }>) => {
  const [post, setPost] = useState({} as IPost);

  const history = useHistory();

  const postId = match.params.id;

  const onButtonClick = () => {
    history.goBack();
  };

  const { fullName, descriptionPharagraph, formatedDate, likesText } =
    formatPostContent(post);

  useEffect(() => {
    getPost(postId).then((response: any) => {
      setPost(response);
    });
  });

  return (
    <div className="post_page__wrapper">
      <div className="header">
        <button onClick={onButtonClick}>
          <img src={backButtonImg} alt="back_button_img" />
        </button>
      </div>
      <div className="content__wrapper">
        <div className="text__wrapper">
          <div className="profile__wrapper">
            {post.owner && (
              <img
                src={post.owner.picture}
                alt="profile_picture"
                className="profile_pic"
              />
            )}
            <p className="fullName__text">{fullName}</p>
          </div>
          <p className="description__text">{descriptionPharagraph}</p>
        </div>
        <div className="img__wrapper">
          {post.image ? (
            <img src={post.image} alt="profile_img" className="picture" />
          ) : null}
          <div className="img__footer">
            <p className="likes__text">{likesText}</p>
            <p className="date__text">Published on {formatedDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
