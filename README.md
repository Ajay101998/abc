if you are facing below error while pushing the code on github 

error : "fatal: the remote end hung up unexpectedly"

Run below code .

git config http.postBuffer 544288000

and then below code .


git push -u origin main --force
