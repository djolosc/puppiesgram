import React, { FC, useState } from 'react';
import Modal from 'react-modal';

import { IPost } from '../../../util/types';

interface FormModalProps {
  post: IPost;
  isOpen: boolean;
  setPost: React.Dispatch<React.SetStateAction<IPost>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const FormModal: FC<FormModalProps> = ({
  isOpen,
  post,
  setIsOpen,
  setPost,
}) => {
  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPost({ ...post, text: e.target.value });
  };

  const onCloseButtonClick = () => {
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      ariaHideApp={false}
      className="form_modal__wrapper"
      overlayClassName="modal__overlay"
    >
      <textarea
        value={post.text}
        onChange={handleInput}
        className="modal_input"
        rows={5}
      />
      <button onClick={onCloseButtonClick} className="modal_button">
        Save
      </button>
    </Modal>
  );
};

export default FormModal;
