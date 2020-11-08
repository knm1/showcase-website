$(document).ready(function () {
  $('[data-jarallax-element]').jarallax({
    speed: 0.2
  });

  var typed = new Typed('#typed',
    {
      typeSpeed: 50,
      strings: [
        "&gt; $ curl -i karstate.com<br/><span class=\"text-success\">Get all your reliable data</span><br/>" +
        "<br/>" +
        "&gt; $ that&#x2019;s it<br/>" +
        "<span class=\"text-success\">Yup, that&#x2019;s it.</span>"]
    }
  );
});
