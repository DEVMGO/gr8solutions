const LocationIcon = ({ className }) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.444 13.2355C13.9857 13.2355 15.2355 11.9857 15.2355 10.444C15.2355 8.9023 13.9857 7.6525 12.444 7.6525C10.9023 7.6525 9.6525 8.9023 9.6525 10.444C9.6525 11.9857 10.9023 13.2355 12.444 13.2355Z"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.444 21.61C16.166 17.888 19.888 14.5552 19.888 10.444C19.888 6.33279 16.5552 3 12.444 3C8.33279 3 5 6.33279 5 10.444C5 14.5552 8.722 17.888 12.444 21.61Z"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LocationIcon;
