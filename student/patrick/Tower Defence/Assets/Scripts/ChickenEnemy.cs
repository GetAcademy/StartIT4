using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ChickenEnemy : MonoBehaviour
{
    Animator ChickenAnim;
    bool HasPanicked;

    void Start()
    {
        ChickenAnim = GetComponent<Animator>();
    }

    void Update()
    {
        ChickenAnim.Play("ChickenWalk");
        Panic();
    }

    void Panic()
    {
        if(gameObject.GetComponent<EnemyBehaviour>().CurrentHealth < gameObject.GetComponent<EnemyBehaviour>().StartHealth && !HasPanicked)
        {
            HasPanicked = true;
            gameObject.GetComponent<GroundEnemyMovement>().CurrentSpeed = 10;
            return;
        }
    }
}
