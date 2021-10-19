import React, { FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';
import moment from 'moment';

import { IPost } from '../../util/types';

interface PostProps {
  post: IPost;
}

const Post: FunctionComponent<PostProps> = ({ post }) => {
  const history = useHistory();
  const onClick = () => {
    history.push(`/${post.id}`);
  };

  const fullName = `${post.owner.title} ${post.owner.firstName} ${post.owner.lastName}`;
  const tags = post.tags.map((tag) => `#${tag}`).join(' ');
  const descriptionPharagraph = `${post.text} ${tags}`;
  const formatedDate = moment(post.publishDate).format('MMM Do YYYY');

  const generateLikesText = (numberOfLikes: number) => {
    if (!numberOfLikes) return 'Liked by no one, yet';

    return `Liked by ${numberOfLikes} ${
      numberOfLikes === 1 ? 'person' : 'people'
    }`;
  };

  return (
    <button className="post__wrapper" onClick={onClick}>
      <img src={post.image} alt="post_image" className="post_img_preview" />
      <div className="info__wrapper">
        <p className="likes__text">{generateLikesText(post.likes)}</p>
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
