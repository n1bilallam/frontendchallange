export const getData = async (url) => {
  const res = await fetch(`${url}`, {
    method: "GET",
  });
  const data = await res.json();
  return data;
};
