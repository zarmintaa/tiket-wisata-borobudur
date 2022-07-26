"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface.bulkInsert("Candis", [
      {
        image: "/images/candi-borobudur.png",
        title: "Candi Borobudur",
        address:
          "Jl. Badrawati, Kw. Candi Borobudur, Borobudur, Kec. Borobudur, Kabupaten Magelang, Jawa Tengah 56553",
        video: "https://www.youtube.com/embed/tDuhIrzBjbQ",
        description:
          "Candi Borobudur (bahasa Jawa: ꦕꦤ꧀ꦝꦶ​ꦧꦫꦧꦸꦝꦸꦂ, translit. Candhi Båråbudhur) adalah sebuah candi Buddha yang terletak di Borobudur, Magelang, Jawa Tengah, Indonesia. Candi ini terletak kurang lebih 100 km di sebelah barat daya Semarang, 86 km di sebelah barat Surakarta, dan 40 km di sebelah barat laut Yogyakarta.",
        price_kid: "25000",
        price_adult: "50000",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        image: "/images/candi-mendut.jpg",
        title: "Candi Mendut",
        address:
          "Jl. Mayor Kusen, Sumberrejo, Mendut, Kec. Mungkid, Kabupaten Magelang, Jawa Tengah 56501",
        video: "https://www.youtube.com/embed/3wPCYAQkG_k",
        description:
          "Candhi Mendut adalah sebuah candi bercorak Buddha. Candi yang terletak di Desa Mendut, Jalan Mayor Kusen Kota Mungkid, Kabupaten Magelang, Jawa Tengah ini, letaknya berada sekitar 3 kilometer dari Candi Borobudur.7°36′17.17″S 110°13′48.01″E",
        price_kid: "20000",
        price_adult: "40000",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        image: "/images/candi-pawon.jpg",
        title: "Candi Pawon",
        address:
          "Brojonalan, Dusun 1, Wanurejo, Kec. Borobudur, Kabupaten Magelang, Jawa Tengah 56553",
        video: "https://www.youtube.com/embed/ezPDdNpLKls",
        description:
          "Candi Pawon merupakan tempat penimpanan abu jenazah Raja Indra ( 782 - 812 M ), ayah Raja Samarrattungga dari Dinasti Syailendra. Nama 'Pawon' sendiri, menurut sebagian orang, berasal dari kata pawuan yang berarti tempat menyimpan awu (abu). Dalam ruangan di tubuh Candi Pawon, diperkirakan semula terdapat Arca Bodhhisatwa, sebagai bentuk penghormatan kepada Raja Indra yang dianggap telah mencapai tataran Bodhisattva, maka dalam candi ditempatkan arca Bodhisatwva. Dalam Prasasti Karang Tengah disebutkan bahwa arca tersebut mengeluarkan wajra (sinar).",
        price_kid: "15000",
        price_adult: "30000",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
