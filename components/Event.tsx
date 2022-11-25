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
    <tr onClick={() => Router.push("/event/[id]", `/event/${event.id}`)}>
        <th scope="row">{event.host}</th>
        <td>{new Date(event.eventDate).toLocaleDateString()}</td>
        <td>{event.album}</td>
        <td>{event.ingredient}</td>
    </tr>
  );
};

export default Event;
