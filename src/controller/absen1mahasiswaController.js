const { absen_mahasiswas, sequelize } = require("../models");


const findAllabsen = async (req, res) => {
  try {
    const { id } = req.params;

    // Query data unik berdasarkan mata kuliah dengan agregasi untuk status
    const data = await absen_mahasiswas.findAll({
      attributes: [
        "matakuliah_nama",
        [sequelize.fn("SUM", sequelize.literal(`CASE WHEN status = 'H' THEN 1 ELSE 0 END`)), "hadir"],
        [sequelize.fn("SUM", sequelize.literal(`CASE WHEN status = 'I' THEN 1 ELSE 0 END`)), "izin"],
        [sequelize.fn("SUM", sequelize.literal(`CASE WHEN status IS NULL THEN 1 ELSE 0 END`)), "tanpaKeterangan"],
      ],
      where: { nim: id },
      group: ["matakuliah_nama"], // Kelompokkan berdasarkan nama mata kuliah
    });

    if (!data || data.length === 0) {
      return res.status(404).json({
        error: "Tidak ada data absensi untuk NIM tersebut",
      });
    }

    res.json({
      data,
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({
      error: "Server error",
    });
  }
};

module.exports = { findAllabsen };
