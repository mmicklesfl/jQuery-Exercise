$(document).ready(function() {
	let movies = [];

	// Check if movies are already in local storage
	if (localStorage.getItem('movies')) {
		movies = JSON.parse(localStorage.getItem('movies'));
		displayMovies();
	}

	// When form is submitted
	$('#movie-form').submit(function(e) {
		e.preventDefault();
		// Get input values
		const title = $('#title').val();
		const rating = $('#rating').val();
		
		// Validate inputs
		if (title.length < 2) {
			alert('Title must be at least 2 characters long!');
			return;
		}
		if (rating < 0 || rating > 10) {
			alert('Rating must be between 0 and 10!');
			return;
		}
		
		// Add movie to list
		movies.push({title: title, rating: rating});
		// Save to local storage
		localStorage.setItem('movies', JSON.stringify(movies));
		// Append to list
		$('#movie-list ul').append(`<li>${title} - ${rating} stars <button class="remove">Remove</button></li>`);
		// Clear form inputs
		$('#title').val('');
		$('#rating').val('5');
	});

	// When remove button is clicked
	$('#movie-list').on('click', '.remove', function() {
		const index = $(this).parent().index();
		movies.splice(index, 1);
		// Save to local storage
		localStorage.setItem('movies', JSON.stringify(movies));
		$(this).parent().remove();
	});

	// When sort by title button is clicked
	$('#sort-title-asc').click(function() {
		movies.sort(function(a, b) {
			const titleA = a.title.toUpperCase();
			const titleB = b.title.toUpperCase();
			if (titleA < titleB) {
				return -1;
			}
			if (titleA > titleB) {
				return 1;
			}
			return 0;
		});
		// Save to local storage
		localStorage.setItem('movies', JSON.stringify(movies));
		displayMovies();
	});

	// When sort by rating button is clicked
	$('#sort-rating-asc').click(function() {
		movies.sort(function(a, b) {
			return a.rating - b.rating;
		});
		// Save to local storage
		localStorage.setItem('movies', JSON.stringify(movies));
		displayMovies();
	});

	// When sort by title descending button is clicked
	$('#sort-title-desc').click(function() {
		movies.sort(function(a, b) {
			const titleA = a.title.toUpperCase();
			const titleB = b.title.toUpperCase();
			if (titleA > titleB) {
				return -1;
			}
			if (titleA < titleB) {
				return 1;
			}
			return 0;
		});
		// Save to local storage
		localStorage.setItem('movies', JSON.stringify(movies));
		displayMovies();
	});

	// When sort by rating descending button is clicked
	$('#sort-rating-desc').click(function() {
		movies.sort(function(a, b) {
			return b.rating - a.rating;
		});
		// Save to local storage
		localStorage.setItem('movies', JSON.stringify(movies));
		displayMovies();
	});

		// Function to display movies
        function displayMovies() {
            $('#movie-list ul').empty();
            for (let i = 0; i < movies.length; i++) {
                const title = movies[i].title;
                const rating = movies[i].rating;
                $('#movie-list ul').append(`<li>${title} - ${rating} stars <button class="remove">Remove</button></li>`);
            }
        }
    
    });
    