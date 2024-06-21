# ruby on rails 指令速查

## 创建rails项目步骤
```
# 换源加速
gem sources --add https://gems.ruby-china.com/ --remove https://rubygems.org/
bundle config mirror.https://rubygems.org https://gems.ruby-china.com

# 下载rails
gem install rails -v 7.0.2.3

# 创建项目
rails new --api --database=postgresql --skip-test rails-project

# 下载依赖
bundle install

# 启动服务
bundle exe rails server
```

## 安装第三方插件
### rspec 单元测试
```
# 安装单元测试
bin/rails generate rspec:install

# 创建测试文件
bin/rails generate rspec:model user

# 执行测试
bundle exec rspec
```

## 开发顺序
一般后端服务离不开CRUD，合适的顺序可以提高开发效率

### 1. 创建路由
```
# config/routes.rb
namespace :api do
  namespace :v1 do
    resources :user, only: [:create]
  end
end
```
### 2. 数据层
先建立数据结构，把大框架定下来。
```
# 创建 model
bin/rails g model user email:string name:string

# 更新数据库
bin/rails db:migrate

# 回滚数据库上一次操作（数据有误时操作）
bin/rails db:rollback step=1

# 重置数据库(危)
bin/rails db:migrate:reset 

# 测试环境创建数据库
RAILS_ENV=test bin/rails db:create

# 测试环境创建数据库
RAILS_ENV=test bin/rails db:migrate

```
 
### 3. 控制层
```
# 创建 controller
bin/rails g controller Api::V1::Users create
```

## 密钥管理

```
# 开发环境密钥
EDITOR="code --wait" rails credentials:edit

# 生产环境密钥
EDITOR="code --wait" rails credentials:edit --environment production

```

## 其他
 
```
# 查看路由
bin/rails routes 


```


# 秘钥管理

EDITOR="code --wait" bin/rails credentials:edit

EDITOR="code --wait" bin/rails credentials:edit --environment production

```
## 邮件功能
```
# 创建相关文件
bin/rails generate mailer User

# 调用方法
UserMailer.welcome_email(11).deliver
```
[更多文档, 英文](https://guides.rubyonrails.org/action_mailer_basics.html)
[更多文档, 中文](https://ruby-china.github.io/rails-guides/v4.1/action_mailer_basics.html)

# 访问接口
```
# post
curl -X POST http://127.0.0.1:3000/users

# get
curl http://127.0.0.1:3000/users/1
```