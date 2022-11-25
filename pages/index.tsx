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
        <Link href="/create">
          <button className="btn btn-light add-btn">
            <a>Add a new JP Event</a>
          </button>
        </Link>
        <main>
          <table className="table table-hover table-bordered">
            <thead>
              <tr>
              <th scope="col">Host</th>
              <th scope="col">Event Date</th>
              <th scope="col">Album</th>
              <th scope="col">Ingredient</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
            {props.feed.map((event) => (
              <Event event={event} />
            ))}

            </tbody>
          </table>
        </main>

      </div>
    </Layout>
  )
}

export default Blog
