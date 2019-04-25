using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class WaveSpawner : MonoBehaviour
{

    #region FunctionCalls

    void Start()
    {
        CountDownTimer = Random.Range(0.2f, 1f);
    }

    
    void Update()
    {
        StartCoroutine(Spawn());
    }

    #endregion FunctionCalls

    #region Variables

    bool WaveStarted = false;
    int MinEnemyCount = 2;
    int MaxEnemyCount = 5;
    int EnemyCount;
    public static int DeadEnemiesThisRound = 0;
    int WaveNumber = 0;
    float CountDownTimer;
    float CountDown;
    public GameObject MyEnemy;
    public Transform MySpawn;
    public Text EnemyCounter;

    #endregion Variables

    #region Functions

    IEnumerator Spawn()
    {
        if (Input.GetKeyDown(KeyCode.Space)&& !WaveStarted && !PlayerBehaviour.IsDead)
        {
            WaveStarted = true;
            EnemyCount = Random.Range(MinEnemyCount, MaxEnemyCount+1);
            MaxEnemyCount+=2;
            MinEnemyCount++;
            WaveNumber++;
            CountDown = CountDownTimer;
            DeadEnemiesThisRound = 0;
            for (int i = 0; i < EnemyCount; i++)
            {
                    CountDown = Random.Range(0.2f, 1f);
                    Instantiate(MyEnemy, MySpawn.position, MySpawn.rotation);
                    yield return new WaitForSeconds(CountDown);
            }
        }
        if (WaveStarted)
        {
            EnemyCounter.text = "Enemies Left: " + (EnemyCount - DeadEnemiesThisRound); // this entire if was gone and the content outside any if
        }
        if ((EnemyCount - DeadEnemiesThisRound) <= 0 && WaveStarted)
        {
            WaveStarted = false;
            if(WaveNumber > 0 && !WaveStarted) //&& (EnemyCount - DeadEnemiesThisRound) <= 0    wavestarted was not there
            {
                EnemyCounter.text = "Waves Survived: " + (WaveNumber);
            }
            
            
        }
        
    }
}

#endregion Functions
