import React from "react";
import Router from "next/router";
import ReactMarkdown from "react-markdown";

export type EventProps = {
  id: string;
  host: string;
  eventDate: Date;
  album: string;
  ingredient: string;
  createdAt: Date;
  updatedAt: Date;
};

const Event: React.FC<{ event: EventProps }> = ({ event }) => {
  return (
    <div onClick={() => Router.push("/event/[id]", `/event/${event.id}`)}>
      {event.album} Held On: {new Date(event.eventDate).toLocaleDateString()}
      <p>Hosted By: {event.host} | Special Ingredients: {event.ingredient}</p>
    </div>
  );
};

export default Event;
