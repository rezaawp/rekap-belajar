// Fungsi encode
function encode(str) {
  // Buat sebuah objek dari kelas JavaScript 'Crypto'
  let crypto = new Crypto();

  // Encode string menggunakan metode SHA-256 dan kembalikan hasilnya
  return crypto.subtle.digest("SHA-256", str);
}

// Fungsi decode
function decode(hash) {
  // Buat sebuah array kosong untuk menampung karakter dari hash
  let decoded = [];

  // Loop untuk setiap byte dalam hash
  for (let i = 0; i < hash.byteLength; i++) {
    // Tambahkan karakter dari byte ke dalam array
    decoded.push(String.fromCharCode(hash.getByte(i)));
  }

  // Gabungkan semua elemen dalam array menjadi sebuah string dan kembalikan hasilnya
  return decoded.join("");
}

// Contoh penggunaan fungsi encode dan decode
let original = "Hello World!";
let encoded = encode(original);
let decoded = decode(encoded);

console.log(original); // Hello World!
console.log(encoded); // Uint8Array [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33]
console.log(decoded); // Hello World!
