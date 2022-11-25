// pages/create.tsx

import React, { useState } from 'react';
import Layout from '../components/Layout';
import Router from 'next/router';

const Draft: React.FC = () => {
  const [album, setAlbum] = useState('');
  const [host, setHost] = useState('');
  const [ingredient, setIngredient] = useState('');
  const [eventDate, setEventDate] = useState('');

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const body = { album, host, ingredient, eventDate };

      await fetch('/api/event', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      await Router.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
      <div>
        <form onSubmit={submitData}>
          <h1>New Jellopan!</h1>
          <input
            autoFocus
            onChange={(e) => setHost(e.target.value)}
            placeholder="Host"
            type="text"
            value={host}
          />
          <input
            onChange={(e) => setAlbum(e.target.value)}
            placeholder="Album Title"
            type="text"
            value={album}
          />
          <input
            onChange={(e) => setIngredient(e.target.value)}
            placeholder="Ingredient"
            type="text"
            value={ingredient}
          />
          Event Date:
          <input
            onChange={(e) => setEventDate(e.target.value)}
            placeholder="Event Date"
            type="date"
            value={eventDate}
          />

          <input disabled={!host || !eventDate || ! album} type="submit" value="Create" />
          <a className="back" href="#" onClick={() => Router.push('/')}>
            or Cancel
          </a>
        </form>
      </div>
      <style jsx>{`
        .page {
          background: var(--geist-background);
          padding: 3rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        input[type='text'],
        input[type='date'],
        textarea {
          width: 100%;
          padding: 0.5rem;
          margin: 0.5rem 0;
          border-radius: 0.25rem;
          border: 0.125rem solid rgba(0, 0, 0, 0.2);
        }

        input[type='submit'] {
          background: #ececec;
          border: 0;
          padding: 1rem 2rem;
        }

        .back {
          margin-left: 1rem;
        }
      `}</style>
    </Layout>
  );
};

export default Draft;