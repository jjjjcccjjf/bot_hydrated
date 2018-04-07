<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Login extends CI_Controller {

  function __construct()
  {
    parent::__construct();

  }

  public function attempt($login_type)
  {
    $email = $this->input->post('email');
    $password = $this->input->post('password');

    if($user = $this->login_model->verifyCredentials($email, $password, $login_type)){
      $this->login_model->setSession($user, $login_type);

      $url = $this->login_model->createRedirectURL($login_type);

      custom_response(200, ['message' => 'Login success', 'code' => 'ok', 'url' => $url], $this);
    } else {
      custom_response(200, ['message' => 'Invalid username or password', 'code' => 'unauthorized'], $this);
    }
  }

  public function logtfout()
  {
    $this->session->sess_destroy();
    redirect('admin');
    die();
  }

  public function logout()
  {
    $this->session->sess_destroy();
    redirect('dashboard');
    die();
  }

}
