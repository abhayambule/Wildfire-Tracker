const LocationInfo = ({ info }) => {
  return (
    <div className="location_info">
      <h2>Location Info</h2>
      <ul>
        <li>
          Id: <strong>{info.id}</strong>
        </li>
        <li>
          Title: <strong>{info.title}</strong>
        </li>
      </ul>
    </div>
  );
};

export default LocationInfo;
