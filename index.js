// Fetch Blogs from fake API
let API_URL = "https://jsonplaceholder.typicode.com/posts";

// const blogpost= document.getElementById('blog-post');

// pagination variable

const currentPage = 1;
const postsPerPage = 10;

async function fetchPosts() {
  try {
    const response = await fetch(API_URL);
    const posts = await response.json();
    //  console.log(posts)
    return posts.forEach((post) => {
      const blogpost = document.getElementById("blog-post");

      const li = document.createElement("li");

      li.textContent = post.title;

      blogpost.appendChild(li);
    });
  } catch (error) {
    console.error("error in fetching posts", error);
  }
}
// function renderPosts(posts){

//     blogpost.innerHTML = ""

//     posts.forEach((post)=>{
//    let li = document.createElement('li')
//    li.textContent = post.title

//     })
//     blogpost.appendChild(li)
// }
// filter By Tittle

//  filterByTitle
const filterbytitle = (posts, query) => {
  return posts.filter(posts.title.toLowerCase().includes(query.toLowerCase()));
};
// Paginate Posts
const paginatePosts = (filterbytitle) => {
  const start = (currentPage - 1) * postsPerPage;
  const end = start + postsPerPage;
  return filterbytitle.slice(start, end);
};
function renderPagination() {
  const totalPages = Math.ceil(filterbytitle.length / postsPerPage);

  for (let page = 1; page <= totalPages; page++) {
    let button = document.createElement("button");
    button.onClick = () => {
      let currentPage = page;
    };
  }
}

async function loadandRender() {
  const posts = await fetchPosts();
  const searchQuery = document.getElementById("paginateControl").value;

  // }
}
loadandRender();
document.getElementById("SearchInput").addEventListener("input", loadandRender);

// inital Load
loadandRender();

