# Enigame Toolkit
A collection of a few tools useful during [Enigame](https://www.enigame.com) puzzle hunts (and maybe others too). Project is written in Angular (now v18), using Bootstrap5 and Angular Material.

This project is purely **fanmade** and has no ties to Enigame or the Enigame creators other than being an inspiration for the making of this tool.

Currently available:
* Text conversions (plaintext, binary, hexadecimal, rot13, decimal, base64)
* Letter to Number conversion (A = 1, B = 2, etc.)
* Ciphers (Ceasar, Vigenere)
* Code conversions and images (Morse, Braille, Semaphore flags, Tap/Knock, ASL)
* Anagram solving with wildcards (with a feature to display all words that can be made from provided letters, including shorter ones)
* and more to come, maybe... :)

### Updating deployments
```
kubectl rollout restart deployments/<deployment-name>
```

## NOTE
This repository now contains only frontend part of the application. The backend has been moved to [EnitoolkitDotNET](https://github.com/Ves5/EnitoolkitDotNET), together with rewrite and new additions in ASP.NET instead of Python. Old version is available in archive folder of backend repository.