using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BuildManager : MonoBehaviour
{
    void Awake()
    {
        InitiateBuildManager();
    }

    void Start()
    {
        
    }

    void Update()
    {
        
    }

    GameObject TurretToBuild;
    public static BuildManager Instance;
    public GameObject BloodTurretPrefab;
    public GameObject SniperTurretPrefab;

    public GameObject GetTurretToBuild()
    {
        return TurretToBuild;
    }

    void InitiateBuildManager()
    {
        if(Instance != null)
        {
            Debug.LogError("More Than One Build Manager In Scene");
            return;
        }
        Instance = this;
    }

    public void SetTurretToBuild(GameObject Turret)
    {

    }
   
}
