
//creating object
const observer = new IntersectionObserver((entries) => {
    //looping through entries
    entries.forEach((entry) => {
        //if shown element to user set class to show else remove the class
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{

            entry.target.classList.remove('show');
        }

    });

});

//getting all hidden items
const hiddenElements = document.querySelectorAll('.hidden');

//passing hidden items through observe method
hiddenElements.forEach((element) => observer.observe(element));



const redirectToPythonTextEditor = () => {
    window.location.href = "https://github.com/Zack-D-44/simpleTextEditor"

};

const redirectToCSharpCurrency = () => {
    window.location.href = "https://github.com/Zack-D-44/Currency-exchanger"

};

const redirectToGithubMain = () => {
    window.location.href = "https://github.com/Zack-D-44";
};

const redirectToLinkedInMain = () => {

    window.location.href = "https://www.linkedin.com/in/zack-davison/";
};