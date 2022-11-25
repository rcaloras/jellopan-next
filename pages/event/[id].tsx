import React from "react"
import { GetServerSideProps } from "next"
import ReactMarkdown from "react-markdown"
import Layout from "../../components/Layout"
import { EventProps } from "../../components/Event"
import prisma from '../../lib/prisma';
import safeJsonStringify from 'safe-json-stringify';


export const getServerSideProps: GetServerSideProps = async ({ params }) => {

  console.log("Params "+ params?.id)
  const event = JSON.parse(safeJsonStringify(await prisma.event.findUnique({
    where: { id: Number(params?.id) },
  })));

  return {
    props: event,
  }
}

const Event: React.FC<EventProps> = (props) => {

  return (
    <Layout>
      <div>
        <h2>Album: {props.album}</h2>
        <p>Hosted By {props.host}</p>
        <p>Event Date: {new Date(props.eventDate).toLocaleDateString()}</p>
        <p>Ingredient: {props.ingredient}</p>
        <p>Created At: {new Date(props.createdAt).toLocaleDateString()}</p>
      </div>
      <style jsx>{`
        .page {
          background: white;
          padding: 2rem;
        }

        .actions {
          margin-top: 2rem;
        }

        button {
          background: #ececec;
          border: 0;
          border-radius: 0.125rem;
          padding: 1rem 2rem;
        }

        button + button {
          margin-left: 1rem;
        }
      `}</style>
    </Layout>
  )
}

export default Event
