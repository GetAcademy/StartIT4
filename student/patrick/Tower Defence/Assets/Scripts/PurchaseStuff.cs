using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PurchaseStuff : MonoBehaviour
{
    void Start()
    {
        InitiateManager();
    }

    void Update()
    {
        
    }

    BuildManager buildmanager;

    void InitiateManager()
    {
        buildmanager = BuildManager.Instance;
    }

    public void PurchaseBloodTurret()
    {
        if(PlayerBehaviour.Money >= 50)
        {
            PlayerBehaviour.Money -= 50;
            buildmanager.SetTurretToBuild(buildmanager.BloodTurretPrefab);
        }
        else
        {
            Debug.Log("Sorry You Cant Afford This Turret Right Now");
        }
        
    }

    public void PurchaseSniperTurret()
    {
        if(PlayerBehaviour.Money >= 120)
        {
            PlayerBehaviour.Money -= 120;
            buildmanager.SetTurretToBuild(buildmanager.SniperTurretPrefab);
        }
        else
        {
            Debug.Log("Sorry You Cant Afford This Turret Right Now");
        }
    }

    public void PurchaseBuildSlot()
    {
        if(PlayerBehaviour.Money >= 300)
        {
            PlayerBehaviour.Money -= 300;
            buildmanager.SetTurretToBuild(buildmanager.BuildSlotPrefab);
        }
        else
        {
            Debug.Log("Sorry You Cant Afford This Right Now");
        }
    }
}
