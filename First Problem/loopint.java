import System; 

class loopint
{
    public static void Main(String[] args)
    {
        int num = 2352; 
        int[] arr = new int[4];

        String str = num.toString(); 

        for(int i = 0; str.length(); i++)
        {
            int string = str.charAt(i); 

            arr.push(string); 
        }
        System.out.println(arr);

    }
}
