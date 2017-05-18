<?php

$connect = mysqli_connect("localhost","root","","connect");
    $output=array();

//     $objdata=json_decode($name)

    $query="SELECT *FROM product WHERE name=name";

    $result = mysqli_query($connect ,$query);

    // echo $result;
    if(mysqli_num_rows($result)>0){
        while ($row=mysqli_fetch_array($result)){
            $output[]=$row;
        }
        echo json_encode($output);
    }

?>

