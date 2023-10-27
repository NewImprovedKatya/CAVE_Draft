import EventCard from "../components/EventCard.js";
import eventList from "../components/eventList.js";

export default function Events() {
  return (
    <div className="page">
      <h1 className="heading">Official CAVE Events</h1>
      <div className="calendar card light">Calendar Placeholder</div>
      <div className="section">
        {eventList.map((eventItem) => (
          <EventCard
            className="thing"
            key={eventItem.key}
            image={eventItem.image}
            date={eventItem.date}
            title={eventItem.title}
            content={eventItem.content}
          />
        ))}
      </div>
    </div>
  );
}
