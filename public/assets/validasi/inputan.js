function update_notif(jenis) {
  $(".modal-content")
    .removeClass("errorbox")
    .removeClass("successbox")
    .removeClass("infobox")
    .addClass(jenis);
};

function set_error(msg) {
    update_notif("errorbox");
    $(".modal-title").html("Terjadi Kesalahan!");
    $("#modal-msg").html(msg);
    $("#myModal").modal("show");
};

function validasi_teks(input) {
  $key       = input.which;
  if(
      $key>=65 && $key<=90 || 
      $key>=97 && $key<=122 ||
      $key==32 || $key==8 || $key==0 || $key==13
      ) {return true;} else {
    return false;
}
  // 65 - 90  => A - Z
  // 97 - 122 => a - z
  // 32 => Spasi
  // 8  => Backspace
  // 0  => Panah : atas, bawah, kiri, kanan
  // 13 => Enter
};

function validasi_number(input) {
  $key = input.which;
  if(
      $key>=48 && $key<=57 ||
      $key==32 || $key==8 || $key==0 || $key==13
    ) {return true;} else {
    return false;
  }
};

function validasi_dial(input) {
  $key = input.which;
  if(
      $key>=48 && $key<=57 ||
      $key==8 || $key==0 || $key==13 ||
      $key==43 || $key==42 || $key==35 || $key==45 // + * # -
    ) {return true;} else {
    return false;
  }
};

function validasi_username(input) {
  $key = input.which;
  if(
      $key!=32
    ) {return true;} else {
    return false;
  }
};

function validasi_nilai(input) {
	$valueBefore = input.originalTarget.value;
	$key = input.which;
	if($key>=48 && $key<=57 || $key==32 || $key==8 || $key==0 || $key==13 || ($key>=37 && $key<=40) || $key==46) {
		if ($key>=48 && $key<=57) {
			if($valueBefore.length==2 && $valueBefore!=10)
				return false; // block nilai diatas 100
			else if($valueBefore.length==2 && $valueBefore==10 && $key!=48) return false;
		};
		return true;
	} else return false; 
}

function validasi_ipk(input) {
    $valueBefore = input.originalTarget.value;
    $key = input.which;
    if(($valueBefore=="4." && $key!=48) || ($valueBefore=="4.0" && $key!=48)) {
      return false;
    };
    if($valueBefore=="4.00" && $key==8) { // Hapus value | Antisipasi 4.xx ; x!=0
      input.originalTarget.value = "";
      return true;
    };
    // Inputan Control // eg: Panah, Del, Hapus, Enter
    if($key==32 || $key==8 || $key==0 || $key==13)
        return true;
    // Validasi jam
    if($valueBefore.length==0 && ($key<48 || $key>52)) //Jika jam yang diinput <0 atau >4 | eg: -1.00 atau 5.00 | 0.00 diizinin karena mana tau ada MHS baru
        return false; else
      // Untuk auto tambah simbol ':'
    if($valueBefore.length==1) { //Key58 = :
      input.originalTarget.value = $valueBefore+".";
    };
    if($key>=48 && $key<=58) {
      if($valueBefore.length==0 && $key==52) input.originalTarget.value = "4.00"; // IPK: 4.00
      return true;
    } else {
      return false;
    }
};

function cleanText($text) {
  $cleanText = $text.replace(/ +(?= )/g,'');
  return $cleanText;
}