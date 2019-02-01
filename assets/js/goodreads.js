$(function(){
  var url = 'https://crossorigin.me/https://www.goodreads.com/review/list_rss/92994383?key=3yng7ZCmInuRcXLjpbDyrJRYe_he__uLfNygmatNKCB3ZwFv&shelf=espora';
  var books = $('.books');

  function loadBooks(url) {
    $.ajax({
      url: url,
      type: 'GET',
      dataType: "xml"
    })
    .done(function(xml) {
	$(xml).find("channel item").each(function () {
	var book = $(this);
        books.append('<div class="4u"><span class="image fit">');
        books.append('<img src="' + book.find("book_medium_image_url").text() + '" alt="' + book.find("book_description").text() + '" />' + book.find("title").text());
        books.append('</span></div>');
	});      
    })
    .fail(function(){
      books.hide();
    });
  }
  loadBooks(url);
});
