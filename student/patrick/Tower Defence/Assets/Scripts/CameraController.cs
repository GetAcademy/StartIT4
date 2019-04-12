﻿using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CameraController : MonoBehaviour
{
    void Start()
    {
        
    }

    void Update()
    {
        CameraMovement();
    }

    public float PanSpeed = 30f;

    void CameraMovement()
    {
        if (Input.GetKey(KeyCode.W))
        {
            transform.Translate(Vector3.forward * PanSpeed * Time.deltaTime,Space.World);
        }
        if (Input.GetKey(KeyCode.S))
        {
            transform.Translate(Vector3.back * PanSpeed * Time.deltaTime, Space.World);
        }
        if (Input.GetKey(KeyCode.A))
        {
            transform.Translate(Vector3.left * PanSpeed * Time.deltaTime, Space.World);
        }
        if (Input.GetKey(KeyCode.D))
        {
            transform.Translate(Vector3.right * PanSpeed * Time.deltaTime, Space.World);
        }
        if (Input.mouseScrollDelta.y > 0 && transform.position.y > 7)
        {
            transform.Translate(Vector3.forward * PanSpeed * Time.deltaTime);
        }
        if(Input.mouseScrollDelta.y < 0 && transform.position.y < 20)
        {
            transform.Translate(Vector3.back * PanSpeed * Time.deltaTime);
        }
    }
}
