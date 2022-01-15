<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET,POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Conecta a la base de datos  con usuario, contraseña y nombre de la BD
$servidor = "localhost"; $usuario = "root"; $contrasenia = "1234"; $nombreBaseDatos = "partymus";
$conexionBD = new mysqli($servidor, $usuario, $contrasenia, $nombreBaseDatos);


// Consulta datos y recepciona una clave para consultar dichos datos con dicha clave
if (isset($_GET["consult"])){
    $sqlEvents = mysqli_query($conexionBD,"SELECT * FROM dorms WHERE id=".$_GET["consult"]);
    if(mysqli_num_rows($sqlEvents) > 0){
        $events = mysqli_fetch_all($sqlEvents,MYSQLI_ASSOC);
        echo json_encode($events);
        exit();
    }
    else{  echo json_encode(["success"=>0]); }
}
//borrar pero se le debe de enviar una clave ( para borrado )
if (isset($_GET["delete"])){
    $sqlEvents = mysqli_query($conexionBD,"DELETE FROM dorms WHERE id=".$_GET["delete"]);
    if($sqlEvents){
        echo json_encode(["success"=>1]);
        exit();
    }
    else{  echo json_encode(["success"=>0]); }
}
//Inserta un nuevo registro y recepciona en método post los datos de nombre y correo
if(isset($_GET["add"])){
    $data = json_decode(file_get_contents("php://input"));
    $name=$data->name;
    $location=$data->location;
        if(($name!="")&&($location!="")){
            
    $sqlEvents = mysqli_query($conexionBD,"INSERT INTO dorms(name, location) VALUES('$name', '$location') ");
    echo json_encode(["success"=>1]);
        }
    exit();
}
// Actualiza datos pero recepciona datos de nombre, correo y una clave para realizar la actualización
if(isset($_GET["update"])){
    
    $data = json_decode(file_get_contents("php://input"));

    $id=(isset($data->id))?$data->id:$_GET["update"];
    $name=$data->name;
    
    $sqlEvents = mysqli_query($conexionBD,"UPDATE dorms SET name='$name',location=='$location' WHERE id='$id'");
    echo json_encode(["success"=>1]);
    exit();
}
// Consulta todos los registros de la tabla Events
$sqlEvents = mysqli_query($conexionBD,"SELECT * FROM dorms ");
if(mysqli_num_rows($sqlEvents) > 0){
    $events = mysqli_fetch_all($sqlEvents,MYSQLI_ASSOC);
    echo json_encode($events);
}
else{ echo json_encode([["success"=>0]]); }


?>
