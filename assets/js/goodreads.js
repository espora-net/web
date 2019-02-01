$(function(){
  // for the future CORS GoodReads API var url = 'https://www.goodreads.com/review/list/92994383.xml?v=2&shelf=espora&per_page=200&page=1&key=';
  var url = '/assets/92994383.xml';
  var books = $('.books');

  function loadBooks(url) {
    $.ajax({
      url: url,
      type: 'GET',
      dataType: "xml"
    })
    .done(function(xml) {
	$(xml).find("review book").each(function () {
	var book = $(this);
        books.append('<div class="2u"><span class="image fit"><img src="' + book.find("image_url").first().text() + '" alt="' + book.find("description").text() + '" />' + book.find("title").text() + '</span></div>');
	});      
    })
    .fail(function(){
      books.hide();
    });
  }
  loadBooks(url);
});
