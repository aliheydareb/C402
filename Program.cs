namespace C402
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Functions myclass = new Functions();
            double response1 = myclass.P1(2, 3);
            Console.WriteLine(response1);

            Console.WriteLine("response2:");

            double response2 = myclass.P2(7, 4);
            Console.WriteLine(response2);

            string[] myarray = new string[]
            {
             "salam","masin","buz","ev","kod","meymun","avtobus"
            };

            Console.WriteLine();
            Console.WriteLine("response3:");
            List<string> response3 = myclass.P3(myarray);
            foreach (string item in response3)
            {
                Console.WriteLine(item);
            }

            Console.WriteLine("response4:");

            List<string> response4 = myclass.P4(myarray);
            foreach (string item in response4)
            {
                Console.WriteLine(item);
            }

            Console.WriteLine("response5:");

            List<string> response5 = myclass.P5(myarray);
            foreach (string item in response5)
            {
                Console.WriteLine(item);
            }

            Console.WriteLine("response6:");

            string response6 = myclass.P6(myarray);
            Console.WriteLine(response6);



            Console.WriteLine("response7:");
            List<int> response7 = myclass.P7();
            foreach (int item in response7)
            {
                Console.WriteLine(item);
            }

            Console.WriteLine("response8:");
            List<int> response8 = myclass.P8();
            foreach (int item in response8)
            {
                Console.WriteLine(item);
            }

            Console.WriteLine("response9:");
            int response9 = myclass.P9();
            Console.WriteLine(response9);


            Console.WriteLine("response10:");
            List<int> response10 = myclass.P10();
            foreach (int item in response10)
            {
                Console.WriteLine(item);
            }

            Console.WriteLine("response11:");
            string response11 = myclass.P11(myarray);
            Console.WriteLine(response11);

            Console.WriteLine("response12:");
            string response12 = myclass.P12(myarray);
            Console.WriteLine(response12);


        }

    }
}