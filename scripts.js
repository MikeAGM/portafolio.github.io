window.addEventListener("scroll", function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var sections = document.querySelectorAll("section");
    
    sections.forEach(function(section) {
        var sectionTop = section.offsetTop;
        var sectionHeight = section.offsetHeight;
        var scrollPercent = (scrollTop - sectionTop) / sectionHeight;
        
        // Apply color transitions based on scroll percentage
        if (scrollPercent >= 0.6) {
            section.classList.add("dark");
            section.classList.remove("light", "mid");
        } else if (scrollPercent >= 0.2 && scrollPercent < 0.6) {
            section.classList.add("mid");
            section.classList.remove("light", "dark");
        } else {
            section.classList.add("light");
            section.classList.remove("mid", "dark");
        }
    });

    // Change the entire body background color for a global effect
    var bodyScrollPercent = scrollTop / document.body.scrollHeight;
    if (bodyScrollPercent >= 0.6) {
        document.body.style.backgroundColor = "#333";
        document.body.style.color = "#f5f5f5";
    } else if (bodyScrollPercent >= 0.2 && bodyScrollPercent < 0.6) {
        document.body.style.backgroundColor = "#dddddd";
        document.body.style.color = "#444";
    } else {
        document.body.style.backgroundColor = "#f7f7f7";
        document.body.style.color = "#333";
    }
});
