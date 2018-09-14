# C++中int与string的相互转换
### 时间:20180914

## 一、int转string
1. C++11标准增加了全局函数std::to_string()  
  string to_string (int val);  
  string to_string (long val);  
  string to_string (long long val);  
  string to_string (unsigned val);  
  string to_string (unsigned long val);  
  string to_string (unsigned long long val);  
  string to_string (float val);  
  string to_string (double val);  
  string to_string (long double val);  
   ```
   注意:需要#include<string>
   ```
2. 采用sstream中定义的字符串流对象来实现
   ``` c++
   ostringstream os; //构造一个输出字符串流，流内容为空 
   int i = 12; 
   os << i; //向输出字符串流中输出int整数i的内容 
   cout << os.str() << endl; //利用字符串流的str函数获取流中的内容 

   //注意:需要 #include <sstream>
   ```
## 二、string转int
1. 采用标准库中atoi函数,对于其他类型也都有相应的标准库函数，比如浮点型atof(),long型atol()等等
   ``` c++
   string s = "12"; 
   int a = atoi(s.c_str());
   ```
2. 采用sstream头文件中定义的字符串流对象来实现转换
   ``` c++
   istringstream is("12"); //构造输入字符串流，流的内容初始化为“12”的字符串 
   int i; 
   is >> i; //从is流中读入一个int整数存入i中
   ```
## 三、字符数组转化成string类型
``` c
char ch [] = "ABCDEFG";
string str(ch);//也可string str = ch;

//或者
char ch [] = "ABCDEFG";
string str;
str = ch;//在原有基础上添加可以用str += ch;
```   
## 四、将string类型转换为字符数组
``` c
char buf[10];
string str("ABCDEFG");
int length=str.copy(buf,9);
str[length]='\0';

//或者
char buf[10];
string str("ABCDEFG");
strcpy(buf,str.c_str());
```  