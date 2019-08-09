using System;
using PomodoroEngine;
using System.Media;
using System.Text;

namespace Pomodoro
{
    public class Program : INotifyObjekt
    {
        static void Main(string[] args)
        {
            var program = new Program();
            Console.ReadLine();
        }

        public Program()
        {
            var pomodoro = new PomodoroEngine.Pomodoro(this, 1);
            pomodoro.Start();
        }

        public void Tick(int minutes, int seconds)
        {
            var pomodoro2 = new PomodoroEngine.Pomodoro(this, 1);
            Console.Clear();
            if (seconds == 0 && minutes == 0)
            {
                Console.WriteLine($"Ta en pause!");
                PlaySong();
                Console.WriteLine(minutes + ":" + seconds.ToString("00"));
            }
            if (seconds == 0 && minutes == 0)
            {
                pomodoro2.Start();
            }
            Console.WriteLine(minutes + ":" + seconds.ToString("00"));
        }
        static void PlaySong()
        {
            var player = new SoundPlayer(@"C:\Users\Ibrahim\source\repos\Pomodoro\Pomodoro\Innspilling.wav");
            player.PlaySync();
        }
    }
}
