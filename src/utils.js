export const createSkillsDot = () => {
  var skills_dotted = document.querySelectorAll(".skills .progress");
  skills_dotted.forEach((skill) => {
    // Add the dotted spans if not already added
    if (!skill.querySelector(".dg")) {
      skill.insertAdjacentHTML(
        "beforeend",
        '<span class="dg"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>'
      );
    }

    let percentage = skill.getElementsByClassName("percentage")[0];

    // Add the "da" span only if it doesn't exist
    if (!percentage.querySelector(".da")) {
      percentage.insertAdjacentHTML(
        "beforeend",
        '<span class="da"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>'
      );
    }

    let width = skill.clientWidth;
    let da = percentage.querySelector(".da");
    da.style.width = `${width}px`;
  });
};

export const dotResize = () => {
  window.addEventListener("resize", () => {
    var skills_dotted = document.querySelectorAll(
      ".skills-list.dotted .progress"
    );
    skills_dotted.forEach((skill) => {
      let width = skill.clientWidth;
      let da = skill.querySelector(".da");
      if (da) {
        da.style.width = `${width + 1}px`;
      }
    });
  });
};

// Header
export const stickyNav = () => {
  let offset = window.scrollY;
  const sticky = document.querySelectorAll("header");
  sticky.forEach((sticky) => {
    if (sticky) {
      if (offset > 100) {
        sticky.classList.add("fixed");
        document.querySelector("body").classList.remove("background-enabled");
      } else {
        sticky.classList.remove("fixed");
        document.querySelector("body").classList.add("background-enabled");
      }
    }
  });
};

export const activeSection = (value) => {
  const sections = document.querySelectorAll(".section");
  const navLi = document.querySelectorAll(".top-menu ul li");
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("current-menu-item");
    if (li.getElementsByTagName("a")[0].getAttribute("href") === `#${current}`) {
      li.classList.add("current-menu-item");
    }
  });
};
