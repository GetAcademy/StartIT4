using System.Timers;

namespace PomodoroEngine
{
    public class Pomodoro
    {
        private int _timeLeftInSeconds;
        private readonly int _startTimeInMinutes;
        private readonly INotifyObjekt _notifyObjekt;
        private readonly Timer _timer = new Timer(1000);

        public Pomodoro(INotifyObjekt notifyObjekt, int startTimeInMinutes)
        {
            _timer.Elapsed += TimerElapsed;
            _notifyObjekt = notifyObjekt;
            _startTimeInMinutes = startTimeInMinutes;
            Reset();
        }

        private void TimerElapsed(object sender, ElapsedEventArgs e)
        {
            _timeLeftInSeconds--;
            var minutes = _timeLeftInSeconds / 60;
            var seconds = _timeLeftInSeconds - minutes * 60;
            _notifyObjekt.Tick(minutes, seconds);
        }

        public void Start()
        {
            _timer.Start();
        }

        public void Pause()
        {
            _timer.Stop();
        }

        public void Reset()
        {
            _timeLeftInSeconds = 60 * _startTimeInMinutes;
        }
    }
}