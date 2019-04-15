using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

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

    void OnMouseDown()
    {
        DamageWhenClicked();
    }

    int StartHealth = 10;
    public int CurrentHealth;
    public GameObject HealthBar;
    bool PayedCash;

    void StartEnemy()
    {
        CurrentHealth = StartHealth;
    }

    
    void CheckHealth()
    {
        HealthBar.transform.localScale = new Vector3(CurrentHealth / StartHealth, 0.1f, 0.1f);
        if(CurrentHealth <= 0)
        {
            
            //WaveSpawner.CurrentEnemies--;
            if (!PayedCash)
            {
                WaveSpawner.DeadEnemiesThisRound++;
                PlayerBehaviour.Money += 10;
                PayedCash = true;
            }
            gameObject.GetComponent<ParticleSystem>().Play();
            Destroy(gameObject.GetComponent<MeshRenderer>());
            Destroy(gameObject.GetComponent<SphereCollider>());
            Destroy(gameObject.GetComponent<EnemyMovement>());
            Destroy(gameObject, 3);
        }
    }

    void DamageWhenClicked()
    {
        CurrentHealth--;
    }
}
