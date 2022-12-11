// PBO (Pemrograman Berorientasikan Objek) ini lebih dominan diambil referensi nya dari tutorial OOP PHP

const PBO = [
  "Atribut == Properti, Method == Function",

  "Class adalah blueprint atau template dari sebuah blueprint",

  "Di dalam class ada atribut dan method",

  "Hak akses adalah bagaimana variabel atau bisa di pakai / digunakan",

  "Contoh instansiasi : $siswa = new Siswa(); .. Instansiasi adalah cara awal membuat objek dan juga salah satu cara untuk akses atribut dan method di dalam class",

  "3 hak akses diantaranya, public, private, protected",

  "Hak akses public adalah hak akses yang bisa diakses di dalam class itu sendiri, di luar class, dan bisa di akses dari class turunan",

  "Hak akses private adalah hak akses yang bisa diakses di dalam clas itu sediri, tidak bisa diakses diluar class, tidak bisa diakses di class turunannya",

  "Hak akses protected adalah hak akses yang bisa diakses di dalam class itu sendiri, tidak bisa diakses diluar class, bisa diakses oleh class turunannya",

  "Setiap bahasa pemrograman mempunyai syntax nya masing masing untuk mengakses scope yang ada di dalam class. Seperti PHP menggunakan kata kunci $this untuk mengakses atribut di dalam class ke dalam sebuah method",

  "Constructor adalah method yang akan dijalankan ketika sebuah class di instansiasi atau ketika class dibuat. Constructor bisa dibilang sebagai method pembuka awal ketika objek dibuat. Constructor bisa diakses atau diambil dari parent class ke child class",

  "Destructor adalah method yang akan dijalankan ketika sebuah objek sudah tidak lagi memanggil atribut dan method. Destructor bisa dibilang sebagai method penutup dari sebuah class. Destructor bisa diakses atau diambil dari parent class ke child class",

  "Atribut atau method parent class bisa diakses di class child. Setiap bahasa pemrogramaman memiliki caranya masing masing. Di PHP begini caranya : parent::nama_property, parent::nama_method()",

  "Static properti dan static method adalah properti atau method yang melekat pada class (Bukan object). Dengan keyword static (di PHP) kita sudah dapat static properti atau method. Static method bisa saja kita panggil diluar class tanpa melakukan instansiasi",

  "Enkapsulasi adalah konsep OOP yang membatasi data untuk bisa diakses diluar class atau di pewarisan class. Enkapsulasi memanfaatkan hak akses sebuah variabel atau method. Ada 3 hak akses (Sudah disebutkan diatas). Enkapsulasi memungkinkan kita untuk membatasi akses sebuah data. Contohnya adalah getter dan setter",

  "Inheritance adalah konsep OOP dengan mewariskan atau menurunkan class parent ke class child. Inheritance biasanya menggunakan keyword extends. Ketika class inheritance ke class lain. Maka class child memiliki semua atribut dan method yang ada di parent class",

  "Abstract class adalah konseop OOP yang dimana kita harus memaksa sebuah method atau atribut untuk diimplementasikan ketika class abstract di inheritance. Abstract class tidak dapat di instansiasi (untuk dijadikan object). Abstract class hanya bisa digunakan ketika di inherintance.",

  "",
];

const bahasaAssembly = {
  bit: "bit adalah binary digit yang hanya terdapat antara angka 0 dan 1 aja. Bit adalah satuan terkecil dalam komputasi digital. Semua data komputer disimpan dengan angka binary/biner",
  Byte: "1 Byte adalah 8 satuan bit.",
  perbedaan_Byte_dan_bit:
    "Byte mempunyai satuan yang besar (dari bit). Sedangkan bit merupakan satuan yang lebih kecil. ",
};
