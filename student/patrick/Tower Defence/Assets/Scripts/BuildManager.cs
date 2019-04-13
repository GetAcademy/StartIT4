using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BuildManager : MonoBehaviour
{
    #region FunctionCalls

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

    #endregion FunctionCalls

    
    public static BuildManager Instance;

    public GameObject BloodTurretPrefab;
    public GameObject SniperTurretPrefab;

    GameObject TurretToBuild;


    public GameObject GetTurretToBuild()
    {
        return TurretToBuild;
    }

    public void SetTurretToBuild(GameObject Turret)
    {
        TurretToBuild = Turret;
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

   
   
}
