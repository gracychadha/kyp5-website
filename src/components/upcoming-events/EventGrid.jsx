import React, { useEffect, useState } from "react";
import axios from "axios";

function EventGrid() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_BASE_URL + "events")
      .then((response) => {
        setEvents(response.data?.data || []);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const BASE_URL = import.meta.env.VITE_BASE_URL.replace("/api/public/", "");

  return (
    <div className="rts-section-gap rts-blog-area">
      <div className="container">
        <div className="row g-5 mt--20">
          {events.length > 0 ? (
            events.map((event) => {

              const image = event.thumbnail
                ? BASE_URL + event.thumbnail
                : "/assets/images/events/01.jpg";

              const title = event.title || "Upcoming Event";

              const date = event.eventDate
                ? new Date(event.eventDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : "March 25, 2026";

              const time = event.eventTime || "10:30 PM";

              const venue = event.venue || "Event Location";

              const buttonLink = event.buttonLink || "#";

              return (
                <div className="col-lg-6" key={event.id}>
                  <div className="single-blog-style-one">
                    
                    <a href={buttonLink} className="thumbnail">
                      <img src={image} alt={title} />
                    </a>

                    <div className="blog-top-area">
                      <div className="single">
                        <i className="fa-light fa-calendar-days"></i>
                        <p>{date}</p>
                      </div>

                      <div className="single">
                        <i className="fa-light fa-clock"></i>
                        <p>{time}</p>
                      </div>

                      <div className="single">
                        <i className="fa-light fa-location-dot"></i>
                        <p>{venue}</p>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })
          ) : (
            <p style={{ textAlign: "center" }}>
              No upcoming events available.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default EventGrid;