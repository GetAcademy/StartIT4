using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BuildSlot : MonoBehaviour
{
    #region FunctionCalls

    void Start()
    {
        InititiateVariables();
    }

    void Update()
    {
        
    }

    void OnMouseEnter()
    {
        ChangeColorOnEntry();
    }

    void OnMouseExit()
    {
        ChangeColorOnExit();
    }

    void OnMouseDown()
    {
        ClickSlot();
    }

    #endregion FunctionCalls

    Renderer Rend;
    Color StartColor;
    public Color HoverColor;
    GameObject Turret;
    BuildManager buildmanager;

    void InititiateVariables()
    {
        Rend = GetComponent<Renderer>();
        StartColor = Rend.material.color;
        buildmanager = BuildManager.Instance;
    }

    void ChangeColorOnEntry()
    {
        if (buildmanager.GetTurretToBuild() == null)
            return;
        Rend.material.color = HoverColor;
    }

    void ChangeColorOnExit()
    {
        Rend.material.color = StartColor;
    }

    void ClickSlot()
    {
        if(buildmanager.GetTurretToBuild() == null)
            return;
        

        if(Turret != null)
        {
            Debug.Log("Cant build there!");
            return;
        }
        GameObject TurretToBuild = buildmanager.GetTurretToBuild();
        Turret = (GameObject)Instantiate(TurretToBuild, new Vector3(transform.position.x, transform.position.y + 0.5f, transform.position.z), transform.rotation);
        buildmanager.SetTurretToBuild(null);
    }
}
