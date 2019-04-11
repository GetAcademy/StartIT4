using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class FlyingSphereEnemyStats : MonoBehaviour
{
    void Start()
    {
        StartEnemy();
    }

    void Update()
    {
        CheckHealth();
    }

    int StartHealth = 10;
    public int CurrentHealth;

    void StartEnemy()
    {
        CurrentHealth = StartHealth;
    }

    
    void CheckHealth()
    {
        if(CurrentHealth <= 0)
        {
            WaveSpawner.DeadEnemiesThisRound++;
            PlayerBehaviour.Money += 10;
            gameObject.GetComponent<ParticleSystem>().Play();
            Destroy(gameObject.GetComponent<MeshRenderer>());
            Destroy(gameObject.GetComponent<SphereCollider>());
            Destroy(gameObject.GetComponent<EnemyMovement>());
            Destroy(gameObject, 3);
        }
    }
}
