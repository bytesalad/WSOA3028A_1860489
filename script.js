const navList = [
    {title: "Home", link: "/index.html"},
    {title: "Interactive Media Theory", link: "./interactive-media-theory/blog-main.html"},
    {title: "Johnathan Mbeki", link: "./johnathan-mbeki/johnathan-mbeki-blog.html"},
    {title: "Johnathan Mbeki Contact", link: "./contact/johnathan-mbeki-contact.html"},
    {title: "External Credit", link: "./credit/credit.html"},
    {title: "Style Guide", link: "./style-guide/style-guide.html"}
]

const createList = () => {
    let ul = document.createElement('ul');
    for (let item of navList){
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.innerText = item.title;
        a.href = item.link;
        li.appendChild(a);
        ul.appendChild(li);
    }
    return ul;
};

const nav = document.querySelector('nav');
li.appendChild(a);
ul.appendChild(li);