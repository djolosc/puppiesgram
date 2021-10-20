import React, { FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';

import { formatPostContent } from '../../util/functions';

import { IPost } from '../../util/types';

interface PostProps {
  post: IPost;
}

const Post: FunctionComponent<PostProps> = ({ post }) => {
  const history = useHistory();
  const onClick = () => {
    history.push(`/${post.id}`);
  };

  const { fullName, descriptionPharagraph, formatedDate, likesText } =
    formatPostContent(post);

  return (
    <button className="post__wrapper" onClick={onClick}>
      <img src={post.image} alt="post_image" className="post_img_preview" />
      <div className="info__wrapper">
        <p className="likes__text">{likesText}</p>
        <div>
          <p className="fullName__text">{fullName}</p>
          <p className="description_short__text">{descriptionPharagraph}</p>
        </div>

        <p className="date__text">published on {formatedDate}</p>
      </div>
    </button>
  );
};

export default Post;
