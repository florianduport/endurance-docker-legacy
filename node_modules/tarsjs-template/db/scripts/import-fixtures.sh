for filename in ../fixtures/*; do mongoimport -d mydb -c $filename  done
