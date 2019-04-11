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

            if(NearestEnemy != null && ShortestDistance <= Range)
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
        Debug.Log("Shoot");
        gameObject.GetComponentInChildren<ParticleSystem>().Play();
        Target.gameObject.GetComponent<FlyingSphereEnemyStats>().CurrentHealth -= Damage;
    }
}
