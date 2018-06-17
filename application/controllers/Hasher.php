<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Hasher extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
		$this->load_assets();
	}

	public function index()
	{
		$parser_data = $this->get_parser_data();

		$this->parser->parse(
			'front_page.html',
			$parser_data
		);
	}

	public function hash()
	{
		$response = $this->prepare_response();

		if (isset($_POST['password']))
		{

		}
		else
		{
			$response['message'] = 'No password received from client';
		}

		$json = json_encode($repsonse);
		echo $json;
	}

	private function load_assets()
	{
		// Helpers
		$this->load->helper('security');
		$this->load->helper('url');
		// Libraries
		$this->load->library('parser');
	}

	private function prepare_response()
	{
		$response = array();
		$response['success'] = FALSE;
		$response['message'] = 'No response message specified';
		$response['csrf_hash'] = $this->security->get_csrf_hash();
		$response['csrf_token_name'] = $this->security->get_csrf_token_name();

		return $response;
	}

	private function get_parser_data()
	{
		$parser_data = array();
		$parser_data['base_url'] = base_url();
		$parser_data['index_page'] = index_page();
		$parser_data['csrf_hash'] = $this->security->get_csrf_hash();
		$parser_data['csrf_token_name'] = $this->security->get_csrf_token_name();
		$parser_data['form'] = $this->get_form($parser_data);

		return $parser_data;
	}

	private function get_form($parser_data = array())
	{
		$html = $this->parser->parse(
			'form.html', // View
			$parser_data,
			TRUE
		);

		return $html;
	}
}
