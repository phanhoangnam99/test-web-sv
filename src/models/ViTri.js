const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return ViTri.init(sequelize, DataTypes);
}

class ViTri extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tenViTri: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field:'ten_vi_tri'
    },
    tinhThanh: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field:'tinh_thanh'

    },
    quocGia: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field:'quoc_gia'

    },
    hinhAnh: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field:'hinh_anh'

    }
  }, {
    sequelize,
    tableName: 'ViTri',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
