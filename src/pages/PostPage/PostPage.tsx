import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface PropsInterface extends RouteComponentProps<{ id: string }> {
  others: any;
}

const PostPage: FunctionComponent<PropsInterface> = (props: PropsInterface) => {
  return <div className="post_page__wrapper"></div>;
};

export default PostPage;
