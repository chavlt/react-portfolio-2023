const HYGRAPH_API = "https://eu-west-2.cdn.hygraph.com/content/cmiiwzsfm007906w5z50ym0lp/master";

export async function fetchProjects() {
  const query = `
    {
      projects {
        id
        title
        slug
        tags
        date
        content {
            html
        }
      }
    }
  `;

  const res = await fetch(HYGRAPH_API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query })
  });


  const { data } = await res.json();

  console.log("data : ", data);
  return data.projects;
}
