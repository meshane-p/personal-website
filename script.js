document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".animate-element");
  
    elements.forEach(function(element, index) {
      setTimeout(function() {
        element.classList.add("active");
      }, index * 300); 
    });
  });


  const textElement = document.getElementById("animated-text");
  const initialText = "My academic journey at Stony Brook includes working towards a Bachelor of Computer Science degree, which I began in August 2022 and anticipate completing in June 2026. Throughout my coursework, I've covered a wide range of subjects, such as Computer Science Principles, Introduction to Object-Oriented Programming, Data Structures and Algorithms, and Foundations of Computer Science. This experience has been instrumental in building a solid foundation in the field of computer science";
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
  const initialText2 = "In addition to my pursuit of a Bachelor of Computer Science degree at Stony Brook University, I am also working towards a Bachelor of Applied Mathematics, with an expected graduation date in June 2026. This academic journey, which I embarked on in August 2022, has included courses such as Calculus III With Applications, Applied Calculus IV: Differential Equations, Finite Mathematical Structures, and Introduction to Linear Algebra. These courses have provided me with a very strong foundation in applied mathematics and have expanded my knowledge and skills in this field"; 
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
  const initialText3 = "During my time at Stuyvesant High School, a specialized high school, I attended from September 2018 to June 2022. I pursued a rigorous academic path that included several Advanced Placement (AP) courses, such as AP Calculus BC, AP Macroeconomics, and AP Microeconomics. In addition to these courses, I had the opportunity to explore the world of computer science through an introductory program that introduced me to programming languages like Racket and NetLogo. This experience allowed me to develop a very strong foundation in computer science during my high school years"; 
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
  
const navbar = document.getElementById("navbar");
let prevScrollPos = window.pageYOffset;
  
window.addEventListener("scroll", () => {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
        navbar.style.top = "0";
    } else {
        navbar.style.top = `-${navbar.clientHeight}px`;
    }
    prevScrollPos = currentScrollPos;
  });


// Get all the "Learn More" buttons
const buttons = document.querySelectorAll('.learn-more-button');

// Loop through each button and add a click event listener
buttons.forEach(function (button) {
  button.addEventListener('click', function () {
    // Get the details element associated with this button
    const details = this.nextElementSibling;

    // Toggle the visibility of the details
    details.style.display = details.style.display === 'block' ? 'none' : 'block';
  });
});


  
  

  