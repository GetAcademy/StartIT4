using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class PlayerBehaviour : MonoBehaviour
{
    void Start()
    {
        InitializePlayer();
    }

    void Update()
    {
        UpdatePlayer();
    }

    public static bool IsDead;
    public static int Money = 100;
    public int StartingHealth = 30;
    public static int CurrentHealth;
    public Text HealthCounter;
    public Text DeathMessage;

    void InitializePlayer()
    {
        CurrentHealth = StartingHealth;
        HealthCounter.text = "Current Health: " + (CurrentHealth);
    }

    void UpdatePlayer()
    {
        HealthCounter.text = "Current Health: " + (CurrentHealth);
        DeathMessage.text = "You Are Dead";
        if(CurrentHealth <= 0)
        {
            DeathMessage.GetComponent<Text>().enabled = true;
            IsDead = true;
        }
    }
}
