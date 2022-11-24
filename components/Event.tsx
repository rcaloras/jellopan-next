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
      <h2>{event.album}</h2>
      <h3>{new Date(event.eventDate).toLocaleDateString()}</h3>
      <small>Hosted By {event.host}</small>
      <br></br>
      <small>With Ingredients {event.ingredient}</small>
      <style jsx>{`
        div {
          color: inherit;
          padding: 2rem;
        }
      `}</style>
    </div>
  );
};

export default Event;
