let menu_button = document.getElementById("menu_button");
let menu = document.getElementById("menu");

let off_on = 0;

menu_button.addEventListener("mouseenter", () => {
    if (off_on == 0) {
        menu.style.display = "flex";

        menu.animate(
            [
                {
                    opacity: 0
                },
                {
                    opacity: 1
                }
            ],
            {
                duration: 500,
                fill: "forwards"
            }
        );
        
        off_on = 1;
    }   
});


function add_listener_fade_off(id) {
    let tmp = document.getElementById(id);

    tmp.addEventListener("mouseenter", () => {
        if (off_on == 1) {
            menu.animate(
                    [
                        {
                            opacity: 1
                        },
                        {
                            opacity: 0
                        }
                    ],
                    {
                        duration: 500,
                        fill: "forwards"
                    }
                );

            off_on = 2;
            setTimeout(() => {menu.style.display = "none"; off_on = 0}, 500);
        }
    });
}

add_listener_fade_off("block0");
add_listener_fade_off("block1");
add_listener_fade_off("block2");
add_listener_fade_off("block3");

let classes_icon = document.querySelectorAll(".classes");

for (let i = 0; i < classes_icon.length; i++) {
    classes_icon[i].addEventListener("click", () => {
        window.open('https://www.playlostark.com/en-us/game/classes');
    })
}

function reveal() {
    let elements = document.querySelectorAll(".reveal");
  
    for (let i = 0; i < elements.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = elements[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        elements[i].classList.add("active");
      }

      else {
        elements[i].classList.remove("active");
      }
    }
}


window.addEventListener("scroll", reveal);
reveal();

let current_slide = 0;
let circles = document.querySelectorAll(".circle");

circles[0].style.backgroundColor = "#fff";

let left_button = document.getElementById("left_button");
let right_button = document.getElementById("right_button");
let block3_img = document.getElementById("block3_img");
let margin_value = 300;
let new_margin_value = 0;
let base_value = 0;

left_button.addEventListener("click", () => {
    if (current_slide == 0) {
        block3_img.style.marginRight = "600px";

        for (let i = 0; i < circles.length; i++) {
            circles[i].style.backgroundColor = "rgba(255, 255, 255, .5)";
        }

        circles[2].style.backgroundColor = "#fff";
        current_slide = 2;
    }

    else {
        base_value = current_slide * margin_value;
        current_slide--;

        for (let i = 0; i < circles.length; i++) {
            circles[i].style.backgroundColor = "rgba(255, 255, 255, .5)";
        }
        
        new_margin_value = base_value - margin_value;
        block3_img.style.marginRight = new_margin_value + "px";
        circles[current_slide].style.backgroundColor = "rgba(255, 255, 255, 1)";
    }
});

right_button.addEventListener("click", () => {
    if (current_slide == 2) {
        block3_img.style.marginRight = "0px";

        for (let i = 0; i < circles.length; i++) {
            circles[i].style.backgroundColor = "rgba(255, 255, 255, .5)";
        }

        circles[0].style.backgroundColor = "#fff";
        current_slide = 0;
    }

    else {
        base_value = current_slide * margin_value;
        current_slide++;

        for (let i = 0; i < circles.length; i++) {
            circles[i].style.backgroundColor = "rgba(255, 255, 255, .5)";
        }
        
        new_margin_value = base_value + margin_value;
        block3_img.style.marginRight = new_margin_value + "px";
        circles[current_slide].style.backgroundColor = "rgba(255, 255, 255, 1)";
    }
});


