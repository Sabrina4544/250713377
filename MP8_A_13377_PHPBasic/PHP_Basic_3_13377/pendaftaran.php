<?php
    echo "<h1>Pendaftaran Membership</h1>";
    echo '<form method="POST" action="">
            <p>Nama   : <br /><input type="text" name="nama" /></p>
            <p>NPM    : <br /><input type="text" name="npm" /></p>
            <p>Paket Membership   : <br />
                <select name ="paket">
                    <option value="">---Pilih Paket---</option>
                    <option value ="1">1 Bulan</option>
                    <option value ="3">3 Bulan</option>
                </select>
            </p>
            <button type="submit">Daftar</button>
        </form>';
    
    if ($_SERVER['REQUEST_METHOD'] === 'POST'){
        $nama = $_POST['nama'] ?? '';
        $npm = $_POST['npm'] ?? '';
        $paket = $_POST['paket'] ?? '';

        $message = array();
        $benefit = "";

        if(empty($nama) || empty($npm) || empty($paket)){
        $message[] = "Harap lengkapi semua data.";
    }

    }else{
        echo "Silahkan lengkapi formulir di atas";
    }
?>

