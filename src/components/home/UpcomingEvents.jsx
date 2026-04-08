import React, { useEffect, useState } from "react";
import axios from "axios";

function UpcomingEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_BASE_URL + "events?limit=3&sort=desc")
      .then((response) => {
        setEvents(response.data?.data || []);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const baseURL = import.meta.env.VITE_BASE_URL.replace("/api/public/", "");

  return (
    <>
      <div className="up-coming-events rts-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-area-center-style">
                <div className="pre-title">
                  <img src="/assets/images/banner/bulb.png" alt="icon" />
                  <span>Our Event</span>
                </div>
                <h2 className="title">Upcoming Events</h2>
                <p className="post-title">
                  You'll find something to spark your curiosity and enhance
                </p>
              </div>
            </div>
          </div>

          <div className="row mt--50">
            <div className="col-lg-12">
              <div className="upcoming-events-main-wrapper-1">

                {events.length > 0 ? (
                  events.map((event) => {
                    const image =
                      event.thumbnail
                        ? baseURL + event.thumbnail
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

                    const buttonText = event.buttonText || "View Event";

                    const buttonLink = event.buttonLink || "#";

                    return (
                      <div
                        className="single-upcoming-events"
                        key={event.id || Math.random()}
                      >
                        <div className="img-information">
                          <a href={buttonLink} className="thumbnail">
                            <img src={image} alt={title} />
                          </a>

                          <div className="information">
                            <div className="date-details">
                              <div className="date">
                                <i className="fa-thin fa-calendar-days"></i>
                                <p>{date}</p>
                              </div>

                              <div className="time">
                                <i className="fa-regular fa-clock"></i>
                                <p>{time}</p>
                              </div>

                              <div className="location">
                                <i className="fa-thin fa-location-dot"></i>
                                <p>{venue}</p>
                              </div>
                            </div>

                            <a href={buttonLink}>
                              <h5 className="title">{title}</h5>
                            </a>
                          </div>
                        </div>

                        <a
                          href="/events"
                          className="rts-btn btn-primary with-arrow"
                        >
                         View All Events
                          <i className="fa-light fa-arrow-right"></i>
                        </a>
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
        </div>
      </div>
    </>
  );
}

export default UpcomingEvents;