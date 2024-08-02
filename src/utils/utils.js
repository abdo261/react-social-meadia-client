export const getErrorsField=(errors,field)=>{
return errors && errors[field]
}
export function convertTimestampToDateAndTime(timestamp) {
  // Create a new Date object using the timestamp
  const date = new Date(timestamp);
  const now = new Date();

  // Get the date components
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-indexed
  const day = date.getDate().toString().padStart(2, '0');

  // Get the time components
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');

  // Calculate the difference in milliseconds
  const diffInMs = now - date;

  // Convert difference to different units
  const diffInSeconds = Math.floor(diffInMs / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);
  const diffInWeeks = Math.floor(diffInDays / 7);
  const diffInMonths = Math.floor(diffInDays / 30);
  const diffInYears = Math.floor(diffInDays / 365);

  // Determine the relative time string
  let relativeTime;
  if (diffInSeconds < 60) {
    relativeTime = `${diffInSeconds} second${diffInSeconds !== 1 ? 's' : ''} ago`;
  } else if (diffInMinutes < 60) {
    relativeTime = `${diffInMinutes} minute${diffInMinutes !== 1 ? 's' : ''} ago`;
  } else if (diffInHours < 24) {
    relativeTime = `${diffInHours} hour${diffInHours !== 1 ? 's' : ''} ago`;
  } else if (diffInDays < 7) {
    relativeTime = `${diffInDays} day${diffInDays !== 1 ? 's' : ''} ago`;
  } else if (diffInWeeks < 4) {
    relativeTime = `${diffInWeeks} week${diffInWeeks !== 1 ? 's' : ''} ago`;
  } else if (diffInMonths < 12) {
    relativeTime = `${diffInMonths} month${diffInMonths !== 1 ? 's' : ''} ago`;
  } else {
    relativeTime = `${diffInYears} year${diffInYears !== 1 ? 's' : ''} ago`;
  }

  // Format the date and time
  const formattedDate = `${year}-${month}-${day}`;
  const formattedTime = `${hours}:${minutes}:${seconds}`;

  // Return the formatted date and time with the relative time string
  return `${formattedDate} at ${formattedTime} (${relativeTime})`;
}
