export const API_OPTIONS = {
  url: "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
  options: {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer " + process.env.REACT_APP_TMDB_KEY,
    },
  },
};

export const IMG_ICON = "https://image.tmdb.org/t/p/w500/";

export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const SUPPORTED_LANGUAGES = [
  {
    identifier: "en",
    name: "English",
  },
  {
    identifier: "malayalam",
    name: "malayalam",
  },
  { identifier: "spanish", name: "spanish" },
  {
    identifier: "hindi",
    name: "hindi",
  },
];


