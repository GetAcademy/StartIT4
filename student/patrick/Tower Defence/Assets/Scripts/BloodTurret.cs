using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BloodTurret : MonoBehaviour
{
    #region FunctionCalls

    void Start()
    {
        InvokeRepeating("UpdateTarget", 0f, 0.2f);
    }

    void Update()
    {
        AimAtTarget();
        FireAtTarget();
    }

    void OnDrawGizmosSelected()
    {
        Gizmos.color = Color.red;
        Gizmos.DrawWireSphere(transform.position, Range);
    }

    #endregion FunctionCalls

    Transform Target;
    [Header("Attributes")]
    public int Range = 10;
    public int Damage = 5;
    public float FireRate = 1f;
    [Header("Background Variables")]
    public int TurningSpeed = 10;
    float FireRateCountDown = 0f;
    public Transform ThisTurret;
    public GameObject MuzzleFlash;

    void UpdateTarget()
    {
        GameObject[] Enemies = GameObject.FindGameObjectsWithTag("Enemy");
        float ShortestDistance = Mathf.Infinity;
        GameObject NearestEnemy = null;

        foreach(GameObject Enemy in Enemies)
        {
            float DistanceToEnemy = Vector3.Distance(transform.position, Enemy.transform.position);
            if(DistanceToEnemy < ShortestDistance)
            {
                ShortestDistance = DistanceToEnemy;
                NearestEnemy = Enemy;
            }

            if(NearestEnemy != null && ShortestDistance <= Range && NearestEnemy.GetComponent<MeshRenderer>())
            {
                Target = NearestEnemy.transform;
            }
            else
            {
                Target = null;
            }
        }
    }

    void AimAtTarget()
    {
        if (Target == null)
        {
            return;
        }
        
        Vector3 dir = Target.position - transform.position;
        Quaternion lookRotation = Quaternion.LookRotation(dir);
        Vector3 rotation = lookRotation.eulerAngles; //Quaternion.Lerp(ThisTurret.rotation, lookRotation, Time.deltaTime * TurningSpeed).eulerAngles;
        ThisTurret.rotation = Quaternion.Euler(0f, rotation.y + 90, 0f);
        
        
    }

    void FireAtTarget()
    {
        FireRateCountDown -= Time.deltaTime;
        if(FireRateCountDown <= 0f && Target != null)
        {
            Shoot();
            FireRateCountDown = 1f / FireRate;
        }
    }

    void Shoot()
    {
        gameObject.GetComponentInChildren<ParticleSystem>().Play();

        var Test = Quaternion.LookRotation(Target.position - transform.position).eulerAngles;
        var MySystem = Target.Find("TurretDamage").GetComponent<ParticleSystem>();
        var MainSystem = MySystem.main;
        var Shape = MySystem.shape;
        var Emission = MySystem.emission;

        
            MainSystem.gravityModifier = 0;
            Shape.rotation = new Vector3(0f, Test.y, 0f);

            Emission.SetBursts(new ParticleSystem.Burst[]
            {
            new ParticleSystem.Burst(0,5,1,1,Mathf.Infinity)
            });
            MySystem.Play();
        

        Target.gameObject.GetComponent<FlyingSphereEnemyStats>().CurrentHealth -= Damage;

        
    }
}
