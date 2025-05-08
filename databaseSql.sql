--
-- PostgreSQL database dump
--

-- Dumped from database version 17.4
-- Dumped by pg_dump version 17.4

-- Started on 2025-05-08 20:02:57

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 4906 (class 1262 OID 5)
-- Name: postgres; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en-US';


ALTER DATABASE postgres OWNER TO postgres;

\connect postgres

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 4907 (class 0 OID 0)
-- Dependencies: 4906
-- Name: DATABASE postgres; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON DATABASE postgres IS 'default administrative connection database';


--
-- TOC entry 5 (class 2615 OID 16629)
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

-- *not* creating schema, since initdb creates it


ALTER SCHEMA public OWNER TO postgres;

--
-- TOC entry 4908 (class 0 OID 0)
-- Dependencies: 5
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON SCHEMA public IS '';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 217 (class 1259 OID 16630)
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 16644)
-- Name: events; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.events (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    description text,
    location character varying(255),
    event_date date NOT NULL,
    event_time time(6) without time zone NOT NULL
);


ALTER TABLE public.events OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 16643)
-- Name: events_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.events_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.events_id_seq OWNER TO postgres;

--
-- TOC entry 4910 (class 0 OID 0)
-- Dependencies: 218
-- Name: events_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.events_id_seq OWNED BY public.events.id;


--
-- TOC entry 4748 (class 2604 OID 16647)
-- Name: events id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.events ALTER COLUMN id SET DEFAULT nextval('public.events_id_seq'::regclass);


--
-- TOC entry 4898 (class 0 OID 16630)
-- Dependencies: 217
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) VALUES ('d6ec0e86-5724-43a4-8a89-e4fdeed1d8fe', 'fcce21c93895a09c2a9a1a80a09ee651baf35000a5213ad4a35460c7ac62be84', '2025-05-08 13:08:14.92593+02', '20250508110814_init', NULL, NULL, '2025-05-08 13:08:14.915654+02', 1);


--
-- TOC entry 4900 (class 0 OID 16644)
-- Dependencies: 219
-- Data for Name: events; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.events (id, name, description, location, event_date, event_time) VALUES (2, 'Twenty One Pilots Tour', 'Twenty One Pilots is an American musical duo from Columbus, Ohio, consisting of Tyler Joseph and Josh Dun. Known for blending genres such as alternative rock, hip hop, and electropop, the band gained mainstream recognition with their album "Blurryface" featuring hits like "Stressed Out" and "Ride". Their energetic live shows, introspective lyrics, and unique aesthetic have earned them a global fanbase and multiple music awards.', 'Lichtfabriek, Haarlem', '2025-08-10', '19:30:00');
INSERT INTO public.events (id, name, description, location, event_date, event_time) VALUES (1, 'Ed Sheeran Live', 'Edward Christopher Sheeran is a British singer-songwriter, record producer, and actor. He rose to fame in 2011 with his debut album "+" and became known for his heartfelt lyrics and acoustic sound. With multiple Grammy Awards and worldwide hits like "Thinking Out Loud", "Perfect", and "Shape of You", Ed Sheeran has become one of the best-selling music artists in the world. His live performances are known for being intimate, often performed solo with a loop pedal.', 'Caprera Openluchttheatre, Haarlem', '2025-05-28', '18:00:00');
INSERT INTO public.events (id, name, description, location, event_date, event_time) VALUES (3, 'Linkin Park Tour', 'Linkin Park was an American rock band formed in Agoura Hills, California, in 1996. Known for pioneering the nu-metal genre, the band achieved worldwide success with their debut album "Hybrid Theory". With a distinctive sound that fused rock, hip hop, and electronic elements, Linkin Park produced iconic tracks like "In the End", "Numb", and "Breaking the Habit". Their music often dealt with themes of emotional struggle and resilience. The legacy of the late Chester Bennington continues to inspire fans across generations.', 'Jopenkirk, Haarlem', '2025-07-18', '20:00:00');


--
-- TOC entry 4911 (class 0 OID 0)
-- Dependencies: 218
-- Name: events_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.events_id_seq', 7, true);


--
-- TOC entry 4750 (class 2606 OID 16638)
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- TOC entry 4752 (class 2606 OID 16651)
-- Name: events events_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.events
    ADD CONSTRAINT events_pkey PRIMARY KEY (id);


--
-- TOC entry 4909 (class 0 OID 0)
-- Dependencies: 5
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE USAGE ON SCHEMA public FROM PUBLIC;


-- Completed on 2025-05-08 20:02:57

--
-- PostgreSQL database dump complete
--

