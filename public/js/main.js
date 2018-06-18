$(document).ready(function() {
	var limit = 128; // Milliseconds

	// Whenever someone inputs data into the form
	$('#form').on('input', debounce(function () {
		// Prepare the post data
		var data = {};
		data['password'] = $('#form').find('input[name=password]').val();
		data[$('#csrf_token').attr('name')] = $('#csrf_token').val();

		// Request a password hash from the server
		var request = $.post(
			$('#form').attr('action'), // Action
			data, // POST data
			// Success
			function(response) {
				console.log(response.message)

				// Ensure that the CSRF token is updated
				$('#csrf_token').val(response.csrf_hash);

				// Show the password hash to the user
				$('#password_hash').html(response.password_hash);
			},
			'JSON' // Data type
		);
	}, limit));
});
