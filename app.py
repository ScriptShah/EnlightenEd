from fastapi import FastAPI
from tortoise.contrib.fastapi import  register_tortoise
from models import (Course_Pydantic,CourseIn_Pydantic , Course)
from models import (Instructor_Pydantic,InstructorIn_Pydantic, Instructor)
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

@app.get('/')
def index():
    return {'Msg':"go to /docs for the api documentation"}


@app.post('/courses')
async def add_course(course_info:CourseIn_Pydantic):
    course_obj = await Course.create(**course_info.dict(exclude_unset=True))
    response = await Course_Pydantic.from_tortoise_orm(course_obj)
    return {"status" : "ok","data":response}

@app.get('/courses')
async def get_all_courses():
    response = await Course_Pydantic.from_queryset(Course.all())
    return {"status" : "ok","data":response}

@app.get('/courses/{course_id}')
async def get_all_courses():
    response = await Course_Pydantic.from_queryset_single(Course.id)
    return {"status" : "ok","data":response}
        
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

@app.delete('/courses/{course_id}')
async def delete_course(course_id: int):
    await Course.filter(id=course_id).delete()
    return {"status": "ok"}
    


@app.post('/instructors')
async def add_instructor(instructor_info:InstructorIn_Pydantic):
    instructor_obj = await Instructor.create(**instructor_info.dict(exclude_unset=True))
    response = await Instructor_Pydantic.from_tortoise_orm(instructor_obj)
    return {"status" : "ok","data":response}

@app.get('/instructors')
async def get_all_instructors():
    response = await Instructor_Pydantic.from_queryset(Instructor.all())
    return {"status" : "ok","data":response}

@app.get('/instructors/{instructor_id}')
async def get_instructors():
    response = await Instructor_Pydantic.from_queryset_single(Instructor.id)
    return {"status" : "ok","data":response}
        
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

@app.delete('/instructors/{instructor_id}')
async def delete_course(instructor_id: int):
    await Instructor.filter(id=instructor_id).delete()
    return {"status": "ok"}


register_tortoise(
    app,
    db_url="sqlite://database.sqlite3",
    modules={"models":["models"]},
    generate_schemas=True,
    add_exception_handlers=True
)    
