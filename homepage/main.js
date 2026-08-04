const linkedin = document.querySelector(".linkedin_color");
const linkedinDiv = document.querySelector(".lbox");
const email = document.querySelector(".email_color");
const emailDiv = document.querySelector(".ebox");
const github = document.querySelector(".github_color");
const githubDiv = document.querySelector(".gbox");

linkedinDiv.addEventListener("mouseenter", function() {
    linkedin.style.visibility = "visible";
});

linkedinDiv.addEventListener("mouseleave", function() {
    linkedin.style.visibility = "hidden";
});

emailDiv.addEventListener("mouseenter", function() {
    email.style.visibility = "visible";
});

emailDiv.addEventListener("mouseleave", function() {
    email.style.visibility = "hidden";
});

githubDiv.addEventListener("mouseenter", function() {
    github.style.visibility = "visible";
});

githubDiv.addEventListener("mouseleave", function() {
    github.style.visibility = "hidden";
});
