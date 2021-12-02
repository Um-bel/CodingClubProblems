using System; 

public class loopint
{
    public static void Main(String[] args)
    {
        int input = 2532;
        Array output = []; 

        string str = input.ToString(); 

        int i = 0; 
        while(i < str.Length)
        {
            int single_output = str[i];
            output.Add(single_output); 
        }

        Console.WriteLine(output); 
    }
}
