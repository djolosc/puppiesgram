export type IOwner = {
  id: string;
  firstName: string;
  lastName: string;
  picture: string;
  title: string;
};

export interface IPost {
  id: string;
  image: string;
  likes: number;
  publishDate: string;
  text: string;
  owner: IOwner;
  tags: string[];
  link?: string;
}
