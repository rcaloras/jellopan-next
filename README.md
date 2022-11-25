# Jellopan.com 2.0
New version of https://github.com/Benuuu/JelloPan
## Importing into Postgres
Can import into Postgres using the original db preserved as a csv
```bash
psql -d 'jellopan' -c "COPY event(host, event_date, album, ingredient, created_at, updated_at) FROM "\'$PWD/public/events_db.csv\'" DELIMITER ',' CSV HEADER;"
```

This is the starter project for the fullstack tutorial with Next.js and Prisma. You can find the final version of this project in the [`final`](https://github.com/prisma/blogr-nextjs-prisma/tree/final) branch of this repo.
