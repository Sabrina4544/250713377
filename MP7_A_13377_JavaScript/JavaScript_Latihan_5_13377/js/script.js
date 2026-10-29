function fn_ValForm() {
    var sMsg = "";
    var iUmur;
    var sKategori = "";
    var sPilihan = "";

    if (document.getElementById("nama").value == "") {
        sMsg += "\n* Nama tidak boleh kosong";
    }

    if (document.getElementById("email").value == "") {
        sMsg += "\n* Email tidak boleh kosong";
    } else {
        var polaEmail = /^[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$/;

        if (!polaEmail.test(document.getElementById("email").value)) {
            sMsg += "\n* Format Email tidak valid";
        }
    }

    if (document.getElementById("umur").value == "") {
        sMsg += "\n* Umur tidak boleh kosong";
    } else {
        iUmur = Number(document.getElementById("umur").value);

        if (isNaN(iUmur) || iUmur < 10 || iUmur > 18) {
            sMsg += "\n* Umur harus berupa angka antara 10 sampai 18 tahun";
        } else if (iUmur <= 14) {
            sKategori = "Kategori Junior";
        } else {
            sKategori = "Kategori Senior";
        }
    }

    if (document.getElementById("kategori").value == "") {
        sMsg += "\n* Pilihan Lomba tidak boleh kosong";
    }

    if (sMsg != "") {
        alert("Peringatan:\n" + sMsg);
        return false;
    } else {
        switch (document.getElementById("kategori").value) {
            case "C":
                sPilihan = "Cerdas Cermat";
                break;

            case "P":
                sPilihan = "Puisi";
                break;

            case "D":
                sPilihan = "Design poster";
                break;

            default:
                sMsg += "\n* Pilihan Lomba tidak tersedia";
        }

        if (sMsg != "") {
            alert("Peringatan:\n" + sMsg);
            return false;
        } else {
            alert("Terima kasih " +
                document.getElementById("nama").value +
                "! Anda terdaftar di lomba " +
                sPilihan + " (" + sKategori + ").");

            return true;
        }
    }
}
