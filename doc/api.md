
# api 规则
> 主要包括了前后台指定api接口的一些规则。

## endpoint 命名
> 名词

> method 表示行为

> 参数使用parameter而不是path parameter

## method 定义

>　GET    查询操作

>　POST    新建操作

>　PUT   更新操作

>　DELETE    删除操作


## cors 跨域
*  Access-Control-Allow-Origin : * （开发环境）
后台程序需要设置此项到 Response Header 中
*  生产环境根据具体情况指定

## 状态码

* 200
表示操作正常，业务逻辑正常处理并正确返回期望的数据。
* 3XX
(304 并且 reidirect 到login.html) 需要重新认证
* 4XX
> 如果有此类错误，按照我们预定的显示页面展示。现在已经有的页面包括400,401,403,404,405,410,415
* 500
> * 业务错误 返回JSON
> * 预期中系统错误 返回JSON
> * 其他系统错误 返回HTML，显示预定的500错误页面

## 错误处理规则
1. 常规错误
~~~js
{
  "requestURL": "localhost:8000/customer-notes/customer",
  "requestURL": "e89302-31ed-89ad-ad34edc980",
  "sessionId": "e89302-31ed-89ad-ad34edc980",
  "parameters": "{}",
  "errorType": "common",
  "errorMessage": "there are some error messages",
  "data": {

  }
}
~~~

2. 自定义错误
~~~js
{
  "requestURL": "localhost:8000/customer-notes/customer",
  "requestURL": "e89302-31ed-89ad-ad34edc980",
  "sessionId": "e89302-31ed-89ad-ad34edc980",
  "parameters": "{}",
  "errorType": "customized1",
  "errorMessage": {
    //some customized message here
  },
  "data": {

  }
}
~~~


## 设置content-type

* Request
> !. content-type : application/x-www-form-urlencoded
> 2. content-type : multipart/form-data
> 3. content-type : application/json

[GET], [DELETE]  application/x-www-form-urlencoded
[POST], [PUT] application/json

* Response
> content-type : application/json

<!-- * 文件上传下载
> content-type : multipart/form-data -->

## response 数据结构
~~~js
{
  这里是数据
}
~~~

## 接口文档
> 由后台程序员提供，目前使用的是swagger

## 接口测试
> 需要保证接口符合预期的工作。并且需要确认相关的细节是否与约定一致。使用 [postman](https://www.getpostman.com/) 可以比较方便的测试

## 超时设置(有需要时设置，非必要)
> 默认设置请求超时时间为5s，如果超时未响应，则当作错误处理。
> 可以被请求单独自定义覆盖

## Heart Beat （保持session活动的接口）
