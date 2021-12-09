import System; 

class notInesh
{
    public static void IneshesEyes(String[] args) 
    {
        int num0 = 0; num1 = 1; 
        
        for(int i=0; i<100; i++) 
        {
            int newNum = num0 + num1; 
            num0 = num1; 
            num1 = newNum; 

            System.out.print(newNum); 
        }
    }
}
