const HYGRAPH_API = "https://eu-west-2.cdn.hygraph.com/content/cmiiwzsfm007906w5z50ym0lp/master";

export async function fetchProjects() {
  const query = `
    {
      projects {
        id
        title
        slug
        tags
        coverImage {
            url
            fileName
            mimeType
            width
            height
        }
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

export async function fetchProjectById(projectId) {
  const query = `
    {
      project(where: { slug: "${projectId}" }) {
        id
        title
        subtitle
        slug
        coverImage {
            url
            fileName
            mimeType
            width
            height
        }
        tags
        date
        bannerImage{
            url
            fileName
            mimeType
            width
            height
        }
        content {
            html
        }
      }
    }
  `;

  console.log("HYGRAPH_API ", HYGRAPH_API);

  const res = await fetch(HYGRAPH_API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query })
  });

  const { data } = await res.json();

    console.log("data : ", data);


  return data.project; // retourne le projet unique
}
