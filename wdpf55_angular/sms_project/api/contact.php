<?php
include_once('db_config.php');

$postdata = file_get_contents("php://input");
$result= json_decode($postdata);

if(isset($result->name) && isset($result->mail) && isset($result->subject) && isset($result->message)){


$name = $result->name;
$email = $result->mail;
$subject = $result->subject;
$message = $result->message;


$db->query("INSERT INTO `complain`(`id`, `name`, `email`, `subject`, `message`, `date`) VALUES (NULL,'$name','$email','$message','$subject',NOW() )");


if($db->affected_rows>0){
echo  json_encode(['status'=>"Successfully Inserted"]);

}
}else{
    echo json_encode(['status'=>"Nop fields can be blank"]);
}


?>