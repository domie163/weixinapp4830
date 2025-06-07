import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'
import sequelize from './sequelize'

// 学习资料
const XuexiziliaoModel = sequelize.define('XuexiziliaoModel', {
	id: {
		type: DataTypes.BIGINT,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		comment: '主键id'
	},
	ziliaobianhao: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '资料编号'
	},
	ziliaomingcheng: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '资料名称'
	},
	ziliaoleixing: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '资料类型'
	},
	ziliaojianjie: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '资料简介'
	},
	xiangguantupian: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '相关图片'
	},
	xiangguanshipin: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '相关视频'
	},
	xiazailianjie: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '下载链接'
	},
	faburiqi: {
		type: DataTypes.DATEONLY,
		allowNull: true,
		get() {
            return moment(this.getDataValue('faburiqi')).format('YYYY-MM-DD')
        },
		comment: '发布日期'
	},
	thumbsupnum: {
		type: DataTypes.INTEGER,
		defaultValue: 0,
		allowNull: true,
		comment: '赞'
	},
	crazilynum: {
		type: DataTypes.INTEGER,
		defaultValue: 0,
		allowNull: true,
		comment: '踩'
	},
	clicktime: {
		type: DataTypes.DATE,
		allowNull: true,
		get() {
            return moment(this.getDataValue('clicktime')).format('YYYY-MM-DD HH:mm:ss')
        },
		comment: '最近点击时间'
	},
	price: {
		type: DataTypes.FLOAT,
		defaultValue: 0,
		allowNull: true,
		comment: '价格'
	},
	addtime: {
  		type: DataTypes.DATE,
  		defaultValue: DataTypes.NOW,
    	allowNull: false,
    	get() {
            return moment(this.getDataValue('addtime')).format('YYYY-MM-DD HH:mm:ss')
        },
		comment: '添加时间'
	}
}, {
	timestamps: false,
	freezeTableName: true,
	tableName: 'xuexiziliao'
})

export default XuexiziliaoModel
