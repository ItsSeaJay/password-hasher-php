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
		$response = array(
			'success' => FALSE,
			'message' => 'No response message specified',
			'csrf_hash' => $this->security->get_csrf_hash()
		);
	}

	public function get_parser_data()
	{
		$parser_data = array(
			'base_url' => base_url(),
			'index_page' => index_page()
		);

		return $parser_data;
	}
}
