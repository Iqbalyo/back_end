'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class absen_mahasiswas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  absen_mahasiswas.init({
    absen_id: DataTypes.INTEGER,
    absen_pertemuan_id: DataTypes.INTEGER,
    mahasiswa_id: DataTypes.INTEGER,
    dosen_id: DataTypes.INTEGER,
    matakuliah_id: DataTypes.INTEGER,
    data_beacon: DataTypes.STRING,
    device_id: DataTypes.STRING,
    device_info: DataTypes.STRING,
    network_info: DataTypes.STRING,
    matakuliah_nama: DataTypes.STRING,
    matakuliah_kode: DataTypes.STRING,
    kelas: DataTypes.STRING,
    pertemuan_ke: DataTypes.INTEGER,
    nim: DataTypes.STRING,
    nama: DataTypes.STRING,
    status: DataTypes.STRING,
    absen_by: DataTypes.STRING,
    absen_at: DataTypes.DATE,
    absen_metode: DataTypes.STRING,
    absen_from: DataTypes.STRING,
    ip_address: DataTypes.STRING,
    validasi_izin_at: DataTypes.DATE,
    pengajuan_izin_at: DataTypes.DATE,
    status_izin: DataTypes.STRING,
    keterangan_izin_ditolak: DataTypes.STRING,
    file_izin: DataTypes.STRING,
    lokasi: DataTypes.STRING,
    foto: DataTypes.STRING,
    user_agent: DataTypes.STRING,
    keterangan: DataTypes.STRING,
    semester: DataTypes.STRING,
    periode: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'absen_mahasiswas',
  });
  return absen_mahasiswas;
};