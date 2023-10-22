# importing necessary modules 

from typing import Annotated
from fastapi import FastAPI, File, UploadFile
from fastapi.responses import FileResponse
from fastapi import FastAPI
from tortoise.contrib.fastapi import  register_tortoise
from models import (Course_Pydantic,CourseIn_Pydantic , Course)
from models import (Instructor_Pydantic,InstructorIn_Pydantic, Instructor)
from fastapi.middleware.cors import CORSMiddleware
import os
import shutil

app = FastAPI()


# CORS rules
origins = [
    "http://localhost.tiangolo.com",
    "http://127.0.0.1:8000",
    "http://localhost:8000",
    "http://127.0.0.1:5173",
    "http://localhost:5173",
    
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Api function get method for introduction to api docs

@app.get('/')
def index():
    return "go to /docs for the api documentation"






#Api function post method for adding a new course

@app.post('/courses')
async def add_course(course_info:CourseIn_Pydantic):
    course_obj = await Course.create(**course_info.dict(exclude_unset=True))
    response = await Course_Pydantic.from_tortoise_orm(course_obj)
    return {"status" : "ok","data":response}



#Api function get method for getting all courses from db

@app.get('/courses')
async def get_all_courses():
    response = await Course_Pydantic.from_queryset(Course.all())
    return {"status" : "ok","data":response}



#Api function get method for selecting a single query from db

@app.get('/courses/{course_id}')
async def get_all_courses():
    response = await Course_Pydantic.from_queryset_single(Course.id)
    return {"status" : "ok","data":response}


#Api function for editing or redefining a course

@app.put('/courses/{course_id}')
async def update_course(course_id: int, update_info: CourseIn_Pydantic):
    course = await Course.get(id = course_id)
    update_info = update_info.dict(exclude_unset = True)
    course.instructor = update_info['instructor']
    course.instructor_position = update_info['instructor_position']
    course.course_title = update_info['course_title']
    course.course_duration = update_info['course_duration']
    course.price = update_info['price']
    await course.save()
    response = await Course_Pydantic.from_tortoise_orm(course)
    return {"status" : "ok","data":response}



# Api function for deleting a specific course by select id

@app.delete('/courses/{course_id}')
async def delete_course(course_id: int):
    await Course.filter(id=course_id).delete()
    return {"status": "ok"}
    


# Api function for adding a new instructor

@app.post('/instructors')
async def add_instructor(instructor_info:InstructorIn_Pydantic):
    instructor_obj = await Instructor.create(**instructor_info.dict(exclude_unset=True))
    response = await Instructor_Pydantic.from_tortoise_orm(instructor_obj)
    return {"status" : "ok","data":response}



# Api function for getting all instructors from db

@app.get('/instructors')
async def get_all_instructors():
    response = await Instructor_Pydantic.from_queryset(Instructor.all())
    return {"status" : "ok","data":response}



# Api function for getting or selecting a specific instructor from db

@app.get('/instructors/{instructor_id}')
async def get_instructors():
    response = await Instructor_Pydantic.from_queryset_single(Instructor.id)
    return {"status" : "ok","data":response}




# Api function for modifying a instructor 
   
@app.put('/instructors/{instructor_id}')
async def update_instructor(instructor_id: int, update_info: InstructorIn_Pydantic):
    instructor = await Instructor.get(id = instructor_id)
    update_info = update_info.dict(exclude_unset = True)
    instructor.name = update_info['name']
    instructor.position = update_info['position']
    instructor.followers = update_info['followers']
    instructor.cursor = update_info['cursor']
    await instructor.save()
    response = await Instructor_Pydantic.from_tortoise_orm(instructor)
    return {"status" : "ok","data":response}


#Api function for deleting an instructor from db

@app.delete('/instructors/{instructor_id}')
async def delete_course(instructor_id: int):
    await Instructor.filter(id=instructor_id).delete()
    return {"status": "ok"}



@app.post("/image/{image_id}")
async def upload_image(image_id: str, file: UploadFile = File(...)):
    # Create the images directory if it doesn't already exist
    if not os.path.exists("../images"):
        os.mkdir("../images")

    # Save the uploaded file to disk with the specified ID
    file_extension = os.path.splitext(file.filename)[1]
    file_path = f"../images/{image_id}{file_extension}"
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    return {"message": "Image uploaded successfully"}

@app.get('/get_image/{image_id}')
async def get_image(image_id: str):
    # Return the stored image with the specified ID
    file_path = f"../images/{image_id}.png"
    if os.path.exists(file_path):
        return FileResponse(file_path)
    else:
        return {"error": "Image not found"}

@app.delete('/delete_image/{image_id}')
async def delete_image(image_id: str):
    # Delete the stored image with the specified ID
    file_path = f"../images/{image_id}.png"
    if os.path.exists(file_path):
        os.remove(file_path)
        return {"message": "Image deleted successfully"}
    else:
        return {"error": "Image not found"}





# registering a sqlite db trough tortoise-orm

register_tortoise(
    app,
    db_url="sqlite://database.sqlite3",
    modules={"models":["models"]},
    generate_schemas=True,
    add_exception_handlers=True
)    
