const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return NguoiDung.init(sequelize, DataTypes);
}

class NguoiDung extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field:"pass_word"

    },
    phone: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    birthday: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field:"birth_day"
    },
    gender: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    role: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    hinhAnh: {
      type: DataTypes.TEXT,
      allowNull: true,
      field:'hinh_anh'

    }
  }, {
    sequelize,
    tableName: 'NguoiDung',
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
