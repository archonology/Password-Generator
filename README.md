Password Generator 

Deployed link: https://archonology.github.io/password-challenge-3/

-----------------
About the project:

- the deployed link takes you to a single webpage. The function of the webpage is
to generate a random password for you, the user.

- when you click on the generate password button you will be prompted to choose:
    1. a password length (a length less than 8 characters will stop the function and feed you an alert -- same as if you try to type in any character length longer than 128.)
    2. you will be asked to confirm what types of characters you would like: lowercase, uppercase, special, and/or numbers.
    3. the function will then create a random password to your specifications.  if you click the generate password button again, the function will restart from the beginning.  

- The way the generator works is on a javascript foundation of prompts and confirms that will either leave out or push array's of characters into an empty array title "selectedCharacters". this selectedCharaters array, after it has been compiled with the users choices is joined into a single thread. Indexing and random math then push out the random password. voila! and then it resets since the var for password is "" (empty) when you run the function again.
----------------
Here is an image of how the page should look in the desktop mode:

<img width="1728" alt="Screen Shot 2022-07-25 at 3 52 57 PM" src="https://user-images.githubusercontent.com/107374664/180878838-d2176002-c013-4144-b56d-e8ac81b71c2b.png">
