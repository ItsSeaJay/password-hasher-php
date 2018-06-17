$(document).ready(function() {
	// Get DOM elements
	var base_url = $('#base_url');
	var index_page = $('#index_page');
	var csrf_token = $('#csrf_token');
	var form = $('#form');
	var password_hash = $('#password_hash');
	var test = 0;

	form.on('input', function() {
		test += 1;

		// Prepare the post data
		var data = {};
		data['password'] = form.find('input[name=password]').val();
		data[csrf_token.attr('name')] = csrf_token.val();

		// Request a password hash from the server
		var request = $.post(
			form.attr('action'), // Action
			data, // POST data
			// Success
			function(response) { 
				console.log(response.password_hash);

				// Ensure that the CSRF token is updated
				csrf_token.val(response['csrf_hash']);

				// Show the password hash to the user
				password_hash.html(response.password_hash);
			},
			'JSON' // Data type
		);
	});
});
