<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    $nombre= (isset($_POST["nombre"])&& $_POST["nombre"] !="")? $_POST["nombre"]: "Falta Valor";
    $apellido= (isset($_POST["apellido"])&& $_POST["apellido"] !="")? $_POST["apellido"]: "Falta Valor";
    $fech= (isset($_POST["fech"])&& $_POST["fech"] !="")? $_POST["fech"]: "Falta Valor";
    $Artis= (isset($_POST["Artistaob"])&& $_POST["Artistaob"] !="")? $_POST["Artistaob"]: "Falta Valor";
    $zona= (isset($_POST["zona"])&& $_POST["zona"] !="")? $_POST["zona"]: "Falta Valor";
    $boletos= (isset($_POST["boletos"])&& $_POST["boletos"] !="")? $_POST["boletos"]: "Falta Valor";
    $lugar= (isset($_POST["lugar"])&& $_POST["lugar"] !="")? $_POST["lugar"]: "Falta Valor";
    $Ex1= (isset($_POST["Ex1"])&& $_POST["Ex1"] !="")? $_POST["Ex1"]: "Falta Valor";
    $Ex2= (isset($_POST["Ex2"])&& $_POST["Ex2"] !="")? $_POST["Ex2"]: "Falta Valor";
    $Ex3= (isset($_POST["Ex3"])&& $_POST["Ex3"] !="")? $_POST["Ex3"]: "Falta Valor";

    
    $bmax= "No se pueden mas boletos(max15)";
    if($boletos>15)
    {
        $boletos=15;
    }

    for($cont=0; $cont<$boletos; $cont++){
        echo'
        <center><table border="2" whith="80%"style="border-collapse:collapse;" cellpadding="30px" >
            <thead>
                <tr>
                        <th colspan="4">Boletos</th>
                </tr>
            </thead>
            <tbody>
                    <tr>
                        <td>Nombre:'; echo $nombre.'</td>
                        <td>Apellido:'; echo $apellido.'</td>
                        <td>Fecha:'; echo $fech.'</td>';
                        if($Artis=="Zoe")
                        {
                            echo "<td rowspan='3'><img src='zoei.jpg'alt='imz' width='360' height='225'></td>";
                        }
                        if($Artis=="TheWeeknd")
                        {
                            echo "<td rowspan='3'><img src='thewekndi.jpg'alt='imw' width='360' height='225'></td>";
                        }
                        if($Artis=="Jarabe de Palo")
                        {
                            echo "<td rowspan='3'><img src='jarabei.jpg'alt='imz' width='360' height='225'></td>";
                        }
                        if($Artis=="Bad Bunny")
                        {
                            echo "<td rowspan='3'><img src='badi.jpg'alt='imz' width='360' height='225'></td>";
                        }
                    echo '
                    </tr>
                    <tr>
                        <td>'; echo $lugar.'</td>
                        <td>'; echo $zona.'</td>
                        <td rowspan="2">Extras
                            <ul>';
                                if($Ex1=="Check pktcomi")
                                {
                                    echo "<li>$Ex1</li>";
                                }
                                if($Ex2=="Check bebidas")
                                {
                                    echo "<li>$Ex2</li>";
                                }
                                if($Ex3=="Check tdn1")
                                {
                                    echo "<li>$Ex3</li>";
                                }
                                echo'
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>';
                            if($lugar=="Auditorio")
                        {
                            echo "<td><img src='audito.jpg'alt='imau' width='360' height='225'></td>";
                        }
                        if($lugar=="Palacio de los Deportes")
                        {
                            echo "<td><img src='palai.jpg'alt='imau' width='360' height='225'></td>";
                        }
                        if($lugar=="Foro Sol")
                        {
                            echo "<td><img src='foroi.jpg'alt='imau' width='360' height='225'></td>";
                        }
                        if($lugar=="Teatro Metropolitan")
                        {
                            echo "<td><img src='teatri.jpg'alt='imau' width='360' height='225'></td>";
                        }
                        echo '
                        </td>
                        <td><img src="zonas.jpg"alt="imau" width="360" height="225"></td>
                    </tr>
                    <tr>';
                        if($Artis=="Zoe")
                        {
                            echo '<td colspan="4" align="center">Es raro el amor</td>';
                        }
                        if($Artis=="TheWeeknd")
                        {
                            echo '<td colspan="4" align="center">Baby I would die for u <3</td>';
                        }
                        if($Artis=="Jarabe de Palo")
                        {
                            echo '<td colspan="4" align="center">Helado Oscuro</td>';
                        }
                        if($Artis=="Bad Bunny")
                        {
                            echo '<td colspan="4" align="center">Yeyeyeye</td>';
                        }
                    echo'
                    </tr>
            </tbody>
        </table></center>';
    }
        if($boletos==15)
        {
            echo "<br>".$bmax;
        }

    ?>
</body>
</html>