const {
  Admin,
  Candi,
  Transaction,
  Feedback,
  UploadTransaction,
} = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// ini fungsi untuk login
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const admin = await Admin.findOne({ where: { username } });
    if (!admin) {
      return res.status(400).json({ message: "Admin not found" });
    }
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign(
      { id: admin.id, username, password },
      "supersecret",
      { expiresIn: "1h" }
    );

    if (req?.session) {
      req.session.token = token;
    }

    res.redirect("/");
  } catch (error) {
    res.status(500).json({ message: "error", error });
  }
};

// ini fungsi untuk halaman login
exports.pageLogin = (req, res, next) => {
  const token = req?.session?.token;
  if (token) {
    return res.redirect("/");
  }
  res.render("login", { title: "Login" });
};

// ini fungsi untuk halaman home
exports.pageHome = (req, res) => {
  res.render("index", { title: "Home" });
};

exports.pageTiket = (req, res) => {
  Candi.findAll().then((listCandi) => {
    res.render("tiket", { title: "Daftar Tiket", listCandi });
  });
};

exports.pageFeedback = (req, res) => {
  res.render("feedback", { title: "Feedback" });
};

// fungsi untuk logout
exports.logout = (req, res) => {
  req.session.destroy();
  res.redirect("/login");
};

exports.pageStatistik = (req, res) => {
  res.render("statistik", { title: "Statistik" });
};

exports.pageOrderTiket = (req, res) => {
  res.render("order-tiket", { title: "Order Tiket" });
};

exports.pageTransaksi = async (req, res) => {
  Transaction.findAll({ order: [["id", "DESC"]] }).then((listTransaksi) => {
    res.render("all-transaction", {
      title: "Transaksi",
      data: listTransaksi,
      angka: 0,
    });
  });
};

// ini fungsi untuk mengirim data ke order tiket
exports.createOrder = async (req, res) => {
  const { candi, hari, jam } = req.body;

  const getCandi = await Candi.findByPk(candi);

  res.render("order-tiket", {
    title: "Order Tiket",
    getCandi,
    nama_candi: getCandi.name,
    hari,
    jam,
  });
};

exports.createTranscation = (req, res) => {
  const {
    nama_candi,
    hari,
    jam,
    name,
    email,
    phone,
    jmlh_dewasa,
    jmlh_anak,
    harga_anak,
    harga_dewasa,
    no_identitas,
  } = req.body;

  let = biayaAnak = +harga_anak;
  let = biayaDewasa = +harga_dewasa;

  if (hari === "Sabtu" || "Minggu") {
    biayaAnak += 5000;
    biayaDewasa += 5000;
  }

  const totalBiayaAnak = jmlh_anak * biayaAnak;
  const totalBiayaDewasa = jmlh_dewasa * biayaDewasa;
  const totalBiaya = totalBiayaAnak + totalBiayaDewasa;

  Transaction.create({
    candi: nama_candi,
    hari,
    jam,
    nama: name,
    no_hp: phone,
    email,
    dewasa: jmlh_dewasa,
    anak: jmlh_anak,
    total_bayar: totalBiaya,
    no_identitas,
  }).then((transaction) => {
    res.redirect("/");
  });
};

exports.createFeedback = (req, res) => {
  const { name, category, phone, email, feedback } = req.body;

  Feedback.create({
    name,
    category,
    phone,
    email,
    feedback,
  }).then((feedback) => {
    res.redirect("/");
  });
};

exports.pageUploadTransaction = (req, res) => {
  res.render("upload-pembayaran", { title: "Upload Pembayaran" });
};

exports.upload = async (req, res) => {
  const { name, email, nomor_identitas } = req.body;

  const imageUrl = req.file.path;
  if (!imageUrl) {
    const error = new Error("No image provided.");
    error.statusCode = 422;
    throw error;
  }

  UploadTransaction.create({
    name,
    email,
    nomor_identitas,
    image: imageUrl,
  }).then((result) => {
    res.redirect("/");
  });
};

exports.uploadTransaction = (req, res) => {
  const { name, email, nomor_identitas } = req.body;

  const imageUrl = req.file.path;
  if (!imageUrl) {
    const error = new Error("No image provided.");
    error.statusCode = 422;
    throw error;
  }

  UploadTransaction.create({
    name,
    email,
    nomor_identitas,
    image: imageUrl,
  }).then((result) => {
    res.redirect("/");
  });
};

exports.pageMe = (req, res) => {
  console.log("HEELLOO");
  UploadTransaction.findAll().then((transactions) => {
    res.render("list-upload-transaction", {
      title: "List Upload Transaction",
      transactions,
    });
  });
};

exports.pageListUploadTransaction = (req, res) => {
  UploadTransaction.findAll().then((transactions) => {
    res.render("list-upload-pembayaran", {
      title: "List Upload Transaction",
      transactions,
    });
  });
};
