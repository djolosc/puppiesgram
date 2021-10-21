import React, { FC } from 'react';

interface PostInputProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  label: string;
}

const PostInput: FC<PostInputProps> = ({ value, onChange, label }) => {
  return (
    <div className="input__wrapper">
      <p>{label}</p>
      <input value={value} onChange={onChange} />
    </div>
  );
};

export default PostInput;
