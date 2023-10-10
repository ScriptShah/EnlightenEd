
# Ecommerce Education React App with Python Fast API

This Project is built for practice react frontend and Python fast api backend with SQLite database.

With this project you can see :
-  react component-based form.
-  single responsibility principle of coding.
-  getting and posting data by axios through the fastApi.
-  deleting and editing data by axios through the fastApi.
-  tiny beautiful tailwind animations.
-  clearly documented code.
-  writing clean code.


How i can run this project :

Setting up the frontEnd -----------------------------------------------

1- fork or clone this repo on your machine and then cd to the dir.

2- open terminal and type " npm install " to install all dependencies.

3- when installing is finished type " npm run dev " to run the react frontend on vite virtual server on " http://localhost:5173/ ".


Setting up the backEnd -----------------------------------------------


1- open cmd and type " py -m venv env . " to install and setup python virtual environment on your project.

2- when installing is finished type " Scripts\activate.bat " to run the virtual environment.

3- type " pip install uvicorn fastapi tortoise-orm " to install FastApi , tortoise-orm and uvicorn ASGI.

4- type " pip install tortoise-orm[fastapi] " to install dependencies for fastapi and tortoise-orm.

5- finally type " uvicorn app:app --reload " to run the backend server and the fastApi, it will run on " http://127.0.0.1:8000 ".

- for fastApi docs go to " http://127.0.0.1:8000/docs " url.


