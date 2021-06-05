import React, { useState, useEffect } from "react";
import Map from "./Component/Map";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/fire-alert";

const App = () => {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchApi = async () => {
      setLoading(true);
      const res = await fetch(
        "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events"
      );
      const { events } = await res.json();

      setEventData(events);
      setLoading(false);
    };
    fetchApi();
  }, []);

  return (
    <div>
      <header className="header">
        <h1>
          <Icon icon={locationIcon} /> Wildfire Tracker
        </h1>
      </header>
      {!loading ? <Map eventData={eventData} /> : <h1>Loading...</h1>}
    </div>
  );
};

export default App;
