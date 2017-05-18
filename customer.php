<?php
$connect = mysqli_connect("localhost", "root", "", "connect");
 
$result = mysqli_query($connect, "SELECT * FROM customer");
 
$data = array();
 
while ($row = mysqli_fetch_array($result)) {
  $data[] = $row;
}
    print json_encode($data);

?>
