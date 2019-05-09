using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EnemyMovement : MonoBehaviour
{
    

    void Start()
    {
        StartTarget();
    }

    void Update()
    {
        UpdateTarget();
    }

    public float BaseSpeed = 10f;
    public float CurrentSpeed;
    Transform target;
    int WavePointIndex = 0;
    void StartTarget()
    {
        target = Waypoints.Points[0];
        CurrentSpeed = BaseSpeed;
    }
    void UpdateTarget()
    {
        Vector3 dir = target.position - transform.position;
        transform.Translate(dir.normalized * CurrentSpeed * Time.deltaTime, Space.World);

        if(Vector3.Distance(transform.position, target.position) <= 0.2f)
        {
            GetNextWaypoint();
        }
    }
    void GetNextWaypoint()
    {
        if(WavePointIndex >= Waypoints.Points.Length - 1)
        {
            PlayerBehaviour.CurrentHealth--;
            WaveSpawner.DeadEnemiesThisRound++;
            //WaveSpawner.CurrentEnemies--;
            Destroy(gameObject);
        }
        WavePointIndex++;
        if(WavePointIndex < Waypoints.Points.Length)
        {
            target = Waypoints.Points[WavePointIndex];
        }
        
    }
}
