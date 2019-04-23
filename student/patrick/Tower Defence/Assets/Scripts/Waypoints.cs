using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Waypoints : MonoBehaviour
{
    void Awake()
    {
        InitializePoints();
    }

    void Start()
    {
        
    }

   
    void Update()
    {
        
    }


    public static Transform[] Points;

    void InitializePoints()
    {
        Points = new Transform[transform.childCount];
        for(int i = 0; i < Points.Length; i++)
        {
            Points[i] = transform.GetChild(i);
        }
    }
}
