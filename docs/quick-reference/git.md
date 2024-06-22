# Git 命令速查
## 项目准备
```
git config --global user.name "yourname"
git config --global user.email "youremail"
git remote add origin <url>
```
## 基础用法
```
# 查看文件状态
git status

# 添加文件到暂存
git add .

# 提交
git commit -m "message"

# 跳过暂存直接提交
git commit -am "message"

# 撤销上一次 commit，然后生成一个新的 commit。
git commit --amend -m "new commit message"

# 不修改 commit 信息
git commit --amend --no-edit

# 推送远端
git push -u origin master
```

## 回退某一版本
```
#（默认） --mixed 未提交的内容以及reset后新差异，都会被放进工作区。
git reset <HEAD>

# 保留工作区和暂存区中未提交的内容，并把重置 HEAD 所带来的新的差异放进暂存区。
git reset --soft <HEAD>

# 工作区和暂存区会被完全重置为和指定 HEAD 位置相同的内容。
git reset --hard <HEAD>
```

## 分支 branch
```
# 分支改名
git branch -M <new_branch_name>

# 删除本地分支
git branch -d <branch_name>

# 删除远端分支
git push origin --delete <branch_name>
```

## 移除文件 
```
# 从历史中移除文件
git filter-branch --force --index-filter 'git rm --cached --ignore-unmatch ./src/fileName.vue' --prune-empty --tag-name-filter cat -- --all
```

## [更多命令](https://www.bookstack.cn/read/git-tutorial/README.md)