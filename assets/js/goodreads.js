$(function(){
  // for the future CORS GoodReads API var url = 'https://www.goodreads.com/review/list/92994383.xml?v=2&shelf=espora&per_page=200&page=1&key=';
  var novel = '/assets/novel.xml';
  var business = '/assets/business.xml';
  var scifi = '/assets/scifi.xml';
  var biography = '/assets/biography.xml';
  var childrenteens = '/assets/children-teens.xml';
  var personaldevelopment = '/assets/personal-development.xml';

  function loadBooks(url, shelf, image) {
    $.ajax({
      url: url,
      type: 'GET',
      dataType: "xml"
    })
    .done(function(xml) {
	shelf.append('<div class="12u"><span class="image fit"><img src="images/' + image + '.jpg" alt="" /></span></div>');
	$(xml).find("review book").each(function () {
	  var book = $(this);
          shelf.append('<div class="1u"><span class="image fit"><a href="' + book.find("link").first().text() + '"><img src="' + book.find("image_url").first().text() + '" alt="' + book.find("title").text() + '" /></a></span></div>');
	});      
    })
    .fail(function(){
      books.hide();
    });
  }
	
  loadBooks(novel, $('.novel'), 'novel');
  loadBooks(business, $('.business'), 'business');
  loadBooks(scifi, $('.scifi'), 'scifi');
  loadBooks(biography, $('.biography'), 'biography');
  loadBooks(childrenteens, $('.childrenteens'), 'children-teens');
  loadBooks(personaldevelopment, $('.personaldevelopment'), 'personal-development');
});
