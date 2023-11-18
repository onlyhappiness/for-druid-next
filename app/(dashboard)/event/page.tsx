import { notFound } from "next/navigation";
import EventPage from "./page.client";

const Event = async () => {
  try {
    return <EventPage />;
  } catch (e) {
    notFound();
  }
};

export default Event;
