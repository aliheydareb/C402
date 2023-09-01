using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C402
{
    public class Functions
    {
        public double P1(double num1, double num2)
        {
            double response = num1 + num2;
            return response;
        }

        public double P2(double num1, double num2)
        {
            double response = (num1 + num2) * (num1 - num2);
            return response;
        }

        public List<string> P3(string[] datas)
        {
            List<string> response = new List<string>();
            foreach (string item in datas)
            {
                if (item.Length < 4)
                {
                    response.Add(item);
                }
            }

            return response;
        }

        public List<string> P4(string[] datas)
        {
            List<string> response = new List<string>();
            foreach (string item in datas)
            {
                if (item.Length > 4)
                {
                    response.Add(item + "AZE");
                }
            }

            return response;
        }

        public List<string> P5(string[] datas)
        {
            List<string> response = new List<string>();
            foreach (string item in datas)
            {
                response.Add(item);
            }

            return response;
        }

        public string P6(string[] datas)
        {
            string response = "";
            foreach (string item in datas)
            {
                response += (item + " ");

            }

            return response;
        }

        public List<int> P7()
        {
            List<int> response = new List<int>();
            for (int i = 0; i <= 100; i++)
            {
                response.Add(i);
            }

            return response;
        }


        public List<int> P8()
        {
            List<int> response = new List<int>();
            for (int i = 0; i <= 100; i++)
            {
                if (i % 2 == 0)
                {
                    response.Add(i);
                }

            }

            return response;

        }


        public int P9()
        {
            int response = 0;
            for (int i = 0; i <= 100; i++)
            {
                if (i % 2 != 0)
                {
                    response += i;
                }
                
            }

            return response;
        }


        public List<int> P10()
        {
            List<int> response = new List<int>();
            for (int i = 11; i <= 100; i++)
            {
                if (i % 11 == 0)
                {
                    response.Add(i);
                }
            }

            return response;
        }


        public string P11(string[] datas)
        {
            string response = datas[0];

            return response;

           

        }
        public string P12(string[] datas)
        {
            int number = datas.Length - 1;
            string response = datas[number];
            return response;
        }

    }
}