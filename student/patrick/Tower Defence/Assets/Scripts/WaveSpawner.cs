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
    public int WaveNumber = 0;
    float CountDownTimer;
    float CountDown;
    public int MySpawnIndexSecond;
    public int MySpawnIndexAll;
    public GameObject[] MyEnemy;
    public Transform[] MySpawn;
    public Text EnemyCounter;

    #endregion Variables

    #region Functions

    IEnumerator Spawn()
    {
        if (Input.GetKeyDown(KeyCode.Space) && !WaveStarted && !PlayerBehaviour.IsDead)
        {
            WaveStarted = true;
            EnemyCount = Random.Range(MinEnemyCount, MaxEnemyCount + 1);
            MaxEnemyCount += 2;
            MinEnemyCount++;
            WaveNumber++;
            CountDown = CountDownTimer;
            DeadEnemiesThisRound = 0;
            for (int i = 0; i < EnemyCount; i++)
            {
                MySpawnIndexSecond = Random.Range(0, 2);
                MySpawnIndexAll = Random.Range(0, MySpawn.Length);
                CountDown = Random.Range(0.2f, 1f);
                if (WaveNumber < 4)
                {
                    Instantiate(MyEnemy[Random.Range(0, MyEnemy.Length)], new Vector3(MySpawn[0].position.x, +0.5f, MySpawn[0].position.z), MySpawn[0].rotation);
                }
                else if(WaveNumber >= 4 && WaveNumber < 7)
                {
                    Instantiate(MyEnemy[Random.Range(0, MyEnemy.Length)], new Vector3(MySpawn[MySpawnIndexSecond].position.x, +0.5f, MySpawn[MySpawnIndexSecond].position.z), MySpawn[MySpawnIndexSecond].rotation);
                }
                else
                {
                    Instantiate(MyEnemy[Random.Range(0, MyEnemy.Length)], new Vector3(MySpawn[MySpawnIndexAll].position.x, +0.5f, MySpawn[MySpawnIndexAll].position.z), MySpawn[MySpawnIndexAll].rotation);
                }
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
            if (WaveNumber > 0 && !WaveStarted) //&& (EnemyCount - DeadEnemiesThisRound) <= 0    wavestarted was not there
            {
                EnemyCounter.text = "Waves Survived: " + (WaveNumber);
            }


        }

    }
}

#endregion Functions
