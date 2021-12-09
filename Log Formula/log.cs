class Program
{
    public static void Main(string[] args)
    {
        var arr = new ArrayList();  

        for(int y = 1; y < 10; y++)
        {
            var x = Math.pow(3, y); 
            arr.add(x); 
        }

        Console.WriteLine(arr); 
    }
}