const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return DatPhong.init(sequelize, DataTypes);
}

class DatPhong extends Sequelize.Model {
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
      field:"ma_phong",
      references: {
        model: 'Phong',
        key: 'id'
      }
    },
    ngayDen: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field:"ngay_den"
    },
    ngayDi: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field:'ngay_di'
    },
    soLuongKhach: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field:'so_luong_khach'
    },
    maNguoiDung: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field:'ma_nguoi_dat',
      references: {
        model: 'NguoiDung',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'DatPhong',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
          { name: "ma_phong" },
          { name: "ma_nguoi_dat" },
        ]
      },
      {
        name: "ma_phong",
        using: "BTREE",
        fields: [
          { name: "ma_phong" },
        ]
      },
      {
        name: "ma_nguoi_dat",
        using: "BTREE",
        fields: [
          { name: "ma_nguoi_dat" },
        ]
      },
    ]
  });
  }
}
