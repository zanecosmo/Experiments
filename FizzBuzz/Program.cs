using System;

namespace FizzBuzz
{
    class Program
    {
        static void Main(string[] args)
        {
             //print numbers from 1 to 100 (for loop?)
             //for multiples of three, print "Fizz"
             //multiples of 5 print "Buzz"
             //multiples of three and fiv, "FizzBuzz"

            for (int i = -50; i < 51; i++)
            {
                Console.WriteLine(
                    i % 5 == 0
                    ? i % 3 == 0 ? "FizzBuzz" : "Fizz"
                    : i % 3 == 0 ? "Buzz" : i
                    );
            }
        }
    }
}
