export const getErrorsField = (errors, field) => {
  return errors && errors[field];
};
export function convertTimestampToDateAndTime(timestamp) {

  const date = new Date(timestamp);
  const now = new Date();

 
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); 
  const day = date.getDate().toString().padStart(2, "0");

  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");


  const diffInMs = now - date;


  const diffInSeconds = Math.floor(diffInMs / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);
  const diffInWeeks = Math.floor(diffInDays / 7);
  const diffInMonths = Math.floor(diffInDays / 30);
  const diffInYears = Math.floor(diffInDays / 365);

 
  let relativeTime;
  if (diffInSeconds < 60) {
    relativeTime = `${diffInSeconds} second${
      diffInSeconds !== 1 ? "s" : ""
    } ago`;
  } else if (diffInMinutes < 60) {
    relativeTime = `${diffInMinutes} minute${
      diffInMinutes !== 1 ? "s" : ""
    } ago`;
  } else if (diffInHours < 24) {
    relativeTime = `${diffInHours} hour${diffInHours !== 1 ? "s" : ""} ago`;
  } else if (diffInDays < 7) {
    relativeTime = `${diffInDays} day${diffInDays !== 1 ? "s" : ""} ago`;
  } else if (diffInWeeks < 4) {
    relativeTime = `${diffInWeeks} week${diffInWeeks !== 1 ? "s" : ""} ago`;
  } else if (diffInMonths < 12) {
    relativeTime = `${diffInMonths} month${diffInMonths !== 1 ? "s" : ""} ago`;
  } else {
    relativeTime = `${diffInYears} year${diffInYears !== 1 ? "s" : ""} ago`;
  }


  const formattedDate = `${year}-${month}-${day}`;
  const formattedTime = `${hours}:${minutes}:${seconds}`;


  return `${formattedDate} at ${formattedTime} (${relativeTime})`;
}

export const timeAgo = (createdAt) => {
  const date = new Date(createdAt);
  const now = new Date();
  const diffInMs = now - date;

  const diffInSeconds = Math.floor(diffInMs / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);
  const diffInWeeks = Math.floor(diffInDays / 7);
  const diffInMonths = Math.floor(diffInDays / 30);
  const diffInYears = Math.floor(diffInDays / 365);

  let relativeTime;
  if (diffInSeconds < 60) {
    relativeTime = `${diffInSeconds} second${
      diffInSeconds !== 1 ? "s" : ""
    } ago`;
  } else if (diffInMinutes < 60) {
    relativeTime = `${diffInMinutes} minute${
      diffInMinutes !== 1 ? "s" : ""
    } ago`;
  } else if (diffInHours < 24) {
    relativeTime = `${diffInHours} hour${diffInHours !== 1 ? "s" : ""} ago`;
  } else if (diffInDays < 7) {
    relativeTime = `${diffInDays} day${diffInDays !== 1 ? "s" : ""} ago`;
  } else if (diffInWeeks < 4) {
    relativeTime = `${diffInWeeks} week${diffInWeeks !== 1 ? "s" : ""} ago`;
  } else if (diffInMonths < 12) {
    relativeTime = `${diffInMonths} month${diffInMonths !== 1 ? "s" : ""} ago`;
  } else {
    relativeTime = `${diffInYears} year${diffInYears !== 1 ? "s" : ""} ago`;
  }
  return relativeTime;
};

export const isCurrentUserOwner = (user_id) =>
  user_id === JSON.parse(localStorage.getItem("user_info")).user._id;
