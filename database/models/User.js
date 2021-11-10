module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        created_at: {type: DataTypes.DATE, defaultValue: sequelize.literal('CURRENT_TIMESTAMP')},
        updated_at: {type: DataTypes.DATE, defaultValue: sequelize.literal('CURRENT_TIMESTAMP')},
        name: {type: DataTypes.STRING},
        wallet: {type: DataTypes.STRING}
    }, {
        timestamps: false
    })

    return User
}