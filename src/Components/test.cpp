#include <iostream>
#include <cmath>
 
using namespace std;
int decimalToBinary(int num);

int decimalToBinaryByRightShift(int num){
    int binary = 0 ;
    int i = 0 ;
    while(num > 0){
        int bBit = num & 1;
        binary = bBit * pow(10 , i++) + binary;
        num = num >> 1;
        
    }
    return binary;
}

int binaryToDecimal(int num){
    int decimal = 0 ; 
    int i = 0 ;
    while (num > 0)
    {
        int ld = num % 10;
        decimal = ld * pow(2, i++) + decimal;
        num /= 10;

        
    }
    return decimal;
    
}
int main(){
    int n = 10;
    int m  = 14;

    
    int b = decimalToBinary(n);
    
    cout<<b<<endl;
     long long bin = 1111111111;
    cout<<decimalToBinaryByRightShift(m)<<endl;
    cout<<binaryToDecimal(bin)<<endl;
    return 0;
}
int decimalToBinary(int num)
    {
        int binNum = 0;
        int i = 0;
        while(num>0){
            int bit = num%2;
            binNum += bit * pow (10, i++);
            num /= 2;
         }
        return binNum;

    }