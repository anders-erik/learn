clear

echo -e "\e[10;10H"
echo -e "10 10"
sleep 1

echo -e "\e[20;20H"
echo -e '\033[50D\033[30C My Text Goes Here'
echo -e "20 20"
sleep 1

echo ""
echo -e "\033 a"
echo -e "\033[50D b"


echo -e "\033[50D\033 c"
echo -e "\033[50D\033[30C d"


