document.addEventListener("DOMContentLoaded", () => {
    //getting image
    let imageOfMe = document.getElementById('image-of-me');
    let buttonToFindOut = document.getElementById('button-to-make-text-appear');
    //setting the current postion we already know
    let currentPostition = -1000;
    let buttonOpacity = 0;
    

    //execute function every 10 milliseconds
    let animationInterval = setInterval(() => {
        
        //increasing left postion 
        currentPostition += 40;
        // currentOpacity += 0.1

        imageOfMe.style.left = currentPostition + 'px';
        // textBesideImage.style.opacity = currentOpacity;

        //if position is equal to 0 stop the function
        if(currentPostition == 0){
            clearInterval(animationInterval);
            //start button fade in animation
            let buttonFadeInInterval = setInterval(() => {
                //increase opacity by 0.1 each time
                buttonOpacity += 0.1;

                buttonToFindOut.style.opacity = buttonOpacity;
                //if button opacity is one stop the animation
                if(buttonOpacity >= 1){
                    clearInterval(buttonFadeInInterval);
                    clearInterval(animationInterval);
                }
            }, 30);

        }

    }, 10);
});

/*document.addEventListener('DOMContentLoaded', () => {

    let imageOfMe = document.getElementById('image-of-me');

    imageOfMe.classList.add("slide-in");
});*/

//adding event listener to button to make text appear
document.getElementById('button-to-make-text-appear').addEventListener('click', () => {
    //accessing all elements
    let button = document.getElementById('button-to-make-text-appear');
    let textBox = document.querySelector('.text-beside-image');
    let moreAboutButton = document.getElementById('find-out-more');
    
    //setting opacities
    let textBoxOpacity = 0;
    let moreAboutButtonOpacity = 0;
    //removing the button
    button.remove();

    
    //text box fade in
    let fadeInInterval = setInterval(() => {

        //increasing opacity
        textBoxOpacity += 0.1;

        //setting opacity to increased value
        textBox.style.opacity = textBoxOpacity;

        //if opacity 0.9 start fading in find out more button
        if(textBoxOpacity >= 0.9){

            //fade button in function
            let moreAboutButtonFadeInInterval = setInterval(() => {

                
                moreAboutButtonOpacity += 0.1;

                moreAboutButton.style.opacity = moreAboutButtonOpacity;

                //if button faded in stop both functions
                if(moreAboutButtonOpacity >= 0.9){
                    clearInterval(fadeInInterval);
                    clearInterval(moreAboutButtonFadeInInterval);
                }

            }, 30);
        }

    }, 50) 

});

