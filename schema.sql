CREATE TABLE users (
    id serial PRIMARY KEY,
    parent boolean,
    first_name text NOT NULL,
    last_name text NOT NULL,
    email text,
    password varchar(100)
);

CREATE TABLE chores (
    id serial PRIMARY KEY,
    location text,
    title text,
    description text,
    date integer,
    amount_paid integer,
    user_id integer REFERENCES users (id)

);