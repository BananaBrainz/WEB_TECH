<?php

	$dbhost = 'localhost';
	$dbuser = 'a0716406_tovars';
	$dbpass = 'root';
	$dbname = 'a0716406_tovars';
	$dblink = new mysqli($dbhost, $dbuser, $dbpass, $dbname);
	
	if ($dblink->connect_errno) {
		printf("Failed to connect to database");
		exit();
	}
	$sql = "INSERT INTO `messages` (`id`, `name`, `email`, `msg`) VALUES (NULL, '{$_POST['name']}', '{$_POST['email']}', '{$_POST['msg']}')";
	if ($dblink->query($sql) === TRUE) {
		echo "New record created successfully";
	} else {
		echo "Error: " . $sql . "<br>" . $dblink->error;
	}

	$dblink->close();
	
?>