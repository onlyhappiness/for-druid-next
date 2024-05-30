const getURL = () => {
  let url = import.meta.env.VITE_PUBLIC_SITE_URL ?? "http://localhost:5173/";

  url = url.includes("http") ? url : `https://${url}`;
  // Make sure to include a trailing `/`.
  url = url.charAt(url.length - 1) === "/" ? url : `${url}/`;

  return url;
};

export default getURL;
