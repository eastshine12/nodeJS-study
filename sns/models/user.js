// 사용자 정보를 저장하는 모델
module.exports = (sequelize, DataTypes) => {
    sequelize.define('user', {
        email: {
            type: DataTypes.STRING(40),
            allowNull: false,
            unique: true,
        },
        nick: {
            type: DataTypes.STRING(15),
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        provider: {
            type: DataTypes.STRING(10),
            allowNull: false,
            defaultValue: 'local',  // 기본 로컬 로그인
        },
        snsId: {
            type: DataTypes.STRING(30),
            allowNull: true,
        }
    }, {
        tumestamps: true,
        paranoid: true,
    })
};