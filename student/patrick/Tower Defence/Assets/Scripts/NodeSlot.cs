using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class NodeSlot : MonoBehaviour
{
    #region FunctionCalls

    void Start()
    {
        InitiateClutter();
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

    public GameObject[] EnvironmentClutter;

    Renderer Rend;
    Color StartColor;
    public Color HoverColor;
    GameObject BuildSlot;
    BuildManager buildmanager;

    void InitiateClutter()
    {
        (Instantiate(EnvironmentClutter[Random.Range(0, EnvironmentClutter.Length)], new Vector3(transform.position.x,transform.position.y + 0.5f, transform.position.z), transform.rotation) as GameObject).transform.parent = gameObject.transform;
    }

    void InititiateVariables()
    {
        Rend = GetComponent<Renderer>();
        StartColor = Rend.material.color;
        buildmanager = BuildManager.Instance;
    }

    void ChangeColorOnEntry()
    {
        if (buildmanager.GetTurretToBuild() != buildmanager.BuildSlotPrefab)
            return;
        Rend.material.color = HoverColor;
    }

    void ChangeColorOnExit()
    {
        Rend.material.color = StartColor;
    }

    void ClickSlot()
    {
        if (buildmanager.GetTurretToBuild() != buildmanager.BuildSlotPrefab)
            return;


        if (BuildSlot != null)
        {
            Debug.Log("Cant build there!");
            return;
        }
        GameObject SlotToAlter = buildmanager.GetTurretToBuild();
        BuildSlot = (GameObject)Instantiate(SlotToAlter, new Vector3(transform.position.x, transform.position.y, transform.position.z), transform.rotation);
        buildmanager.SetTurretToBuild(null);
        Destroy(transform.GetChild(0).gameObject);
        Destroy(gameObject);
    }
}
