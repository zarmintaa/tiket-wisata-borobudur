const { Transaction } = require("../models");

exports.getAllCountTransaction = async (req, res) => {
  const candiBorobudur = await Transaction.findAll({
    where: { candi: "Candi Borobudur" },
  });
  const candiPawon = await Transaction.findAll({
    where: { candi: "Candi Pawon" },
  });
  const candiMendut = await Transaction.findAll({
    where: { candi: "Candi Mendut" },
  });

  const lengthTransaction = [
    candiBorobudur.length,
    candiMendut.length,
    candiPawon.length,
  ];

  return res.status(200).json({
    message: "Success",
    data: lengthTransaction,
  });
};

exports.getAllTransaction = (req, res) => {
  Transaction.findAll().then((listTransaksi) => {
    res.status(200).json({ message: "Success", data: listTransaksi });
  });
};
