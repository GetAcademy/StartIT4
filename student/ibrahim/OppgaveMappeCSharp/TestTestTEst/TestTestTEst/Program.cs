using System;

class SubstitutionCipher
{
    static void Main()
    {
        const string key = "jfkgotmyvhspcandxlrwebquiz";
        const string plainText = "the quick brown fox jumps over the lazy dog";
        var cipherText = Encrypt(plainText, key);
        var decryptedText = Decrypt(cipherText, key);

        Console.WriteLine("Plain     : {0}", plainText);
        Console.WriteLine("Encrypted : {0}", cipherText);
        Console.WriteLine("Decrypted : {0}", plainText);
        Console.ReadKey();
    }

    private static string Encrypt(string plainText, string key)
    {
        var chars = new char[plainText.Length];

        for (var i = 0; i < plainText.Length; i++)
        {
            if (plainText[i] == ' ')
            {
                chars[i] = ' ';
            }
            else
            {
                var j = plainText[i] - 97;
                chars[i] = key[j];
            }
        }

        return new string(chars);
    }

    private static string Decrypt(string cipherText, string key)
    {
        var chars = new char[cipherText.Length];

        for (var i = 0; i < cipherText.Length; i++)
        {
            if (cipherText[i] == ' ')
            {
                chars[i] = ' ';
            }
            else
            {
                var j = key.IndexOf(cipherText[i]) - 97;
                chars[i] = (char)j;
            }
        }

        return new string(chars);
    }
}