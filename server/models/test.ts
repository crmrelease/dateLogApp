module.exports = ((sequelize, DataTypes)=>(
    sequelize.define('test',{
        test:{
            type:DataTypes.STRING(50),
            allowNull:false,
        }
    },{
        timestamps: true, paranoid:true, 
    })
))