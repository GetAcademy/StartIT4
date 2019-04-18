using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class EnemyBehaviour : MonoBehaviour
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

    public float StartHealth = 10;
    public int CashForKill = 10;
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
        if (CurrentHealth <= 0)
        {
            if (!PayedCash)
            {
                WaveSpawner.DeadEnemiesThisRound++;
                PlayerBehaviour.Money += CashForKill;
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


            if (gameObject.GetComponentInChildren<MeshRenderer>())
            {
                Destroy(gameObject.GetComponentInChildren<MeshRenderer>());
            }
            if (gameObject.GetComponentInChildren<SkinnedMeshRenderer>())
            {
                Destroy(gameObject.GetComponentInChildren<SkinnedMeshRenderer>());
            }
            if (gameObject.GetComponent<SphereCollider>())
            {
                Destroy(gameObject.GetComponent<SphereCollider>());
            }
            if (gameObject.GetComponent<EnemyMovement>())
            {
                Destroy(gameObject.GetComponent<EnemyMovement>());
            }
            if (gameObject.GetComponent<GroundEnemyMovement>())
            {
                Destroy(gameObject.GetComponent<GroundEnemyMovement>());
            }
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
        PlayerBehaviour.Money++;



        MyMain.gravityModifier = 3;
        MyShape.rotation = new Vector3(-90, 0, 0);
        MyEmission.SetBursts(new ParticleSystem.Burst[]
        {
            new ParticleSystem.Burst(0,1,1,1,Mathf.Infinity)
        });
        MySystem.Play();



    }
}
