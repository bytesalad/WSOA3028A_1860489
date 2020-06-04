const navList = [
    {title: "Home", link: "/WSOA3028A_1860489/index.html"},
    {title: "Interactive Media Theory", link: "/WSOA3028A_1860489/interactive-media-theory/blog-main.html"},
    {title: "Johnathan Mbeki", link: "/WSOA3028A_1860489/johnathan-mbeki/johnathan-mbeki-blog.html"},
    {title: "Johnathan Mbeki Contact", link: "/WSOA3028A_1860489/contact/johnathan-mbeki-contact.html"},
    {title: "External Credit", link: "/WSOA3028A_1860489/credit/credit.html"},
    {title: "Style Guide", link: "/WSOA3028A_1860489/style-guide/style-guide.html"}
]

const createList = () => {
    let ul = document.createElement('ul');
    for (let item of navList){
        let li = document.createElement('li');
        li.className = "nav-list";
        let a = document.createElement('a');
        a.innerText = item.title;
        a.href = item.link;
        //a.className = "nav-list";
        li.appendChild(a);
        ul.appendChild(li);
    }
    return ul;
};

//may return to this at later stage. Code to populate the header.
//const createHeader = () => {
//    const header = document.createElement('header');
//    const h1 = document.createElement("h1");
//    h1.innerText = "Mbeki's Swing";
//    let img = document.createElement('img');
//    img.src = "/header.jpg";
//    img.alt = "Image of a person playing the double bass.";
//    img.width = "400";
//    img.height = "341";
//    const nav = document.createElement('nav');
//    const backButton = document.createElement('button');
//    backButton.type = "button";
//    backButton.className = "back";
//    backButton.innerText = "Back";
//
//    //append to header
//    header.appendChild(h1);
//    header.appendChild(img);
//    header.appendChild(nav);
//    header.appendChild(backButton);
//};

//createHeader();
const nav = document.querySelector('nav');
const ul = createList();
nav.appendChild(ul);