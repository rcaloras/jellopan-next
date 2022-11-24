import React from "react"
import { GetStaticProps } from "next"
import Layout from "../components/Layout"
import Event, { EventProps } from "../components/Event"
import prisma from '../lib/prisma';
import Link from 'next/link';
import safeJsonStringify from 'safe-json-stringify';

export const getStaticProps: GetStaticProps = async () => {
  const feed = JSON.parse(safeJsonStringify(await prisma.event.findMany({
    where: { },
  })));

  return {
    props: { feed },
    revalidate: 10
  }
}

type Props = {
  feed: EventProps[]
}

const Blog: React.FC<Props> = (props) => {
  return (
    <Layout>
      <div className="page">
        <h1>Jello Pans</h1>
        <Link href="/create">
          <button>
            <a>Add a new JP Event</a>
          </button>
        </Link>
        <main>
          {props.feed.map((event) => (
            <div key={event.id} className="post">
              <Event event={event} />
            </div>
          ))}
        </main>
      </div>
      <style jsx>{`
        .post {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }

        .post:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .post + .post {
          margin-top: 2rem;
        }
      `}</style>
    </Layout>
  )
}

export default Blog
