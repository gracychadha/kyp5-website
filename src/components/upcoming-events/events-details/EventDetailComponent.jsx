import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function EventDetail() {
  const { id } = useParams();

  const [event, setEvent] = useState(null);

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_BASE_URL + `events/${id}`)
      .then((response) => {
        setEvent(response.data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const BASE_URL = import.meta.env.VITE_BASE_URL.replace("/api/public/", "");

  if (!event) {
    return <p style={{ textAlign: "center" }}>Loading...</p>;
  }

  const image = event.thumbnail
    ? BASE_URL + event.thumbnail
    : "/assets/images/events/01.jpg";

  const title = event.title || "Event";

  const description = event.description || "No description available.";

  const venue = event.venue || "Event Location";

  const time = event.eventTime || "10:00 AM";

  const date = event.eventDate
    ? new Date(event.eventDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "March 25, 2026";

  return (
    <>
      <div className="rts-events-area rts-section-gap">
        <div className="container">
          <div className="row ">
            <div className="col-lg-8">
              <div className="thumbnail-large-image">
                <img
                  src={image}
                  alt={title}
                  style={{
                    width: "100%",
                    borderRadius: "20px",
                    maxHeight: "550px",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="rts-events-details-area-information pt--60">
                <h2 className="title mb--20">{title}</h2>

                <h5 className="title ">About The Event</h5>

                <p
                  className="disc"
                  dangerouslySetInnerHTML={{
                    __html: description,
                  }}
                />
              </div>
            </div>

            <div className="col-lg-4">
              <div className="events-information-wrapper">
                <h4 className="title">Event Information</h4>

                <div className="single-information">
                  <div className="icon">
                    <span>Date:</span>
                  </div>

                  <span>{date}</span>
                </div>

                <div className="single-information">
                  <div className="icon">
                    <span>Time:</span>
                  </div>

                  <span>{time}</span>
                </div>

                <div className="single-information">
                  <div className="icon">
                    <span>Venue:</span>
                  </div>

                  <span>{venue}</span>
                </div>

                <a
                  href="/contact-us"
                  className="rts-btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventDetail;
