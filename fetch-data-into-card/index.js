const card = document.querySelector(".card");
const cardContainer = document.querySelector(".card-container");
const getData = async (url) => {
  try {
    const res = await axios(url);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const makeDynamicCard = async () => {
  const posts = await getData("https://jsonplaceholder.typicode.com/posts");

  posts.map((post) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.innerHTML = `   <h2 class="card-title">${post.title}</h2>
          <p class="card-body">${post.body}</p>`;

    cardContainer.appendChild(cardElement);
  });
};

makeDynamicCard();

// Todo app
// create todo 
// delete 
// edit or update 
// read 