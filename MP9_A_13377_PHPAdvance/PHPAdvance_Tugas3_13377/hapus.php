
<?php
    require 'koneksi.php';

    $id = $_GET['id'] ?? '';

    if(empty($id) || !ctype_digit($id)){
        echo '<p style="color:red;">!! ID tidak valid. !!</p>';
    } else {
        $query = "DELETE FROM mahasiswa WHERE id = ?";
        $stmt = mysqli_prepare($conn, $query);
        mysqli_stmt_bind_param($stmt, "i", $id);
        mysqli_stmt_execute($stmt);

        if(mysqli_stmt_affected_rows($stmt) == 1){
            echo "Data berhasil dihapus.";
        } else {
            echo "Data tidak ditemukan.";
        }

        mysqli_stmt_close($stmt);
    }

    echo '<p><a href="index.php">Kembali</a></p>';
?>
