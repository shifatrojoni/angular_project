<?php
include 'db_config.php';
$products = [];

$sql = "SELECT * FROM teacher";
if($result = $db->query($sql))
{
	$i = 0;
	while($row = $result->fetch_assoc())
	{
		$products[$i]['ID'] = $row['ID'];
		$products[$i]['teacher_name'] = $row['teacher_name'];
		$products[$i]['t_date'] = $row['t_date'];
		$products[$i]['discription'] = $row['discription'];
		$products[$i]['upload_path'] = $row['upload_path'];
		$i++;
	}
	echo json_encode(['data'=>$products]);
}
else
{
	http_response_code(404);
}
