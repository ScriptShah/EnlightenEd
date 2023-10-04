from flask import Flask, jsonify, request
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

courses = []
instructors = []



def load_data():
    global courses
    try:
        with open("courses.json", "r") as file:    
            courses = json.load(file)
    except FileNotFoundError:
        courses = []

def load_data2():
    global instructors
    try:
        with open("instructors.json", "r") as file:    
            instructors = json.load(file)
    except FileNotFoundError:
        instructors = []




def save_data():
    with open("courses.json", "w") as file:
        json.dump(courses, file)

def save_data2():
    with open("instructors.json", "w") as file:
        json.dump(instructors, file)





@app.route("/courses", methods=["GET"])
def get_courses():
    return jsonify(courses)

@app.route("/instructors", methods=["GET"])
def get_instructors():
    return jsonify(instructors)    






@app.route("/courses", methods=["POST"])
def add_course():
    new_course = request.get_json()
    new_course["id"] = len(courses) + 1
    courses.append(new_course)
    save_data()
    return jsonify(new_course)


@app.route("/instructors", methods=["POST"])
def add_instructor():
    new_instructor = request.get_json()
    new_instructor["id"] = len(instructors) + 1
    instructors.append(new_instructor)
    save_data()
    return jsonify(new_instructor)








@app.route("/courses/<int:course_id>", methods=["DELETE"])
def delete_course(course_id):
    course = next((course for course in courses if course["id"] == course_id), None)
    if course:
        courses.remove(course)
        save_data()
        return jsonify({"message": "Course deleted"})
    else:
        return jsonify({"message": "Course not found"}), 404

if __name__ == "__main__":
    load_data()
    app.run(debug=True)



@app.route("/instructors/<int:instructor_id>", methods=["DELETE"])
def delete_instructor(instructor_id):
    instructor = next((instructor for instructor in instructors if course["id"] == instructor_id), None)
    if instructor:
        instructors.remove(instructor)
        save_data()
        return jsonify({"message": "instructor deleted"})
    else:
        return jsonify({"message": "instructor not found"}), 404

if __name__ == "__main__":
    load_data()
    load_data2()
    app.run(debug=True)