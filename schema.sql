CREATE TABLE users (
    id serial PRIMARY KEY,
    parent boolean,
    first_name text NOT NULL,
    last_name text NOT NULL,
    email text,
    password varchar(100)
);

CREATE TABLE chorelist (
    id serial PRIMARY KEY,
    location text,
    title text,
    description text,
    date integer,
    time integer,
    provider_name text,
    location text,
    user_id integer REFERENCES users (id)

);