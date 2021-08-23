// 게시글 내용과 이미지 경로 저장
module.exports = (sequelize, DataTypes) => {
    sequelize.define('post', {
        content: {
            type: DataTypes.STRING(140),
            allowNull: false,
        },
        img: {
            type: DataTypes.STRING(200),
            allowNull: true,
        }
    }, {
        timestamps: true,
        paranoid: true,
    })
};