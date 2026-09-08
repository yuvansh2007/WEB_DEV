# instructions

1. mkdir folder_name
2. cd folder_name
3. git init <!-- this will initialize a git repo  -->
4. create some files and it will be displayed in your github private repo
5. this creates a file with a untracked status meaning has no older version
6. git add demo.js this will start tracking demo.js
7. git commit -m "added demo.js" //this will save the file with git and message added demo.js giving message is mandatory.
<--------------> 
git add <file_name> // adds file to staged 

git commit -m "" // commits the staged files with a commit message 

git status // this shows current state of the updated files. 

git log // this shows the histroy of commits.(exit using q)

git remote -v //tell the place to fetch and upload code to. 

git remote add // e.g git remote add origin https://github.com/skadoodle1201/shiny-telegram.git this tell add a place to fetch and upload with name origin.

git push <branch_name> //e.g git push origin master this this push the commited code on branch master to the origin.

*\*\ origin will be https://github.com/skadoodle1201/shiny-telegram.git as we have added using remote.

git branch //show the current branch you are at. 

git checkout -b <branch_name> // creates a new branch with the provided branch name

git checkout <branch_name> // change to an existing branch

git merge <branch_name> // eg git merge test merge the code from the branch to your current branch. i.e merge code from test branch in master assuming current branch is master
