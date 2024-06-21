# 常用指令速查
## Linux

### 修改用户密码
```
# 使用 passwd 命令直接修改当前用户密码，执行命令后，系统会要求你输入新的密码两次进行确认。请注意，在输入密码时，不会显示任何字符或星号，这是正常的安全特性。
$ passwd


# 要修改用户密码，你可以使用 passwd 命令，并提供要更改密码的用户名。
$ passwd <用户名>


# 例如，要修改用户名为 "linuxUser" 的用户密码，执行以下命令：
$  passwd linuxUser
```

## shell脚本删除 \r

```
# 执行.sh文件时出现 \r提示
$ sed -i 's/\r//' test.sh
```

## Git
### 准备
```
git init 
git config --global user.name "yourname"
git config --global user.email "youremail"
git remote add origin <url>
```
### 基础用法
```
# 查看文件状态
git status

# 添加文件到暂存
git add 

# 提交
git commit  -m "message"
# 跳过暂存直接提交
git commit  -am "message"

# 撤销上一次 commit，然后生成一个新的 commit。
git commit --amend -m "new commit message"
# 不修改 commit 信息
git commit --amend --no-edit
```
### 回退某一版本
```
#（默认） --mixed 未提交的内容以及reset后新差异，都会被放进工作区。
git reset <HEAD>

# 保留工作区和暂存区中未提交的内容，并把重置 HEAD 所带来的新的差异放进暂存区。
git reset --soft <HEAD>

# 工作区和暂存区会被完全重置为和指定 HEAD 位置相同的内容。
git reset --hard <HEAD>
```
[更多](https://www.bookstack.cn/read/git-tutorial/README.md)