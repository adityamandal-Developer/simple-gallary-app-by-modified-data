import { AlbumPhotos, Photo } from "@/interfaces/types";

const restructuredPhotos = (photoData: Photo[]): AlbumPhotos[] => {
  const albummap = new Map<number, { thumbnail: string; photos: Photo[] }>();

  photoData.forEach((photo) => {
    if (!albummap.has(photo.albumId)) {
      albummap.set(photo.albumId, {
        thumbnail: photo.thumbnailUrl,
        photos: [],
      });
    }
    albummap.get(photo.albumId)?.photos.push(photo);
  });
  const result = Array.from(albummap, ([album, { thumbnail, photos }]) => ({
    album,
    thumbnail,
    photos,
  }));
  return result;
};

export { restructuredPhotos };
