-- CreateTable
CREATE TABLE "events" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "location" VARCHAR(255),
    "event_date" DATE NOT NULL,
    "event_time" TIME(6) NOT NULL,

    CONSTRAINT "events_pkey" PRIMARY KEY ("id")
);
