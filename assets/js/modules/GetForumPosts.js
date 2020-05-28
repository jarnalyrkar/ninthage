const siteUrl = ninthageData.root_url + "/wp-content/themes/ninthage/inc/get_forum_posts.php";
getPosts();

function getPosts() {
  const output = document.querySelector("#recentPostsList");
  if (output) {
    fetch(siteUrl, {mode: 'no-cors'})
      .then(res => res.text())
      .then(res => {
        let domparser = new DOMParser();
        const doc = domparser.parseFromString(res, 'text/html');
        const lastPosts = doc.querySelector('#lastXBoardPosts');
        const topics = lastPosts.querySelectorAll('tbody .wbbTopicLink');
        const boards = lastPosts.querySelectorAll('tbody .columnBoard > a');
        let posts = [];
        for (let i = 0; i < topics.length; i++) {
          posts[i] = {
            'topic': topics[i],
            'board': boards[i],
          }
        }
        const postedIn = document.createElement('p');
        postedIn.innerHTML = "Posted in ";
        postedIn.classList.add('recentPostsList__postedIn');

        const article = document.createElement('article');
        article.classList.add('recentPostsList__item');

        posts.forEach(post => {
          const thisArticle = article.cloneNode(true);
          output.appendChild(thisArticle);
          thisArticle.appendChild(post.topic);
          const thisPostedIn = postedIn.cloneNode(true);
          thisArticle.appendChild(thisPostedIn);
          thisPostedIn.appendChild(post.board);
        })

        output.classList.remove('loading');
      });
    }
}