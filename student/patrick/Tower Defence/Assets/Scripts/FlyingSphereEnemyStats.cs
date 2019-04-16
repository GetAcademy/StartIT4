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

    float StartHealth = 10;
    public float CurrentHealth;
    public GameObject HealthBar;
    bool PayedCash;

    void StartEnemy()
    {
        CurrentHealth = StartHealth;
    }

    
    void CheckHealth()
    {
        HealthBar.transform.localScale = new Vector3((CurrentHealth / StartHealth), 0.1f, 0.1f);
        if(CurrentHealth <= 0)
        {
            
            //WaveSpawner.CurrentEnemies--;
            if (!PayedCash)
            {
                WaveSpawner.DeadEnemiesThisRound++;
                PlayerBehaviour.Money += 10;
                PayedCash = true;
            }

            

            var PlayerDamage = gameObject.transform.Find("PlayerDamage").GetComponent<ParticleSystem>().emission;
            PlayerDamage.enabled = false;

            var TurretDamage = gameObject.transform.Find("TurretDamage").GetComponent<ParticleSystem>().emission;
            TurretDamage.enabled = false;

            var MySystem = gameObject.GetComponent<ParticleSystem>();
            var MyShape = MySystem.shape;
            var MyEmission = MySystem.emission;
            var MyMain = MySystem.main;

            
            MyMain.gravityModifier = 3;
            MyShape.rotation = new Vector3(-90, 0, 0);
            MyEmission.SetBursts(new ParticleSystem.Burst[]
            {
            new ParticleSystem.Burst(0,10,1,1,Mathf.Infinity)
            });
            MySystem.Play();

            

            Destroy(gameObject.GetComponentInChildren<MeshRenderer>());
            Destroy(gameObject.GetComponent<MeshRenderer>());
            Destroy(gameObject.GetComponent<SphereCollider>());
            Destroy(gameObject.GetComponent<EnemyMovement>());
            Destroy(gameObject, 3);
        }
    }

    void DamageWhenClicked()
    {
        var MySystem = gameObject.transform.Find("PlayerDamage").GetComponent<ParticleSystem>();
        var MyShape = MySystem.shape;
        var MyEmission = MySystem.emission;
        var MyMain = MySystem.main;

        CurrentHealth--;

        
        

            MyMain.gravityModifier = 3;
            MyShape.rotation = new Vector3(-90, 0, 0);
            MyEmission.SetBursts(new ParticleSystem.Burst[]
            {
            new ParticleSystem.Burst(0,1,1,1,Mathf.Infinity)
            });
            MySystem.Play();

        
        
    }
}
