# E-API(客户端)
[E-API官网](http://e-api.nodebook.top/#/)
## 部署说明
修改文件
#### 邮箱配置
```js
// config\config.default.js
// 邮箱配置
		email: {
			client: {
			host: 'smtp.qq.com',
			secureConnection: true,
			port: 465,
			auth: {
				user: '************@qq.com', // QQ 邮箱
				pass: '************' // QQ密钥
			}
			}
		}
```
#### 数据库配置
```js
// MongoDB数据库配置
        mongoose:{
            client: {
                url: 'mongodb://127.0.0.1:27017/cloudNew', // user是collection(数据库)名称
                options: {
                    useUnifiedTopology: true
                },  // 其他配置项
            }
        },
```
## 三、配套的后端代码：
https://github.com/cgq001/e-api-electron