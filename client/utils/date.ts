const formatTimeTo12Hr = (date) => {
  // Create a date object using the provided date value
  const dateObj = new Date(date);

  // Format the time to a 12-hour format with AM or PM
  let hours = dateObj.getHours();
  let minutes = dateObj.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert hours to 12-hour format
  hours = hours % 12;
  // Convert '0' hours to '12'
  hours = hours ? hours : 12;

  // Pad minutes with leading zero if needed
  minutes = minutes < 10 ? "0" + minutes : minutes;

  // Return the formatted time string
  return `${hours}:${minutes} ${ampm}`;
};

export { formatTimeTo12Hr };
