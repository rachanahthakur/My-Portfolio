const Projects = [

  {
    name: "Spotify Clone Website",
    about: "A Spotify clone website is a web application that replicates the core features and functionalities of Spotify, a popular music streaming service.",
    img: "https://media.dev.to/cdn-cgi/image/width=1600,height=900,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fi2vhn7q6wnuwvo3av0uj.png",
    blog: "",
    tech_stack: "HTML | CSS | JAVASCRIPT ",
    tech_stackicons: [
      `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
      `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
      `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
    ],
    project_link: "https://stalwart-kelpie-815e75.netlify.app/",
    project_type: "Spotify Clone Project"
  },

  {
    name: "Clone of Amazon",
    about: "This is the online shopping website which is created by me.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPKGu9LHCaUZ5ZiR-atdsldiFiCTVMei2hPg&usqp=CAU",
    gitrepo: "https://steady-souffle-33e51e.netlify.app/",
    blog: "",
    tech_stack: "HTML | CSS | JAVASCRIPT | API's",
    tech_stackicons: [
      `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
      `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
      `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,

    ],
    project_link: "https://steady-souffle-33e51e.netlify.app/",
    project_type: "Clone Project"

  },
  {
    name: "PingPong Game",
    about: "Table tennis, also known as ping-pong and whiff-whaff, is a sport in which two or four players hit a lightweight ball, also known as the ping-pong ball, back and forth across a table using small rackets.",
    img: "https://i.pinimg.com/736x/2c/d2/44/2cd244d545e8ce5c263bf5ba90ff7f79.jpg",
    gitrepo: "https://rachanahthakur.github.io/PingPong/",
    blog: "",
    tech_stack: "HTML | CSS | JAVASCRIPT",
    tech_stackicons: [
      `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
      `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
      `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,

    ],
    project_link: "https://darling-rolypoly-6694b7.netlify.app/",
    project_type: "Clone Project"

  },
  {
    name: "PhonePe Website",
    about: "PhonePe is an online Website for Indian multinational digital payments and financial services company.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-QcrPjqNMQso0kKhOrf7YiR3nJFLiYrZt8Q&usqp=CAU",
    gitrepo: "https://rachanahthakur.github.io/testphonePe/",
    blog: "",
    tech_stack: "HTML | CSS | JAVASCRIPT | React | Redux | MongoDB | Express | Nodejs",
    tech_stackicons: [
      `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
      `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
      `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
    ],
    project_link: "https://velvety-bonbon-9dd262.netlify.app/",
    project_type: "Team Project"
  }
]



let projects__container = document.getElementById("projects--container");

Projects.forEach((pro, index) => {

  let main = document.createElement("div");
  main.setAttribute("class", "portfolio-item padd-15");
  main.innerHTML = `
      <div class="portfolio-item-inner shadow-dark">
        <div class="portfolio-img">
          <img src=${pro.img} alt="">
          <h3 class="project-name"><b>${pro.name}</b></h3> <br/>
          <h4 class="project-name project__about">${pro.about}</h4>
          <a href=${pro.project_link} target="_blank" class="see-project">Live💻</a>
         
        </div>
        <br/>
        <h3 class="project-name techcen"><b>Tech Stack</b></h3>
        <span>${pro.tech_stackicons[0] ? pro.tech_stackicons[0] : ''}
          ${pro.tech_stackicons[1] ? pro.tech_stackicons[1] : ''}
          ${pro.tech_stackicons[2] ? pro.tech_stackicons[2] : ''}
          ${pro.tech_stackicons[3] ? pro.tech_stackicons[3] : ''}
          ${pro.tech_stackicons[4] ? pro.tech_stackicons[4] : ''}
          ${pro.tech_stackicons[5] ? pro.tech_stackicons[5] : ''}
          ${pro.tech_stackicons[6] ? pro.tech_stackicons[6] : ''}
          ${pro.tech_stackicons[7] ? pro.tech_stackicons[7] : ''}
          ${pro.tech_stackicons[8] ? pro.tech_stackicons[8] : ''}
          ${pro.tech_stackicons[9] ? pro.tech_stackicons[9] : ''}
        </span>
      </div>
    </div>`;
  projects__container.append(main);

});
