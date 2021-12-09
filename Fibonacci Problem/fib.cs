class Program
{
    public static void Main(string[] args)
    {
       int num0 = 0; 
       int num1 = 1; 

       for(int i=0; i<100; i++)
       {
           int newNum = num0 + num1; 

           num0 = num1; 
           num1 = newNum; 
           
           Console.Writeline(newNum); 
       } 
    }
}