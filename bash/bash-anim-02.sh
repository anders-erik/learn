clear
<<comment
echo -e "a"
echo -e "\033[1Ca"
echo -e "\033[2Ca"
echo -e "\033[3Ca"
echo -e "\033[4Ca"
echo -e "\033[5Ca"
echo -e "\033[6Ca"
echo -e "\033[7Ca"
echo -e "\033[8Ca"
echo -e "\033[9Ca"
echo -e "\033[10Ca"
echo -e "\033[11Ca"
echo -e "\033[12Ca"
echo -e "\033[13Ca"
echo -e "\033[14Ca"
echo -e "\033[15Ca"
echo -e "\033[16Ca"
echo -e "\033[17Ca"
echo -e "\033[18Ca"
echo -e "\033[19Ca"
echo -e "\033[20Ca"
echo -e "\033[21Ca"
comment


for i in {1..40}; do
	echo -e "\033[${i}C" "o"
done
