<?php
include 'db_config.php';
$products = [];

$sql = "SELECT * FROM tblcourse";
if($result = $db->query($sql))
{
	$i = 0;
	while($row = $result->fetch_assoc())
	{
		$products[$i]['ID'] = $row['ID'];
		$products[$i]['courses_name'] = $row['courses-name'];
		$products[$i]['p_date'] = $row['p-date'];
		$products[$i]['discription'] = $row['discription'];
		$products[$i]['Upload_path'] = $row['Upload-path'];
		$i++;
	}
	echo json_encode(['data'=>$products]);
}
else
{
	http_response_code(404);
}

 	