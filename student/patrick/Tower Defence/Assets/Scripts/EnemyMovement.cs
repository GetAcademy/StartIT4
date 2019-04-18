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
    GameObject ThisWaypoint;
    Transform target;
    int WavePointIndex = 0;
    void StartTarget()
    {
        if (GameObject.Find("GameMaster").GetComponent<WaveSpawner>().WaveNumber < 4)
        {
            ThisWaypoint = GameObject.Find("WayPointsOne");
            target = ThisWaypoint.GetComponent<Waypoints>().Points[0];
        }
        else if (GameObject.Find("GameMaster").GetComponent<WaveSpawner>().WaveNumber >= 4 && GameObject.Find("GameMaster").GetComponent<WaveSpawner>().WaveNumber < 7)
        {
            if (GameObject.Find("GameMaster").GetComponent<WaveSpawner>().MySpawnIndexSecond == 0)
            {
                ThisWaypoint = GameObject.Find("WayPointsOne");
                target = ThisWaypoint.GetComponent<Waypoints>().Points[0];
            }
            else
            {
                ThisWaypoint = GameObject.Find("WayPointsTwo");
                target = ThisWaypoint.GetComponent<Waypoints>().Points[0];
            }
        }
        else
        {
            if (GameObject.Find("GameMaster").GetComponent<WaveSpawner>().MySpawnIndexAll == 0)
            {
                ThisWaypoint = GameObject.Find("WayPointsOne");
                target = ThisWaypoint.GetComponent<Waypoints>().Points[0];
            }
            else if (GameObject.Find("GameMaster").GetComponent<WaveSpawner>().MySpawnIndexAll == 1)
            {
                ThisWaypoint = GameObject.Find("WayPointsTwo");
                target = ThisWaypoint.GetComponent<Waypoints>().Points[0];
            }
            else
            {
                ThisWaypoint = GameObject.Find("WayPointsThree");
                target = ThisWaypoint.GetComponent<Waypoints>().Points[0];
            }
        }
        CurrentSpeed = BaseSpeed;
    }
    void UpdateTarget()
    {
        Vector3 dir = target.position - transform.position;
        transform.Translate(dir.normalized * CurrentSpeed * Time.deltaTime, Space.World);

        Quaternion lookRotation = Quaternion.LookRotation(dir);
        Vector3 rotation = Quaternion.Lerp(transform.rotation, lookRotation, Time.deltaTime * CurrentSpeed).eulerAngles; ;
        transform.rotation = Quaternion.Euler(0f, rotation.y, 0f);

        if (Vector3.Distance(transform.position, target.position) <= 0.2f)
        {
            GetNextWaypoint();
        }
    }
    void GetNextWaypoint()
    {

        if (WavePointIndex >= ThisWaypoint.GetComponent<Waypoints>().Points.Length - 1)
        {
            PlayerBehaviour.CurrentHealth--;
            WaveSpawner.DeadEnemiesThisRound++;
            Destroy(gameObject);
        }

        WavePointIndex++;


        if (WavePointIndex < ThisWaypoint.GetComponent<Waypoints>().Points.Length)
        {
            target = ThisWaypoint.GetComponent<Waypoints>().Points[WavePointIndex];
        }
    }
}
