export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface AlbumPhotos {
  album: number;
  thumbnail: string;
  photos: Photo[];
}

export interface MODAL_PROPS {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  photos: AlbumPhotos;
}
