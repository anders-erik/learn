width=$(tput cols)
height=$(tput lines)

space () {
	echo " "
}


for ((i=1;i<=height;i++)); do
	
	echo space $i
done
sleep .5



