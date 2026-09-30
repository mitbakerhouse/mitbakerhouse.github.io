import React from "react";

const Youtube = ({
  id,
  title,
}: {
  id: string;
  title: string;
}) => {
  return (
    <div className="aspect-video overflow-hidden rounded-lg">
      <iframe
        className="h-full w-full"
        src={`https://www.youtube-nocookie.com/embed/${id}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
};

export default Youtube;
