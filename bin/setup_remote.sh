user=uhuh
function title {
  echo
  echo "###############################################################################"
  echo "## $1"
}
title '解压文件'
cd /home/$user/nginx/html
tar -zxvf dist.tar.gz

title '全部执行完毕'
