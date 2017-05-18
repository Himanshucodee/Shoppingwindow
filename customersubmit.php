<?php
$conn = new PDO("mysql:host=localhost;dbname=connect", "root", "");   
$_POST = json_decode(file_get_contents('php://input'), true);

       $ins_query=$conn->prepare("INSERT INTO customer (ID,name)
       values(:ID, :name)");
       $ins_query->bindParam(':ID', $_POST['ID']);
       $ins_query->bindParam(':name', $_POST['name']);
      
        $chk_ins=$ins_query->execute();
        echo "New record created successfully";

       
?>