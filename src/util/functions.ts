import { IPost } from './types';
import moment from 'moment';

export const formatPostContent = (post: IPost) => {
  const content = {
    fullName: '',
    descriptionPharagraph: '',
    formatedDate: '',
    likesText: '',
  };

  if (post.owner) {
    content.fullName =
      `${post.owner.title} ${post.owner.firstName} ${post.owner.lastName}` ||
      '';
    const tags = post.tags.map((tag) => `#${tag}`).join(' ') || '';
    content.descriptionPharagraph = `${post.text} ${tags}` || '';
    content.formatedDate =
      `Published on ${moment(post.publishDate).format('MMM Do YYYY')}` || '';

    const generateLikesText = () => {
      if (!post.likes) return 'Liked by no one, yet';

      return `Liked by ${post.likes} ${post.likes === 1 ? 'person' : 'people'}`;
    };
    content.likesText = generateLikesText();
  }

  return content;
};
