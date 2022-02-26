

# 微信小程序用户管理 demo

前后端分离

前端：微信小程序原生开发

后端：Python flask 框架 + mysql + redis

## 前端

![image-20220226100956388](figures\image-20220226100956388.png)

## 后端

### 基本配置

1. 安装并配置 python，mysql，redis 环境

2. 创建数据库，新建`user` 表，并添加如下字段，记得将`id` 设置为主键并且**自增**

   ![image-20220225200714639](figures\image-20220225200714639.png)

3. 在项目根目录打开Powershell，运行如下两条命令，启用虚拟环境

   ```shell
   python -m venv .venv
   ```

   ```
   .\.venv\Scripts\Activate.ps1
   ```


4. 安装依赖
   ```shell
   pip install -r requirements.txt
   ```

   ![image-20220226101352713](figures\image-20220226101352713.png)
   
4. 配置项目

   项目配置文件在 `app\config\setting.py`，具体参见注释



### 运行项目

1. 打开 redis 解压目录，双击运行`redis-server.exe` 启动redis 服务

2. 虚拟环境下运行 app.py

   ```shell
   python app.py
   ```

   ![image-20220225201003860](figures\image-20220225201003860.png)



## 测试

### 注册

![image-20220226101628242](figures\image-20220226101628242.png)

### 查看所有用户

![image-20220226101710151](figures\image-20220226101710151.png)

### 登录

![image-20220226101736573](figures\image-20220226101736573.png)

### 修改密码

![image-20220226101821233](figures\image-20220226101821233.png)

### 删除并查看所用用户

![image-20220226101910857](figures\image-20220226101910857.png)