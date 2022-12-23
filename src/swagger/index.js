/**
 * @swagger
 * /api/auth/signup:
 *  post:
 *      tags: [Auth]
 *      parameters:
 *      - in: body
 *        name: model
 *        schema:
 *           type: object
 *           properties:
 *             id:
 *               type: integer
 *             name:
 *               type: string
 *             email:
 *               type: string
 *             password:
 *               type: string
 *             phone:
 *               type: string
 *             birthday:
 *               type: string
 *             gender:
 *               type: boolean
 *             role:
 *               type: string
 *      responses:
 *          200: 
 *              description: Success   
 */
/**
 * @swagger
 * /api/auth/signin:
 *  post:
 *      tags: [Auth]
 *      parameters:
 *      - in: body
 *        name: model
 *        schema:
 *           type: object
 *           properties:
 *             email:
 *               type: string
 *             password:
 *               type: string
 *            
 *      responses:
 *          200: 
 *              description: Success   
 */


/**
 * @swagger
 * /api/binh-luan:
 *  get:
 *      tags: [BinhLuan]
 *     
 *             
 *            
 *      responses:
 *          200: 
 *              description: Success   
 */

/**
 * @swagger
 * /api/binh-luan:
 *  post:
 *      tags: [BinhLuan]
 *      parameters:
 *      - in: header
 *        name: token
 *        schema:
 *          type: input
 *      - in: body
 *        name: model
 *        schema:
 *          type: object
 *          properties:
 *             id:
 *               type: integer
 *             maPhong:
 *               type: integer
 *             maNguoiBinhLuan:
 *               type: integer
 *             ngayBinhLuan:
 *               type: string
 *             noiDung:
 *               type: string
 *             saoBinhLuan:
 *               type: integer
 *       
 *            
 *      responses:
 *          200: 
 *              description: Success   
 */

/**
 * @swagger
 * /api/binh-luan/{id}:
 *  put:
 *      tags: [BinhLuan]
 *      parameters:
 *      - in: header
 *        name: token
 *        schema:
 *          type: string
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *      - in: body
 *        name: model
 *        schema:
 *          type: object
 *          properties:
 *             id:
 *               type: integer
 *             maPhong:
 *               type: integer
 *             maNguoiBinhLuan:
 *               type: integer
 *             ngayBinhLuan:
 *               type: string
 *             noiDung:
 *               type: string
 *             saoBinhLuan:
 *               type: integer
 *       
 *            
 *      responses:
 *          200: 
 *              description: Success   
 */

/**
 * @swagger
 * /api/binh-luan/{id}:
 *  delete:
 *      tags: [BinhLuan]
 *      parameters:
 *      - in: header
 *        name: token
 *        schema:
 *          type: string
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *      
 *            
 *      responses:
 *          200: 
 *              description: Success   
 */


/**
 * @swagger
 * /api/binh-luan/lay-binh-luan-theo-phong/{MaPhong}:
 *  get:
 *      tags: [BinhLuan]
 *      parameters:
 *    
 *      - in: path
 *        name: MaPhong
 *        schema:
 *          type: string
 *        required: true
 *     
 *       
 *            
 *      responses:
 *          200: 
 *              description: Success   
 */

/**
 * @swagger
 * /api/dat-phong:
 *  get:
 *      tags: [DatPhong]
 *     
 *             
 *            
 *      responses:
 *          200: 
 *              description: Success   
 */

/**
 * @swagger
 * /api/dat-phong:
 *  post:
 *      tags: [DatPhong]
 *      parameters:
 *    
 *      - in: body
 *        name: model
 *        schema:
 *          type: object
 *          properties:
 *             id:
 *               type: integer
 *             maPhong:
 *               type: integer
 *             ngayDen:
 *               type: string
 *             ngayDi:
 *               type: string
 *             soLuongKhach:
 *               type: integer
 *             maNguoidung:
 *               type: integer
 *       
 *             
 *            
 *      responses:
 *          200: 
 *              description: Success   
 */

/**
 * @swagger
 * /api/dat-phong/{id}:
 *  get:
 *      tags: [DatPhong]
 *      parameters:
 *    
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *     
 *     
 *             
 *            
 *      responses:
 *          200: 
 *              description: Success   
 */


/**
 * @swagger
 * /api/dat-phong/{id}:
 *  put:
 *      tags: [DatPhong]
 *      parameters:
 *     
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *      - in: body
 *        name: model
 *        schema:
 *          type: object
 *          properties:
 *             id:
 *               type: integer
 *             maPhong:
 *               type: integer
 *             ngayDen:
 *               type: string
 *             ngayDi:
 *               type: string
 *             soLuongKhach:
 *               type: integer
 *             maNguoiDung:
 *               type: integer
 *       
 *            
 *      responses:
 *          200: 
 *              description: Success   
 */


/**
 * @swagger
 * /api/dat-phong/{id}:
 *  delete:
 *      tags: [DatPhong]
 *      parameters:
 *     
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *      
 *            
 *      responses:
 *          200: 
 *              description: Success   
 */


/**
 * @swagger
 * /api/dat-phong/lay-theo-nguoi-dung/{MaNguoiDung}:
 *  get:
 *      tags: [DatPhong]
 *      parameters:
 *    
 *      - in: path
 *        name: MaNguoiDung
 *        schema:
 *          type: string
 *        required: true
 *     
 *       
 *            
 *      responses:
 *          200: 
 *              description: Success   
 */


/**
 * @swagger
 * /api/users:
 *  get:
 *      tags: [NguoiDung]
 *     
 *             
 *            
 *      responses:
 *          200: 
 *              description: Success   
 */

/**
 * @swagger
 * /api/users:
 *  post:
 *      tags: [NguoiDung]
 *      parameters:
 *     
 *      - in: body
 *        name: model
 *        schema:
 *           type: object
 *           properties:
 *             id:
 *               type: integer
 *             name:
 *               type: string
 *             email:
 *               type: string
 *             password:
 *               type: string
 *             phone:
 *               type: string
 *             birthday:
 *               type: string
 *             gender:
 *               type: boolean
 *             role:
 *               type: string
 *       
 *            
 *      responses:
 *          200: 
 *              description: Success   
 */



/**
 * @swagger
 * /api/users/{id}:
 *  put:
 *      tags: [NguoiDung]
 *      parameters:
 *      - in: path
 *        name: id
 *        schema:
 *           type: string
 *        required: true     
 *      - in: body
 *        name: model
 *        schema:
 *           type: object
 *           properties:
 *             id:
 *               type: integer
 *             name:
 *               type: string
 *             email:
 *               type: string
 *             password:
 *               type: string
 *             phone:
 *               type: string
 *             birthday:
 *               type: string
 *             gender:
 *               type: boolean
 *             role:
 *               type: string
 *       
 *            
 *      responses:
 *          200: 
 *              description: Success   
 */




/**
 * @swagger
 * /api/users/{id}:
 *  delete:
 *      tags: [NguoiDung]
 *      parameters:
 *    
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *      
 *            
 *      responses:
 *          200: 
 *              description: Success   
 */

/**
 * @swagger
 * /api/users/{id}:
 *  get:
 *      tags: [NguoiDung]
 *      parameters:
 *    
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *     
 *     
 *             
 *            
 *      responses:
 *          200: 
 *              description: Success   
 */



/**
 * @swagger
 * /api/users/phan-trang-tim-kiem:
 *  get:
 *      tags: [NguoiDung]
 *      parameters:
 *    
 *      - in: query
 *        name: pageIndex
 *        schema:
 *          type: integer
 *      - in: query
 *        name: pageSize
 *        schema: 
 *          type: integer
 *      - in: query
 *        name: keyword
 *        schema:
 *          type: string
 *     
 *     
 *             
 *            
 *      responses:
 *          200: 
 *              description: Success   
 */

/**
 * @swagger
 * /api/users/search/{TenNguoiDung}:
 *  get:
 *      tags: [NguoiDung]
 *      parameters:
 *    
 *      - in: path
 *        name: TenNguoiDung
 *        schema:
 *          type: string
 *     
 *     
 *     
 *             
 *            
 *      responses:
 *          200: 
 *              description: Success   
 */


/**
 * @swagger
 * /api/users/upload-avatar:
 *  post:
 *      summary: 
 *         chưa dùng được, vui lòng dùng postman để thay thế
 *      tags: [NguoiDung]
 *      parameters:
 *    
 *      - in: header
 *        name: token
 *        schema:
 *          type: string
 *      - in: formData
 *        type: file
 *      - in: formData
 *        name: maNguoiDung
 *        type: string
 *     
 *     
 *             
 *            
 *      responses:
 *          200: 
 *              description: Success   
 */


/**
 * @swagger
 * /api/phong-thue:
 *  get:
 *      tags: [Phong]
 *     
 *             
 *            
 *      responses:
 *          200: 
 *              description: Success   
 */

/**
 * @swagger
 * /api/phong-thue:
 *  post:
 *      tags: [Phong]
 *      parameters:
 *      - in: header
 *        name: token
 *        schema:
 *               type: string
 *        required: true
 *      - in: body
 *        name: model
 *        schema:
 *           type: object
 *           properties:
 *             id:
 *               type: integer
 *             tenPhong:
 *               type: string
 *             khach:
 *               type: integer
 *             phongNgu:
 *               type: integer
 *             giuong:
 *               type: integer
 *             phongTam:
 *               type: integer  
 *             moTa:
 *               type: string
 *             giaTien:
 *               type: integer
 *             mayGiat:
 *               type: boolean
 *             banLa:
 *               type: boolean
 *             tivi:
 *               type: boolean
 *             dieuHoa:
 *               type: boolean
 *             wifi:
 *               type: boolean
 *             bep:
 *               type: boolean
 *             doXe:
 *               type: boolean
 *             hoBoi:
 *               type: boolean
 *             banUi:
 *               type: boolean
 *             maViTri:
 *               type: integer
 *             hinhAnh:
 *               type: string
 *      responses:
 *          200: 
 *              description: Success   
 */

/**
 * @swagger
 * /api/phong-thue:
 *  put:
 *      tags: [Phong]
 *      parameters:
 *      - in: header
 *        name: token
 *      - in: path
 *        name: id
 *        schema:
 *               type: integer
 *        required: true
 *       
 *      - in: body
 *        name: model
 *        schema:
 *           type: object
 *           properties:
 *             id:
 *               type: integer
 *             tenPhong:
 *               type: string
 *             khach:
 *               type: integer
 *             phongNgu:
 *               type: integer
 *             giuong:
 *               type: integer
 *             phongTam:
 *               type: integer  
 *             moTa:
 *               type: string
 *             giaTien:
 *               type: integer
 *             mayGiat:
 *               type: boolean
 *             banLa:
 *               type: boolean
 *             tivi:
 *               type: boolean
 *             dieuHoa:
 *               type: boolean
 *             wifi:
 *               type: boolean
 *             bep:
 *               type: boolean
 *             doXe:
 *               type: boolean
 *             hoBoi:
 *               type: boolean
 *             banUi:
 *               type: boolean
 *             maViTri:
 *               type: integer
 *             hinhAnh:
 *               type: string
 *      responses:
 *          200: 
 *              description: Success   
 */

/**
 * @swagger
 * /api/phong-thue/{id}:
 *  delete:
 *      tags: [Phong]
 *      parameters:
 *      - in: header
 *        name: token
 *        schema:
 *          type: string
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *      
 *            
 *      responses:
 *          200: 
 *              description: Success   
 */



/**
 * @swagger
 * /api/phong-thue/{id}:
 *  get:
 *      tags: [Phong]
 *      parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *             
 *            
 *      responses:
 *          200: 
 *              description: Success   
 */




/**
 * @swagger
 * /api/phong-thue/lay-phong-theo-vi-tri:
 *  get:
 *      tags: [Phong]
 *      parameters:
 *      - in: query
 *        name: maViTri
 *        schema:
 *          type: string
 *             
 *            
 *      responses:
 *          200: 
 *              description: Success   
 */



/**
 * @swagger
 * /api/phong-thue/phan-trang-tim-kiem:
 *  get:
 *      tags: [Phong]
 *      parameters:
 *    
 *      - in: query
 *        name: pageIndex
 *        schema:
 *          type: integer
 *      - in: query
 *        name: pageSize
 *        schema: 
 *          type: integer
 *      - in: query
 *        name: keyword
 *        schema:
 *          type: string
 *     
 *     
 *             
 *            
 *      responses:
 *          200: 
 *              description: Success   
 */

/**
 * @swagger
 * /api/phong-thue/upload-hinh-phong:
 *  post:
 *      summary: 
 *         chưa dùng được, vui lòng dùng postman để thay thế
 *      tags: [Phong]
 *      parameters:
 *    
 *      - in: header
 *        name: token
 *        schema:
 *          type: string
 *      - in: formData
 *        type: file
 *      - in: formData
 *        name: maPhong
 *        type: string
 *     
 *     
 *             
 *            
 *      responses:
 *          200: 
 *              description: Success   
 */



/**
 * @swagger
 * /api/vi-tri:
 *  get:
 *      tags: [ViTri]
 *     
 *             
 *            
 *      responses:
 *          200: 
 *              description: Success   
 */

/**
 * @swagger
 * /api/vi-tri:
 *  post:
 *      tags: [ViTri]
 *      parameters:
 *      - in: header
 *        name: token
 *        schema:
 *          type: input
 *      - in: body
 *        name: model
 *        schema:
 *          type: object
 *          properties:
 *             id:
 *               type: integer
 *             tenViTri:
 *               type: string
 *             tinhThanh:
 *               type: string
 *             quocGia:
 *               type: string
 *             hinhAnh:
 *               type: string
 *          
 *       
 *            
 *      responses:
 *          200: 
 *              description: Success   
 */


/**
 * @swagger
 * /api/vi-tri/{id}:
 *  put:
 *      tags: [ViTri]
 *      parameters:
 *      - in: header
 *        name: token
 *        schema:
 *          type: string
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *      - in: body
 *        name: model
 *        schema:
 *          type: object
 *          properties:
 *             id:
 *               type: integer
 *             tenViTri:
 *               type: string
 *             tinhThanh:
 *               type: string
 *             quocGia:
 *               type: string
 *             hinhAnh:
 *               type: string
 *          
 *       
 *            
 *      responses:
 *          200: 
 *              description: Success   
 */


/**
 * @swagger
 * /api/vi-tri/{id}:
 *  delete:
 *      tags: [ViTri]
 *      parameters:
 *      - in: header
 *        name: token
 *        schema:
 *          type: string
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *      
 *            
 *      responses:
 *          200: 
 *              description: Success   
 */


/**
 * @swagger
 * /api/vi-tri/{id}:
 *  get:
 *      tags: [ViTri]
 *      parameters:
 *    
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *     
 *     
 *             
 *            
 *      responses:
 *          200: 
 *              description: Success   
 */



/**
 * @swagger
 * /api/vi-tri/phan-trang-tim-kiem:
 *  get:
 *      tags: [ViTri]
 *      parameters:
 *    
 *      - in: query
 *        name: pageIndex
 *        schema:
 *          type: integer
 *      - in: query
 *        name: pageSize
 *        schema: 
 *          type: integer
 *      - in: query
 *        name: keyword
 *        schema:
 *          type: string
 *     
 *     
 *             
 *            
 *      responses:
 *          200: 
 *              description: Success   
 */


/**
 * @swagger
 * /api/vi-tri/upload-hinh-vitri:
 *  post:
 *      summary: 
 *         chưa dùng được, vui lòng dùng postman để thay thế
 *      tags: [ViTri]
 *      parameters:
 *    
 *      - in: header
 *        name: token
 *        schema:
 *          type: string
 *      - in: formData
 *        type: file
 *      - in: formData
 *        name: maViTri
 *        type: string
 *     
 *     
 *             
 *            
 *      responses:
 *          200: 
 *              description: Success   
 */
