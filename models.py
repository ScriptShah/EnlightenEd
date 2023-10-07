from tortoise.models import Model
from tortoise import fields
from tortoise.contrib.pydantic import pydantic_model_creator

class Course(Model):
    id = fields.IntField(pk=True)
    instructor = fields.CharField(max_length=30,nullable=False)
    instructor_position = fields.CharField(max_length=30,nullable=False)
    course_title = fields.CharField(max_length=30,nullable=False)
    course_duration = fields.IntField(max_length=30,nullable=False)
    price = fields.IntField(max_length=30,nullable=False)


class Instructor(Model):
    id = fields.IntField(pk=True)
    name = fields.CharField(max_length=30,nullable=False)
    position = fields.CharField(max_length=30,nullable=False)
    followers = fields.IntField(max_length=30,nullable=False)
    cursor = fields.IntField(max_length=30,nullable=False)


# Create Pydantic models
Course_Pydantic = pydantic_model_creator(Course, name="Course")
CourseIn_Pydantic = pydantic_model_creator(Course, name="CourseIn", exclude_readonly=True)

Instructor_Pydantic = pydantic_model_creator(Instructor, name="Instructor")
InstructorIn_Pydantic = pydantic_model_creator(Instructor, name="InstructorIn", exclude_readonly=True)