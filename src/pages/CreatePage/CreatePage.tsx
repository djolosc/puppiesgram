import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { PostInput } from '../../components';
import { addPost } from '../../store/actions';

import { IPost, IOwner } from '../../util/types';

import backButtonImg from '../../assets/images/back_button.png';

const CreatePage = () => {
  const [newPost, setNewPost] = useState({} as IPost);
  const [owner, setOwner] = useState({} as IOwner);

  const dispatch = useDispatch();
  const history = useHistory();
  const onArrowButtonClick = () => {
    history.goBack();
  };

  const handleInputChange = (
    fieldName: keyof IPost,
    element: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewPost({
      ...newPost,
      [fieldName]: element.target.value,
    });
  };

  const handleOwnerChange = (
    fieldName: keyof IOwner,
    element: React.ChangeEvent<HTMLInputElement>
  ) => {
    setOwner({
      ...owner,
      [fieldName]: element.target.value,
    });
  };

  const formatData = (data: IPost) => {
    data.id = Math.random().toString();
    data.image = newPost.image || '';
    data.likes = 0;
    data.publishDate = new Date().toString();
    data.text = newPost.text || '';
    data.tags = [''];
    data.owner.firstName = owner.firstName || '';
    data.owner.lastName = owner.lastName || '';
    data.owner.picture = '';
    data.owner.title = '';
    data.owner.id = Math.random().toString();

    return data;
  };

  const onSubmitClick = () => {
    const data = { ...newPost };
    data.owner = owner;
    const formatedData = formatData(data);
    console.log(formatedData);
    dispatch(addPost(formatedData));
    history.goBack();
  };

  return (
    <div className="create_page__wrapper">
      <div className="header__wrapper">
        <button onClick={onArrowButtonClick}>
          <img src={backButtonImg} alt="back_button_img" />
        </button>
        <p className="header__text">Create New Post</p>
      </div>
      <div className="inputs__wrapper">
        <PostInput
          label="First Name"
          value={owner.firstName}
          onChange={(e) => handleOwnerChange('firstName', e)}
        />
        <PostInput
          label="Last Name"
          value={owner.lastName}
          onChange={(e) => handleOwnerChange('lastName', e)}
        />
        <PostInput
          label="Text"
          value={newPost.text}
          onChange={(e) => handleInputChange('text', e)}
        />
        <PostInput
          label="Image URL"
          value={newPost.image}
          onChange={(e) => handleInputChange('image', e)}
        />
        <button className="save__button" onClick={onSubmitClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default CreatePage;
