const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return BinhLuan.init(sequelize, DataTypes);
}

class BinhLuan extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maPhong: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Phong',
        key: 'id'
      },
      field:"ma_phong"
    },
    maNguoiBinhLuan: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'NguoiDung',
        key: 'id'
      },
      field:"ma_nguoi_binh_luan"
    },
   ngayBinhLuan: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field:"ngay_binh_luan"

    },
    noiDung: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field:"noi_dung"

    },
    saoBinhLuan: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field:"sao_binh_luan"
      
    }
  }, {
    sequelize,
    tableName: 'BinhLuan',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
          { name: "ma_phong" },
          { name: "ma_nguoi_binh_luan" },
        ]
      },
      {
        name: "ma_nguoi_binh_luan",
        using: "BTREE",
        fields: [
          { name: "ma_nguoi_binh_luan" },
        ]
      },
      {
        name: "ma_phong",
        using: "BTREE",
        fields: [
          { name: "ma_phong" },
        ]
      },
    ]
  });
  }
}
