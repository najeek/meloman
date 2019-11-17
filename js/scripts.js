//Adaptive navigation bar\
document.addEventListener('DOMContentLoaded', () => {

  const navbarBurger = document.querySelectorAll('.navbar-burger');
  // Get all "navbar-burger" elements
  const allBurgers = Array.prototype.slice.call(navbarBurger, 0);

  // Validate if there are navbar burgers
  if (allBurgers.length > 0) {

      allBurgers.forEach(elem => {
          elem.addEventListener('click', () => {

              const target = elem.dataset.target,
                    mainTarget = document.getElementById(target);

              elem.classList.toggle('is-active');
              mainTarget.classList.toggle('is-active');

          });
      });
  }

});

// Tiles switcher for violin tutorials
function switchToAll() {
  removeActive();
  $("#all").addClass("is-active");
  $(".beginner").removeClass("is-hidden");
  $(".middle").removeClass("is-hidden");
  $(".advanced").removeClass("is-hidden");
}

function switchToBeginner() {
  hideAll();
  removeActive();
  $("#beginner").addClass("is-active");
  $(".beginner").removeClass("is-hidden");
}

function switchToMiddle() {
  hideAll();
  removeActive();
  $("#middle").addClass("is-active");
  $(".middle").removeClass("is-hidden");
}

function switchToAdvanced() {
  hideAll();
  removeActive();
  $("#advanced").addClass("is-active");
  $(".advanced").removeClass("is-hidden");
}

function hideAll() {
  $(".beginner").addClass("is-hidden");
  $(".middle").addClass("is-hidden");
  $(".advanced").addClass("is-hidden");
}

function removeActive() {
  $("li").each(function() {
      $(this).removeClass("is-active");
  });
}
//Create a function that returns a template of comment block to avoid repetition
const returnCommentBody = (name, text, time = "1") => {
  return `<div class='box'>
          <article class="media">
            <div class="media-left">
                <figure class="image is-64x64">
                    <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
                </figure>
            </div>
            <div class="media-content">
                <div class="content">
                    <p>
                        <strong>${name}</strong> <small>${time}min ago</small>
                        <br>${text}
                    </p>
                </div>
            </div>
          </article>
        </div>`
}


// Adding comments to the page
$(".feedback-btn").click(function() {
  let nameInput = $(".feedback-name").val();
  let feedbackText = $(".feedback-text").val();

  let feedbackContent = returnCommentBody(nameInput, feedbackText);

  //Validating both inputs to avoid appending empty feedbacks
  if (nameInput && feedbackText) {
      $(".feedback-box").append(feedbackContent);
      $(".feedback-name").removeClass("is-danger");
      $(".feedback-text").removeClass("is-danger");
  } else {
      $(".feedback-name").addClass("is-danger");
      $(".feedback-text").addClass("is-danger");
  }
  //Making both inputs empty after successful publishing a comment in order to avoid repetition 
  $(".feedback-name").val("")
  $(".feedback-text").val("")
})


// Dynamically generating comments for page
const userNames = [{
      name: 'Bill Gates',
      text: 'Trully amazing website with great tutorials, will start learning from tomorrow'
  },
  {
      name: 'Elon Musk',
      text: 'I would rather prefer this website instead of space exploration, if I saw it before'
  },
  {
      name: 'Donald Trump',
      text: 'Who wants to be a president of United States when there is a Meloman website?'
  },
];

$(document).ready(() => {
  for (let i = 0; i < userNames.length; i++) {
      $(".feedback-box").append(returnCommentBody(userNames[i].name, userNames[i].text, 30));
  }
})

//initializing animations library 
AOS.init();