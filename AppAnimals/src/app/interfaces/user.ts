import Info from './info';
import Permissions from './permissions';

export default interface User {
  id: string;
  name: string;
  mail: string;
  phone: string;
  role: 'admin' | 'owner' | 'manager' | 'user';
  permissions: Permissions;
  cases?: { [id: string]: Info };
  posts?: { [id: string]: Info };
  adoptions?: { [id: string]: Info };
  photo: string;
  coverPhoto?: string;
  noCases: number;
  noPosts: number;
  noAdoptions: number;
  creation_date: number;
  status: boolean;
  savedPosts?: string[]; // array de sus id's
  likedPosts?: string[]; // array de sus id's
  grade: number;
  evaluations?: {
    count: number;
    values: {
      '1': number;
      '2': number;
      '3': number;
      '4': number;
      '5': number;
    };
  };
  vets?: { [id: string]: Info };
}
