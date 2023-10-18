document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".animate-element");
  
    elements.forEach(function(element, index) {
      setTimeout(function() {
        element.classList.add("active");
      }, index * 300); 
    });
  });


  const textElement = document.getElementById("animated-text");
  const initialText = "My name is Meshane Peiris. I am a sophomore at Stony Brook University. I am currently dedicated to my pursuit of dual bachelor's degrees in computer science and applied mathematics. With over five years of experience as an educator at Royal Test Prep, I have had the privilege of teaching mathematics and computer science to students spanning grades three through twelve. This teaching experience has honed my analytical and problem-solving skills, equipping me with the ability to tackle complex challenges in both mathematical and computer science domains";
  let animationIndex = 0;
  let addDot = true;
  
  function toggleDot() {
      if (addDot) {
          textElement.textContent = initialText + ".".repeat(animationIndex);
          animationIndex++;
          if (animationIndex > 3) {
              addDot = false;
              animationIndex = 2;
          }
      } else {
          textElement.textContent = initialText + ".".repeat(animationIndex);
          animationIndex--;
          if (animationIndex < 0) {
              addDot = true;
              animationIndex = 1;
          }
      }
  }
  
  setInterval(toggleDot, 500); // Adjust the interval as needed

  const textElement2 = document.getElementById("animated-text2"); 
  const initialText2 = "My journey in computer science began with a strong curiosity to understand the digital world. Throughout my academic pursuits, I've developed a solid foundation in programming languages like Python, Java, HTML, CSS, and JavaScript. I'm enthusiastic about solving challenging problems and exploring the endless possibilities that technology offers. With a dedication to continuous learning, I look forward to applying my skills and knowledge to contribute to innovative projects in the ever-evolving field of computer science and its subsidaries such as mathematics"; 
  let animationIndex2 = 0; 
  let addDot2 = true; 
  
  function toggleDot2() {
      if (addDot2) {
          textElement2.textContent = initialText2 + ".".repeat(animationIndex2);
          animationIndex2++;
          if (animationIndex2 > 3) {
              addDot2 = false;
              animationIndex2 = 2;
          }
      } else {
          textElement2.textContent = initialText2 + ".".repeat(animationIndex2);
          animationIndex2--;
          if (animationIndex2 < 0) {
              addDot2 = true;
              animationIndex2 = 1;
          }
      }
  }
  
  setInterval(toggleDot2, 500); 

  const textElement3 = document.getElementById("animated-text3"); 
  const initialText3 = "Beyond academics and coding, I'm deeply committed to community service. As a Litter Ambassador with NYC Parks, I actively contribute to environmental conservation by promoting cleanliness in public parks, especially during challenging times like the peak of the COVID-19 pandemic. I firmly believe in the importance of giving back to our communities and aspire to leverage my technical skills to address real-world issues and make a meaningful difference to the environment and the world around me"; 
  let animationIndex3 = 0; 
  let addDot3 = true; 
  
  function toggleDot3() {
      if (addDot3) {
          textElement3.textContent = initialText3 + ".".repeat(animationIndex3);
          animationIndex3++;
          if (animationIndex3 > 3) {
              addDot3 = false;
              animationIndex3 = 2;
          }
      } else {
          textElement3.textContent = initialText3 + ".".repeat(animationIndex3);
          animationIndex3--;
          if (animationIndex3 < 0) {
              addDot3 = true;
              animationIndex3 = 1;
          }
      }
  }
  
  setInterval(toggleDot3, 500); 
  

  

  