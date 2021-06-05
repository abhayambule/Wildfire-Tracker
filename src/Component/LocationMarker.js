import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/fire-alert";

const LocationMarker = () => {
  return (
    <div className="location_marker" onClick={null}>
      <Icon icon={locationIcon} className="location_icon" />
    </div>
  );
};

export default LocationMarker;
