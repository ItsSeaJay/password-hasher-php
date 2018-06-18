$(document).ready(function() {
	var limit = 128; // Milliseconds
	// Configure the function that perfoms the AJAX request in such a way that
	// it doesn't trigger too often
	var do_request = debounce(function() {
		// Prepare the post data
		var data = {};
		data['password'] = $('#form').find('input[name=password]').val();
		data[$('#csrf_token').attr('name')] = $('#csrf_token').val();

		// Request a password hash from the server
		// based on what the user input into the field
		var request = $.post(
			$('#form').attr('action'), // Action
			data, // POST data
			function(response) {
				// Ensure that the CSRF token is updated
				$('#csrf_token').val(response.csrf_hash);
				// Show the password hash to the user
				$('#password_hash').html(response.password_hash);
			},
			'JSON' // Data type
		);

		request.fail(function(response) {
			console.error(response);
			console.error(response.responseText);
		});
	}, limit);

	// Whenever someone inputs data into the form
	// Send a POST request to the database
	$('#form').on('input', do_request);

	// Whenever someone clicks the copy button
	// Add the contents of the hash to the clipboard
	$('button#copy').on('click', function() {
		// Create a temporary input element
		var temporary_input = $('<input>');
		// Add that element to the DOM
		$('body').append(temporary_input);
		temporary_input.val($('#password_hash').text()).select();
		document.execCommand('copy');
		temporary_input.remove();
	});
});
