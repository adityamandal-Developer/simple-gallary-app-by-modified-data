"use client";
import React, { useEffect, useState } from "react";
import { useFetchPhotos } from "@/hooks/fetchPhotos";
import { AlbumPhotos } from "@/interfaces/types";
import { restructuredPhotos } from "@/utils/restructuredData";
import Modal from "@/components/Modal";

export default function Home() {
  const { fetchPhotos, error, loading } = useFetchPhotos();
  const [newphotos, setNewPhotos] = useState<AlbumPhotos | null>(null);
  const [structuredPhotos, setStructuredPhotos] = useState<AlbumPhotos[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    const getPhotos = async () => {
      const data = await fetchPhotos({
        URL: "https://jsonplaceholder.typicode.com/photos",
      });
      if (data) {
        const structured = restructuredPhotos(data);
        setStructuredPhotos(structured);
      }
    };

    getPhotos();
  }, []);

  const handleClick = (data: AlbumPhotos) => {
    setShowModal(!showModal);
    setNewPhotos(data);
  };

  return (
    <div className="flex justify-center items-center ">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="flex flex-wrap justify-center items-center gap-1 p-2">
            {structuredPhotos.map((photo: AlbumPhotos, id: number) => (
              <div
                className="flex flex-col text-center border-2 rounded-xl overflow-hidden hover:shadow-2xl transition-all ease-linear"
                key={id}
                onClick={() => handleClick(photo)}
              >
                <img
                  className=""
                  src={photo.thumbnail}
                  alt={photo.album.toString()}
                />
                <h1 className="p-1 font-bold shadow-2xl hover:bg-black hover:text-white transition-all ease-linear delay-200">
                  {photo.album}
                </h1>
              </div>
            ))}
          </div>
          {showModal && newphotos && (
            <Modal setShowModal={setShowModal} photos={newphotos} />
          )}
        </>
      )}
      {error && <p>Oops! Something went wrong {error}</p>}
    </div>
  );
}
