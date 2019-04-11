using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class WaveSpawner : MonoBehaviour
{

    #region FunctionCalls

    void Start()
    {
        CountDownTimer = Random.Range(0.7f, 3f);
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
                    CountDown = Random.Range(0.7f, 3f);
                    Instantiate(MyEnemy, MySpawn.position, MySpawn.rotation);
                    yield return new WaitForSeconds(CountDown);
            }
        }
        EnemyCounter.text = "Enemies Left: " + (EnemyCount - DeadEnemiesThisRound);
        if ((EnemyCount - DeadEnemiesThisRound) <= 0)
        {
            WaveStarted = false;
            if(WaveNumber > 0)
            {
                EnemyCounter.text = "Waves Survived: " + (WaveNumber);
            }
            else
            {
                EnemyCounter.text = "Start Wave";
            }
            
        }
        
    }
}

#endregion Functions
