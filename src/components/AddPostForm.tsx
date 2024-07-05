import React, { useState } from 'react';
import { Post } from '../interfaces/Post';
import { Form, Input, DescartButton, TextArea, AddPostButton, PhotoInput, FormGroup, PhotoPreview, LinkButton } from './styles';
import { AiFillPicture, AiOutlineDelete } from "react-icons/ai";

interface AddPostFormProps {
  addPost: (post: Post) => void;
}

const AddPostForm: React.FC<AddPostFormProps> = ({ addPost }) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [photo, setPhoto] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string>('');

  // Verifica se todos os campos estão preenchidos
  const canPublish = name.trim() !== '' && message.trim() !== '' && photoPreview !== '';

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPhoto(file);
      setPhotoPreview(URL.createObjectURL(file));
    }
  };

  const handleDiscard = () => {
    setName('');
    setMessage('');
    setPhoto(null);
    setPhotoPreview('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newPost: Post = {
      id: Date.now(),
      name,
      message,
      photo: photoPreview,
    };
    addPost(newPost);
    setName('');
    setMessage('');
    setPhoto(null);
    setPhotoPreview('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        {photoPreview && (
          <DescartButton type="button" onClick={handleDiscard}><AiOutlineDelete size={25}/></DescartButton>
        )}
        <PhotoPreview>
          {photoPreview ? (
            <img src={photoPreview} alt="Preview" />
          ) : (
            <span><AiFillPicture size={60} /></span>
          )}
          <PhotoInput type="file" accept="image/*" onChange={handlePhotoChange} />
        </PhotoPreview>
      </FormGroup>
      <FormGroup>
        <Input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </FormGroup>
      <FormGroup>
        <TextArea
          placeholder="Mensagem"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </FormGroup>
      <FormGroup>
        <LinkButton type="button" onClick={handleDiscard}>Descartar</LinkButton>
        <AddPostButton type="submit" disabled={!canPublish} canPublish={canPublish}>Publicar</AddPostButton>
      </FormGroup>
    </Form>
  );
};

export default AddPostForm;
