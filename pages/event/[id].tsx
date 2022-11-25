import React from "react"
import { GetServerSideProps } from "next"
import ReactMarkdown from "react-markdown"
import Layout from "../../components/Layout"
import { EventProps } from "../../components/Event"
import prisma from '../../lib/prisma';
import safeJsonStringify from 'safe-json-stringify';
import Router from 'next/router';


export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const event = JSON.parse(safeJsonStringify(await prisma.event.findUnique({
    where: { id: Number(params?.id) },
  })));

  return {
    props: event ? event : {},
  }
}

const Event: React.FC<EventProps> = (props) => {

  const deleteEvent = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    // confirm we want to delete this
    var confirm = window.confirm("Delete this item?")
    if (!confirm) {
      return;
    }

    try {
      await fetch(`/api/event/${props.id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });
      await Router.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
      <div>
        <ul className='event-page-list'>
        <li>Album: {props.album}</li>
        <li>Hosted By: {props.host}</li>
        <li>Event Date: {new Date(props.eventDate).toLocaleDateString()}</li>
        <li>Ingredient: {props.ingredient}</li>
        <li>Created At: {new Date(props.createdAt).toLocaleDateString()}</li>
        </ul>
        <button type="button" className="btn btn-danger" onClick={deleteEvent}>Delete</button>
      </div>
    </Layout>
  )
}

export default Event
