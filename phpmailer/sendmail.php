<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'path/to/PHPMailer/src/Exception.php';
require 'path/to/PHPMailer/src/PHPMailer.php';
require 'path/to/PHPMailer/src/SMTP.php';

  $mail = new PHPMailer(true)
  $mail-> CharSet = 'UTF-8';
  $mail-> setLanguage('ru', './language/'); 
  $mail-> IsHTML(true);

  // от кого
  $mail-> setFrom('info@.guru', 'Василий');
  $mail-> addAddress('thonny02@mail.ru');
  $mail-> Subject = 'Привет!';

  // ТЕЛО ПИСЬМА
  $body = '<h1>Встречайте письмо!</h1>';

  if(trim(!empty($_POST['name']))){
    $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
  }
  if(trim(!empty($_POST['email']))){
    $body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
  }
  if(trim(!empty($_POST['message']))){
    $body.='<p><strong>Сообщение:</strong> '.$_POST['message'].'</p>';
  }

  $mail->Body = $body;

  if(!$mail->send()) {
    $message = 'Ошибка';
  } else {
    $message = 'Данные отправлены!';
  }

  $response = ['message' => $message];

  header('Content-type: application/json');
  echo json_encode($response);
?>

