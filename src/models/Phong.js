const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Phong.init(sequelize, DataTypes);
}

class Phong extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tenPhong: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field:"ten_phong"
    },
    khach: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    phongNgu: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field:"phong_ngu"
    },
    phongTam: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field:"phong_tam"
    },
    moTa: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field:"mo_ta"
    },
    giaTien: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field:"gia_tien"
    },
   
    mayGiat: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field:"may_giat"
    },
    banLa: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field:"ban_la"
    },
    tivi: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    dieuHoa: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field:"dieu_hoa"
    },
    wifi: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    giuong: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    bep: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    doXe: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field:"do_xe"
    },
    hoBoi: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field:"ho_boi"
    },
    banUi: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field:"ban_ui"
    },
    hinhAnh: {
      type: DataTypes.TEXT,
      allowNull: true,
      field:"hinh_anh"
    },
   
    maViTri: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field:"ma_vi_tri",
      references: {
        model: 'ViTri',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'Phong',
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
     
      {
        name: "ma_vi_tri",
        using: "BTREE",
        fields: [
          { name: "ma_vi_tri" },
        ]
      },
    ]
  });
  }
}
