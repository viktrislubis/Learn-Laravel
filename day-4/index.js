// Soal String
// Jawaban Soal 1
var words = ["JavaScript", "is", "awesome", "and", "I", "love", "it!"];
var sentence = words.join(" ");
console.log(sentence);

// Jawaban Soal 2
var sentence = "I am going to be Web Developer";
var words = sentence.split(" ");

var exampleFirstWord = words[0];
var secondWord = words[1];
var thirdWord = words[2];
var fourthWord = words[3];
var fifthWord = words[4];
var sixthWord = words[5];
var seventhWord = words[6];

console.log("First Word: " + exampleFirstWord);
console.log("Second Word: " + secondWord);
console.log("Third Word: " + thirdWord);
console.log("Fourth Word: " + fourthWord);
console.log("Fifth Word: " + fifthWord);
console.log("Sixth Word: " + sixthWord);
console.log("Seventh Word: " + seventhWord);

// Jawaban Soal 3
var sentence3 = "wow JavaScript is so cool";

var exampleFirstWord3 = sentence3.substring(0, 3);
var secondWord3 = sentence3.substring(4, 14);
var thirdWord3 = sentence3.substring(15, 17);
var fourthWord3 = sentence3.substring(18, 20);
var fifthWord3 = sentence3.substring(21, 25);

var firstWordLength = exampleFirstWord3.length;
var secondWordLength = secondWord3.length;
var thirdWordLength = thirdWord3.length;
var fourthWordLength = fourthWord3.length;
var fifthWordLength = fifthWord3.length;

console.log(
  "First Word: " + exampleFirstWord3 + ", with length: " + firstWordLength
);
console.log(
  "Second Word: " + secondWord3 + ", with length: " + secondWordLength
);
console.log("Third Word: " + thirdWord3 + ", with length: " + thirdWordLength);
console.log(
  "Fourth Word: " + fourthWord3 + ", with length: " + fourthWordLength
);
console.log("Fifth Word: " + fifthWord3 + ", with length: " + fifthWordLength);

// Soal Conditional
// Jawaban Soal if-else
var nama = "John";
var peran = "";

if (nama === "") {
  console.log("Nama harus diisi!");
} else if (peran === "") {
  console.log("Halo " + nama + ", Pilih peranmu untuk memulai game!");
} else {
  console.log("Selamat datang di Dunia Werewolf, " + nama);
  if (peran === "Penyihir") {
    console.log(
      "Halo Penyihir " +
        nama +
        ", kamu dapat melihat siapa yang menjadi werewolf!"
    );
  } else if (peran === "Guard") {
    console.log(
      "Halo Guard " +
        nama +
        ", kamu akan membantu melindungi temanmu dari serangan werewolf."
    );
  } else if (peran === "Werewolf") {
    console.log(
      "Halo Werewolf " + nama + ", Kamu akan memakan mangsa setiap malam!"
    );
  } else {
    console.log(
      "Peran yang kamu pilih tidak tersedia. Pilih peranmu untuk memulai game!"
    );
  }
}

// Soal Function
// Jawaban Soal 1
function teriak() {
  return "Halo Sanbers!";
}

console.log(teriak());

// Jawaban Soal 2
function kalikan(num1, num2) {
  return num1 * num2;
}

console.log(kalikan(4, 12));

// Jawaban Soal 3
function introduce(name, age, address, hobby) {
  return (
    "Nama saya " +
    name +
    ", umur saya " +
    age +
    " tahun, alamat saya di " +
    address +
    ", dan saya punya hobby yaitu " +
    hobby +
    "!"
  );
}

console.log(introduce("Agus", 30, "Jogja", "Gaming"));

// Soal Looping
// Jawaban Looping While

console.log("LOOPING PERTAMA");
var i = 2;
while (i <= 20) {
  console.log(i + " - I love coding");
  i += 2;
}

console.log("LOOPING KEDUA");
i = 20;
while (i >= 2) {
  console.log(i + " - I will become a mobile developer");
  i -= 2;
}
