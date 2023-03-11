document.addEventListener('DOMContentLoaded', () => {

    $(".content .page-header nav a").on("click", function (e) {
        e.preventDefault();
        const href = $(this).attr("href"); 
        $("html, body").animate({ scrollTop: $(href).offset().top }, 800);
      });

      $(".content .page-header a").on("click", function (e) {
        e.preventDefault();
        const href = $(this).attr("href"); 
        $("html, body").animate({ scrollTop: $(href).offset().top }, 800);
      });
});